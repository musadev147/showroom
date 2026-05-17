import { BaseComponent } from '../components/common/base.component';
import { StatsCardComponent } from '../components/dashboard/stats-card.component';
import { ProductTableComponent } from '../components/dashboard/product-table.component';
import { ButtonComponent } from '../components/common/button.component';
import { InputComponent } from '../components/common/input.component';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Product, ProductInput } from '../types/product.types';
import { formatCurrency } from '../utils/formatters';
import logoImg from '../assets/images/logo.png';

export class DashboardPage extends BaseComponent {
  private products: Product[] = [];

  // Components
  private statsCardsContainer!: HTMLElement;
  private tableContainer!: HTMLElement;
  private productTable!: ProductTableComponent;

  // Modal controllers
  private addProductModal!: HTMLElement;
  private addProductButton!: ButtonComponent;
  private saveProductButton!: ButtonComponent;
  private cancelProductButton!: ButtonComponent;

  // Modal Inputs
  private inputName!: InputComponent;
  private inputCategory!: InputComponent;
  private inputPrice!: InputComponent;
  private inputStock!: InputComponent;
  private inputDesc!: InputComponent;

  public render(): string {
    const user = AuthService.getCurrentUser();

    return `
      <div class="dashboard-wrapper animate-fade-in">
        <!-- Header -->
        <header class="dashboard-header glass-card">
          <div class="header-left" style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${logoImg}" alt="Marufa Logo" style="height: 38px; width: auto; object-fit: contain; border-radius: 4px;" />
            <div>
              <h1 class="text-gradient" style="margin: 0; font-size: 1.5rem;">Marufa Control Center</h1>
              <p style="margin: 0; font-size: 0.875rem;">Welcome back, <span class="username-highlight">${user?.username || 'Administrator'}</span></p>
            </div>
          </div>
          <div class="header-right">
            <button id="btn-logout" class="btn btn-ghost" title="Sign Out">Logout 🚪</button>
          </div>
        </header>

        <!-- Stats Section -->
        <section id="stats-cards-row" class="grid-cols-3 mt-6"></section>

        <!-- Main Content Area -->
        <main class="dashboard-content-card glass-card mt-6">
          <div class="content-header">
            <div class="header-title">
              <h2>Product Catalog</h2>
              <p>Type-safe asynchronous CRUD control matrix</p>
            </div>
            <div class="header-actions">
              <div id="add-product-btn-slot"></div>
            </div>
          </div>

          <!-- Product Table slot -->
          <div id="product-table-slot" class="mt-4"></div>
        </main>

        <!-- Dynamic Modal Backdrop for Adding Products -->
        <div id="add-product-modal" class="modal-backdrop hidden">
          <div class="glass-card modal-content animate-fade-in">
            <div class="modal-header">
              <h2 class="text-gradient">Register New Asset</h2>
              <button id="btn-close-modal" class="btn-close-x">&times;</button>
            </div>
            
            <form id="modal-form" class="modal-form mt-4">
              <div class="grid-cols-2">
                <div id="modal-input-name"></div>
                <div id="modal-input-category"></div>
              </div>
              <div class="grid-cols-2 mt-4">
                <div id="modal-input-price"></div>
                <div id="modal-input-stock"></div>
              </div>
              <div class="mt-4" id="modal-input-desc"></div>
              
              <div class="modal-footer mt-6">
                <div id="modal-btn-cancel"></div>
                <div id="modal-btn-save"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  protected afterMount(): void {
    // Bind main elements
    this.statsCardsContainer = this.element?.querySelector('#stats-cards-row') as HTMLElement;
    this.tableContainer = this.element?.querySelector('#product-table-slot') as HTMLElement;
    this.addProductModal = this.element?.querySelector('#add-product-modal') as HTMLElement;

    // Logout operation binding
    const logoutBtn = this.element?.querySelector('#btn-logout');
    logoutBtn?.addEventListener('click', (): void => {
      AuthService.logout();
    });

    // Mount header "Add Product" button
    this.addProductButton = new ButtonComponent({
      label: 'Add Product ➕',
      variant: 'primary',
      onClick: (): void => this.showModal(),
    });
    this.addProductButton.mount(
      this.element?.querySelector('#add-product-btn-slot') as HTMLElement
    );

    // Initialize & mount modal inputs
    this.inputName = new InputComponent({
      label: 'Product Name',
      placeholder: 'e.g. Jamdani Saree',
      required: true,
      id: 'modal-pname',
      name: 'pname',
    });
    this.inputCategory = new InputComponent({
      label: 'Category',
      placeholder: 'e.g. Sarees',
      required: true,
      id: 'modal-pcat',
      name: 'pcat',
    });
    this.inputPrice = new InputComponent({
      label: 'Price (৳)',
      type: 'number',
      placeholder: 'e.g. 199.00',
      required: true,
      id: 'modal-pprice',
      name: 'pprice',
    });
    this.inputStock = new InputComponent({
      label: 'Starting Stock',
      type: 'number',
      placeholder: 'e.g. 50',
      required: true,
      id: 'modal-pstock',
      name: 'pstock',
    });
    this.inputDesc = new InputComponent({
      label: 'Product Description',
      placeholder: 'Provide full product specifications here...',
      required: true,
      id: 'modal-pdesc',
      name: 'pdesc',
    });

    this.inputName.mount(this.element?.querySelector('#modal-input-name') as HTMLElement);
    this.inputCategory.mount(this.element?.querySelector('#modal-input-category') as HTMLElement);
    this.inputPrice.mount(this.element?.querySelector('#modal-input-price') as HTMLElement);
    this.inputStock.mount(this.element?.querySelector('#modal-input-stock') as HTMLElement);
    this.inputDesc.mount(this.element?.querySelector('#modal-input-desc') as HTMLElement);

    // Initialize modal action buttons
    this.saveProductButton = new ButtonComponent({
      label: 'Save Asset 💾',
      type: 'submit',
      variant: 'primary',
    });
    this.cancelProductButton = new ButtonComponent({
      label: 'Cancel',
      variant: 'ghost',
      onClick: (): void => this.hideModal(),
    });

    this.saveProductButton.mount(this.element?.querySelector('#modal-btn-save') as HTMLElement);
    this.cancelProductButton.mount(this.element?.querySelector('#modal-btn-cancel') as HTMLElement);

    // Modal close x button binding
    const closeModalX = this.element?.querySelector('#btn-close-modal');
    closeModalX?.addEventListener('click', (): void => {
      this.hideModal();
    });

    // Modal submit listener
    const modalForm = this.element?.querySelector('#modal-form');
    modalForm?.addEventListener('submit', (e: Event): void => {
      void this.handleSaveProduct(e);
    });

    // Load initial products list
    this.loadProducts();
  }

  private async loadProducts(): Promise<void> {
    this.renderLoadingTable();
    this.renderLoadingStats();

    try {
      const data = await ProductService.getProducts();
      this.products = data.items;

      this.renderStats();
      this.renderTable();
    } catch (error) {
      this.showGlobalError('Unable to connect to service registry.');
    }
  }

  private renderLoadingStats(): void {
    if (this.statsCardsContainer) {
      this.statsCardsContainer.innerHTML = `
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
      `;
    }
  }

  private renderLoadingTable(): void {
    if (this.tableContainer) {
      this.productTable = new ProductTableComponent({
        products: [],
        isLoading: true,
      });
      this.productTable.mount(this.tableContainer);
    }
  }

  private renderStats(): void {
    if (!this.statsCardsContainer) return;

    const metrics = ProductService.calculateDashboardMetrics(this.products);
    this.statsCardsContainer.innerHTML = '';

    // Create 3 stats summary cards
    const card1 = new StatsCardComponent({
      title: 'Total Active Products',
      value: metrics.totalProducts,
      trend: '+12% this month',
      trendType: 'up',
      icon: '📦',
      color: 'primary',
    });

    const card2 = new StatsCardComponent({
      title: 'Gross Valuation',
      value: formatCurrency(metrics.totalStockValue),
      trend: '+24.5% vs Q1',
      trendType: 'up',
      icon: '💵',
      color: 'success',
    });

    const card3 = new StatsCardComponent({
      title: 'Restock Warnings',
      value: metrics.lowStockCount,
      trend: `${metrics.lowStockCount > 2 ? 'Action required' : 'Optimal catalog status'}`,
      trendType: metrics.lowStockCount > 2 ? 'down' : 'neutral',
      icon: '⚠️',
      color: 'warning',
    });

    // Create cards containers
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    this.statsCardsContainer.appendChild(div1);
    this.statsCardsContainer.appendChild(div2);
    this.statsCardsContainer.appendChild(div3);

    card1.mount(div1);
    card2.mount(div2);
    card3.mount(div3);
  }

  private renderTable(): void {
    if (!this.tableContainer) return;

    this.productTable = new ProductTableComponent({
      products: this.products,
      isLoading: false,
      onDeleteProduct: (id: string): void => {
        void this.handleDeleteProduct(id);
      },
    });
    this.productTable.mount(this.tableContainer);
  }

  private async handleDeleteProduct(id: string): Promise<void> {
    if (!confirm('Are you sure you want to purge this asset from live inventory?')) return;

    try {
      this.renderLoadingTable();
      await ProductService.removeProduct(id);

      // Dispatch alert
      this.showToast('Asset successfully purged.', 'success');

      // Refresh list
      await this.loadProducts();
    } catch (error) {
      const err = error as Error;
      this.showToast(err.message || 'Error purging asset.', 'error');
      this.renderTable();
    }
  }

  private async handleSaveProduct(e: Event): Promise<void> {
    e.preventDefault();

    const name = this.inputName.getValue();
    const category = this.inputCategory.getValue();
    const price = parseFloat(this.inputPrice.getValue());
    const stock = parseInt(this.inputStock.getValue());
    const description = this.inputDesc.getValue();

    if (!name || !category || isNaN(price) || isNaN(stock) || !description) {
      this.showToast('Please fulfill all required fields.', 'warning');
      return;
    }

    const payload: ProductInput = { name, category, price, stock, description };

    try {
      this.saveProductButton.setProps({ isLoading: true });
      await ProductService.addProduct(payload);

      this.showToast('Asset registered successfully.', 'success');
      this.hideModal();

      // Reset form
      const form = this.element?.querySelector('#modal-form') as HTMLFormElement;
      form?.reset();

      // Refresh list
      await this.loadProducts();
    } catch (error) {
      const err = error as Error;
      this.showToast(err.message || 'Error registering asset.', 'error');
    } finally {
      this.saveProductButton.setProps({ isLoading: false });
    }
  }

  private showModal(): void {
    if (this.addProductModal) {
      this.addProductModal.classList.remove('hidden');
    }
  }

  private hideModal(): void {
    if (this.addProductModal) {
      this.addProductModal.classList.add('hidden');
    }
  }

  private showToast(message: string, type: 'success' | 'error' | 'warning'): void {
    window.dispatchEvent(
      new CustomEvent('app:toast', {
        detail: { message, type },
      })
    );
  }

  private showGlobalError(message: string): void {
    if (this.tableContainer) {
      this.tableContainer.innerHTML = `
        <div class="alert alert-danger animate-fade-in mt-4">
          <span class="alert-icon">❌</span>
          <span class="alert-text">${message}</span>
          <button class="btn btn-ghost btn-sm ml-auto" onclick="window.location.reload()">Retry</button>
        </div>
      `;
    }
  }
}
