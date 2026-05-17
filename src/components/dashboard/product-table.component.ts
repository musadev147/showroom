import { BaseComponent } from '../common/base.component';
import { Product } from '../../types/product.types';
import { formatCurrency, formatDate } from '../../utils/formatters';

interface ProductTableProps {
  products: Product[];
  isLoading: boolean;
  onDeleteProduct?: (id: string) => void;
}

export class ProductTableComponent extends BaseComponent {
  private props: ProductTableProps;

  constructor(props: ProductTableProps) {
    super();
    this.props = props;
  }

  public render(): string {
    const { products, isLoading } = this.props;

    if (isLoading) {
      return `
        <div class="table-loading-container">
          <div class="spinner-inline"></div>
          <p>Syncing items with live inventory...</p>
        </div>
      `;
    }

    if (!products.length) {
      return `
        <div class="table-empty-container">
          <div class="empty-icon">📦</div>
          <h3>No products in catalog</h3>
          <p>Create a product using the "Add Product" button above.</p>
        </div>
      `;
    }

    const rows = products
      .map(
        (product) => `
      <tr class="table-row" data-id="${product.id}">
        <td>
          <div class="product-cell">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-img" />
            <div class="product-info">
              <span class="product-name">${product.name}</span>
              <span class="product-desc">${product.description.substring(0, 50)}...</span>
            </div>
          </div>
        </td>
        <td><span class="category-badge">${product.category}</span></td>
        <td class="text-right font-semibold">${formatCurrency(product.price)}</td>
        <td class="text-right">
          <span class="stock-badge ${product.stock < 15 ? 'stock-low' : 'stock-ok'}">
            ${product.stock} units
          </span>
        </td>
        <td>${formatDate(product.createdAt)}</td>
        <td>
          <button class="btn-delete" data-id="${product.id}" title="Remove Product">
            🗑️
          </button>
        </td>
      </tr>
    `
      )
      .join('');

    return `
      <div class="table-wrapper animate-fade-in">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 40%">Product Details</th>
              <th>Category</th>
              <th class="text-right">Price</th>
              <th class="text-right">Stock</th>
              <th>Created At</th>
              <th style="width: 80px">Action</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    `;
  }

  protected afterMount(): void {
    if (this.props.onDeleteProduct && this.element) {
      const deleteButtons = this.element.querySelectorAll('.btn-delete');
      deleteButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = (btn as HTMLElement).dataset.id;
          if (id) {
            this.props.onDeleteProduct!(id);
          }
        });
      });
    }
  }

  public setProps(newProps: Partial<ProductTableProps>): void {
    this.props = { ...this.props, ...newProps };
    if (this.element) {
      this.mount(this.element);
    }
  }
}
