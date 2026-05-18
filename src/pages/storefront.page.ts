import { BaseComponent } from '../components/common/base.component';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product.types';
import { formatCurrency } from '../utils/formatters';
import logoImg from '../assets/images/logo.png';
import heroImg from '../assets/images/maru.jpeg';

export class StorefrontPage extends BaseComponent {
  private products: Product[] = [];
  private selectedCategory: string = 'All';

  public render(): string {
    return `
      <style>
        /* Category Tabs Styling */
        .category-tab {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          padding: 0.65rem 1.5rem;
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .category-tab:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          color: var(--text-primary);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        .category-tab.active {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: #fff;
          border-color: transparent;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.4), 0 4px 10px rgba(168, 85, 247, 0.2);
        }

        /* Product Image Hover Effects */
        .storefront-product-img-wrapper {
          cursor: pointer;
          overflow: hidden;
          position: relative;
        }

        .storefront-product-img {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .storefront-product-img-wrapper:hover .storefront-product-img {
          transform: scale(1.06);
        }

        /* Custom Scrollbar for details description */
        .details-desc-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .details-desc-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .details-desc-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
        }
        .details-desc-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      </style>

      <div class="storefront-wrapper animate-fade-in">
        <!-- Transparent Glass Navigation Bar -->
        <nav class="storefront-nav">
          <div class="storefront-nav-logo" style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${logoImg}" alt="Marufa Logo" style="height: 38px; width: auto; object-fit: contain; border-radius: 4px;" />
            <span>Marufa Showroom</span>
          </div>
          <ul class="storefront-nav-links">
            <li><a class="storefront-nav-link active">Home</a></li>
            <li><a class="storefront-nav-link" href="#shop">Collection</a></li>
            <li><a class="storefront-nav-link" href="#stories">Stories</a></li>
            <li><a class="storefront-nav-link" href="#about">About</a></li>
          </ul>
          <div class="storefront-nav-actions">
            <button class="btn btn-secondary btn-admin-login" style="padding: 0.5rem 1.25rem; font-size: 0.8125rem;">
              Admin Console 🖥️
            </button>
          </div>
        </nav>

        <!-- Beautiful Hero Header Section -->
        <header class="storefront-hero">
          <div class="storefront-hero-content">
            <span class="hero-subtitle">Premium Bangladeshi Fashion</span>
            <h1 class="hero-title">Elegance in Every Thread.<br>Tradition Meets Modernity.</h1>
            <p class="hero-description">
              Discover curated fashion collections blending authentic hand-woven fabrics, intricate embroidery, and timeless Bangladeshi design aesthetics.
            </p>
            <div class="storefront-hero-actions mt-4">
              <a href="#shop" class="btn btn-primary" style="text-decoration: none;">Discover Collection →</a>
            </div>
          </div>
          <div class="storefront-hero-media">
            <div class="hero-img-backdrop"></div>
            <img src="${heroImg}" alt="Premium Fashion Showcase" class="storefront-hero-img" style="object-fit: cover; width: 100%; height: 100%; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);" />
          </div>
        </header>

        <!-- Intro Detail Banner Section -->
        <section class="storefront-intro">
          <span class="intro-tag">Design Principles</span>
          <p class="intro-text">
            Where concepts become reality — this evolving showroom blends exquisite craftsmanship, structural detail, and adaptive design, <span class="highlight-green">shaping elegance</span> that reflects your unique identity.
          </p>
        </section>

        <!-- Catalog Showcase Section -->
        <section id="shop" class="storefront-catalog-section">
          <div class="catalog-header" style="flex-direction: column; align-items: center; text-align: center; margin-bottom: 3rem;">
            <div class="catalog-title-group">
              <h2 style="font-size: 2.75rem;">Timeless fashion for every occasion</h2>
              <p style="font-size: 1.05rem; margin-top: 0.75rem; color: var(--text-secondary);">Explore our premium catalog of Sarees, Salwar Kameez, Panjabis, and Lehengas.</p>
            </div>
          </div>

          <!-- Dynamic Category Tabs -->
          <div id="storefront-category-tabs" class="category-filter-wrapper animate-fade-in" style="margin-bottom: 3.5rem; display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;">
             <!-- Inject dynamic categories -->
          </div>

          <!-- Mount point for products catalog -->
          <div id="storefront-catalog-mount">
            <div class="grid-loading-container">
              <div class="spinner-inline"></div>
              <p>Loading curated catalogue...</p>
            </div>
          </div>
        </section>

        <!-- Stories Testimonials Section -->
        <section id="stories" class="storefront-stories">
          <span class="hero-subtitle" style="display: block; text-align: center;">Testimonials</span>
          <h2 style="font-size: 2.25rem; font-weight: 800; text-align: center; color: #fff; margin-top: 0.5rem; letter-spacing: -0.02em;">
            Stories Behind Every Space
          </h2>
          
          <div class="stories-grid">
            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                The Jamdani Saree I purchased was absolutely breathtaking. The quality is unmatched and delivery was prompt!
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Sophia Larson" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Sumaiya Rahman</span>
                  <span class="author-title">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                The Panjabi's fabric and embroidery are exceptionally detailed. Perfect for Eid and family gatherings!
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Marcus Vane" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Rakib Hossain</span>
                  <span class="author-title">Chittagong, Bangladesh</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                Fast shipping across Bangladesh! The Georgette Kurti set is gorgeous and fits perfectly.
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Elena Rostova" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Nusrat Jahan</span>
                  <span class="author-title">Sylhet, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Download Banner Section -->
        <section class="storefront-download-banner">
          <div class="download-banner-card">
            <div class="download-banner-glow"></div>
            <div class="download-content">
              <h2>Download Our App Now</h2>
              <p>Get exclusive offers, faster checkout, and browse our latest collections easily from your mobile device.</p>
            </div>
            <div class="download-badges">
              <a href="#" class="badge-btn">
                <span class="badge-icon"></span> App Store
              </a>
              <a href="#" class="badge-btn">
                <span class="badge-icon">🤖</span> Google Play
              </a>
            </div>
          </div>
        </section>

        <!-- Elegant Cyber-Glass Footer -->
        <footer id="about" class="storefront-footer">
          <div class="footer-container">
            <div class="footer-brand">
              <div class="storefront-nav-logo" style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <img src="${logoImg}" alt="Marufa Logo" style="height: 30px; width: auto; object-fit: contain; border-radius: 4px;" />
                <span>Marufa Showroom</span>
              </div>
              <p>Crafting authentic Bangladeshi fashion with premium fabrics and modern design precision.</p>
            </div>
            <div class="footer-col">
              <h4>Categories</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Jamdani Sarees</a></li>
                <li class="footer-link"><a href="#">Salwar Kameez</a></li>
                <li class="footer-link"><a href="#">Premium Panjabis</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Support</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Delivery Information</a></li>
                <li class="footer-link"><a href="#">Return Policy</a></li>
                <li class="footer-link"><a href="#">Size Guide</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">About Us</a></li>
                <li class="footer-link"><a href="#">Careers</a></li>
                <li class="footer-link"><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Payments</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">SSL Commerz</a></li>
                <li class="footer-link"><a href="#">bKash / Nagad</a></li>
                <li class="footer-link"><a href="#">Visa / MasterCard</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span class="copyright">© ${new Date().getFullYear()} Marufa Inc. All rights reserved.</span>
            <div class="social-links">
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Twitter</a>
            </div>
          </div>
        </footer>

        <!-- Product Details Glassmorphism Modal -->
        <div id="product-details-modal" class="modal-backdrop hidden">
          <div class="glass-card modal-content animate-fade-in" style="max-width: 750px; padding: 2.5rem; background: rgba(10, 15, 30, 0.95); position: relative; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(168, 85, 247, 0.25);">
            <!-- Close button -->
            <button id="btn-close-details" class="btn-close-x" style="position: absolute; top: 1.5rem; right: 1.5rem; font-size: 2rem; color: rgba(255, 255, 255, 0.6); transition: color 0.2s;">&times;</button>
            
            <!-- Modal Content Grid -->
            <div class="product-details-grid" style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2.5rem; margin-top: 1rem;">
              <!-- Product Image Frame -->
              <div class="details-img-wrapper" style="position: relative; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.08); background: #0c0f1d; height: 350px; display: flex; align-items: center; justify-content: center;">
                <img id="details-img" src="" alt="Product Details Image" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              
              <!-- Product Meta Details -->
              <div class="details-info" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <span id="details-category" class="hero-subtitle" style="font-size: 0.75rem; letter-spacing: 0.12em; color: var(--color-secondary); font-weight: 700;">CATEGORY</span>
                  <h2 id="details-title" style="font-size: 2rem; font-weight: 800; color: #ffffff; margin-top: 0.5rem; line-height: 1.2; letter-spacing: -0.02em;">Product Name</h2>
                  
                  <div style="display: flex; align-items: center; gap: 1.25rem; margin: 1.25rem 0;">
                    <span id="details-price" style="font-size: 1.85rem; font-weight: 800; color: #fff; background: linear-gradient(135deg, #a855f7, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">৳ 0.00</span>
                    <span id="details-stock-badge" class="storefront-product-stock" style="position: static; padding: 0.35rem 0.85rem; border-radius: 30px; font-size: 0.75rem; font-weight: 700;">In Stock</span>
                  </div>
                  
                  <!-- Scrollable Description Panel -->
                  <p id="details-description" class="details-desc-scroll" style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem; margin-bottom: 1.5rem; max-height: 140px; overflow-y: auto; padding-right: 8px;">
                    Detailed item specifications...
                  </p>
                </div>
                
                <!-- Purchase Button Block -->
                <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.5rem;">
                  <button id="btn-buy-details" class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1.05rem; border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
                    Buy Now & Pay <span style="font-weight: 400; font-size: 1.15rem;">💳</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SSL Commerz Mock Modal -->
        <div id="ssl-modal" class="modal-backdrop hidden">
          <div class="glass-card modal-content animate-fade-in" style="max-width: 450px; background: #ffffff; color: #333; padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eaeaea; padding-bottom: 1rem; margin-bottom: 1.5rem;">
               <img src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png" alt="SSLCommerz" style="height: 35px;" />
               <button id="btn-close-ssl" class="btn-close-x" style="color: #666; font-size: 2rem;">&times;</button>
            </div>
            
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #111; margin-bottom: 0.5rem;">Secure Checkout</h3>
            <p style="color: #666; margin-bottom: 1.5rem; font-size: 0.95rem;">You are purchasing: <strong id="ssl-product-name" style="color: #333;">...</strong></p>
            
            <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center; border: 1px solid #eaeaea;">
               <span style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.25rem; text-transform: uppercase; letter-spacing: 0.05em;">Total Payable Amount</span>
               <span id="ssl-amount" style="font-size: 2rem; font-weight: 800; color: #00a859;">৳ 0.00</span>
            </div>

            <form id="ssl-form" style="text-align: left;">
              <div style="margin-bottom: 1.5rem;">
                <label style="font-size: 0.85rem; font-weight: 600; color: #444; margin-bottom: 0.5rem; display: block;">Mobile Number</label>
                <input type="tel" required placeholder="017XXXXXXXX" style="width: 100%; padding: 0.85rem; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; outline: none; transition: border 0.2s;" onfocus="this.style.borderColor='#00a859'" onblur="this.style.borderColor='#ccc'" />
              </div>
              <button type="submit" id="btn-pay-ssl" class="btn-primary" style="width: 100%; background: #00a859; box-shadow: 0 4px 15px rgba(0, 168, 89, 0.3); border: none; padding: 1rem; font-size: 1rem; font-weight: 700; border-radius: 6px; cursor: pointer; color: white;">
                Pay Securely
              </button>
            </form>

            <div id="ssl-loading" class="hidden" style="padding: 2rem 0; text-align: center;">
              <div class="spinner-inline" style="border-color: #00a859; border-bottom-color: transparent; width: 40px; height: 40px; margin: 0 auto; border-width: 3px;"></div>
              <p style="margin-top: 1rem; color: #444; font-weight: 500; font-size: 1rem;">Processing with SSLCommerz...</p>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  protected afterMount(): void {
    // Navigate to admin console login screen
    const loginBtn = this.element?.querySelector('.btn-admin-login');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('app:navigate', { detail: { route: 'login' } }));
      });
    }

    // SSL Commerz Modal Bindings
    const sslModal = this.element?.querySelector('#ssl-modal');
    const btnCloseSsl = this.element?.querySelector('#btn-close-ssl');
    const sslForm = this.element?.querySelector('#ssl-form') as HTMLFormElement;

    if (btnCloseSsl && sslModal) {
      btnCloseSsl.addEventListener('click', () => {
        sslModal.classList.add('hidden');
      });
    }

    if (sslForm) {
      sslForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hide form, show loading
        sslForm.classList.add('hidden');
        const sslLoading = this.element?.querySelector('#ssl-loading');
        if (sslLoading) sslLoading.classList.remove('hidden');

        // Simulate network request
        setTimeout(() => {
          sslModal?.classList.add('hidden');
          sslForm.classList.remove('hidden');
          if (sslLoading) sslLoading.classList.add('hidden');
          sslForm.reset();

          window.dispatchEvent(
            new CustomEvent('app:toast', {
              detail: {
                message: 'Payment Successful! Thank you for shopping at Marufa Showroom.',
                type: 'success',
              },
            })
          );
        }, 2000);
      });
    }

    // Product Details Modal Close Bindings
    const detailsModal = this.element?.querySelector('#product-details-modal');
    const btnCloseDetails = this.element?.querySelector('#btn-close-details');
    if (btnCloseDetails && detailsModal) {
      btnCloseDetails.addEventListener('click', () => {
        detailsModal.classList.add('hidden');
      });
      // Close on clicking backdrop
      detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
          detailsModal.classList.add('hidden');
        }
      });
    }

    // Load products asynchronously
    this.loadCatalog();
  }

  private async loadCatalog(): Promise<void> {
    try {
      const data = await ProductService.getProducts();
      this.products = data.items;
      this.renderCatalog();
    } catch (err) {
      const mountPoint = this.element?.querySelector('#storefront-catalog-mount') as HTMLElement;
      if (mountPoint) {
        mountPoint.innerHTML = `
          <div class="grid-empty-container" style="border-color: var(--color-danger);">
            <div class="empty-icon">⚠️</div>
            <h3>Failed to load catalog</h3>
            <p>Could not synchronize items with inventory servers.</p>
          </div>
        `;
      }
    }
  }

  private getCategories(): string[] {
    const categoriesSet = new Set<string>();
    this.products.forEach((p) => {
      if (p.category) categoriesSet.add(p.category);
    });
    
    if (categoriesSet.size === 0) {
      return ['All', 'Gowns', 'Summer Dresses', 'Frocks', 'Casual Dresses', 'Bohemian'];
    }
    return ['All', ...Array.from(categoriesSet)];
  }

  private renderCategories(): void {
    const catContainer = this.element?.querySelector('#storefront-category-tabs') as HTMLElement;
    if (!catContainer) return;

    const categories = this.getCategories();
    catContainer.innerHTML = categories
      .map(
        (cat) => `
        <button class="category-tab ${this.selectedCategory === cat ? 'active' : ''}" data-category="${cat}">
          ${cat === 'All' ? '✨ All Collections' : cat}
        </button>
      `
      )
      .join('');

    // Bind tab clicks
    const tabs = catContainer.querySelectorAll('.category-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        this.selectedCategory = (tab as HTMLElement).dataset.category || 'All';
        this.renderCatalog();
      });
    });
  }

  private renderCatalog(): void {
    // Render/refresh category filters
    this.renderCategories();

    const mountPoint = this.element?.querySelector('#storefront-catalog-mount') as HTMLElement;
    if (!mountPoint) return;

    // Filter products locally by current selected category
    const filteredProducts =
      this.selectedCategory === 'All'
        ? this.products
        : this.products.filter(
            (p) => p.category.toLowerCase() === this.selectedCategory.toLowerCase()
          );

    if (!filteredProducts.length) {
      mountPoint.innerHTML = `
        <div class="grid-empty-container" style="padding: 3rem 1.5rem;">
          <div class="empty-icon">📦</div>
          <h3>No items found</h3>
          <p>There are no premium items cataloged in the "${this.selectedCategory}" selection yet.</p>
        </div>
      `;
      return;
    }

    const cardsHtml = filteredProducts
      .map(
        (product) => `
        <div class="storefront-product-card animate-fade-in">
          <!-- Image frame -->
          <div class="storefront-product-img-wrapper" style="background-color: #fcfcfc;">
            <img src="${product.imageUrl}" alt="${product.name}" class="storefront-product-img" data-product-id="${product.id}" style="object-fit: cover; width: 100%; height: 100%;" />
            <span class="storefront-product-stock ${product.stock < 5 ? 'stock-low-badge' : 'stock-ok-badge'}">
              Stock: ${product.stock} units
            </span>
          </div>

          <!-- Product Details -->
          <div class="storefront-product-info">
            <div class="storefront-product-left">
              <h4 class="storefront-product-name">${product.name}</h4>
              <span class="storefront-product-category">${product.category}</span>
            </div>
            <span class="storefront-product-price">${formatCurrency(product.price)}</span>
          </div>
          <p class="storefront-product-desc">${product.description.substring(0, 100)}...</p>

          <!-- Action block -->
          <div class="storefront-product-footer">
            <button class="btn-add-cart-neon btn-buy-trigger" data-name="${product.name}" data-price="${product.price}">
              Buy Now & Pay <span style="font-weight: 400; margin-left: 4px;">💳</span>
            </button>
          </div>
        </div>
      `
      )
      .join('');

    mountPoint.innerHTML = `
      <div class="storefront-product-grid">
        ${cardsHtml}
      </div>
    `;

    // Attach buy trigger modals to Buy buttons
    const buyTriggers = mountPoint.querySelectorAll('.btn-buy-trigger');
    buyTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation(); // Avoid triggering details modal if clicked inside card but not image
        const productName = (trigger as HTMLElement).dataset.name;
        const productPrice = parseFloat((trigger as HTMLElement).dataset.price || '0');

        const sslModal = this.element?.querySelector('#ssl-modal');
        const sslProductName = this.element?.querySelector('#ssl-product-name');
        const sslAmount = this.element?.querySelector('#ssl-amount');

        if (sslModal && sslProductName && sslAmount) {
          sslProductName.textContent = productName || 'Product';
          sslAmount.textContent = formatCurrency(productPrice);
          sslModal.classList.remove('hidden');
        }
      });
    });

    // Attach image clicks to show details modal
    const productCards = mountPoint.querySelectorAll('.storefront-product-card');
    productCards.forEach((card) => {
      const imgWrapper = card.querySelector('.storefront-product-img-wrapper') as HTMLElement;
      if (imgWrapper) {
        imgWrapper.addEventListener('click', () => {
          const img = imgWrapper.querySelector('.storefront-product-img') as HTMLElement;
          const productId = img?.dataset.productId;
          const product = this.products.find((p) => p.id === productId);
          if (product) {
            this.showProductDetails(product);
          }
        });
      }
    });
  }

  private showProductDetails(product: Product): void {
    const modal = this.element?.querySelector('#product-details-modal') as HTMLElement;
    const detailsImg = this.element?.querySelector('#details-img') as HTMLImageElement;
    const detailsCategory = this.element?.querySelector('#details-category') as HTMLElement;
    const detailsTitle = this.element?.querySelector('#details-title') as HTMLElement;
    const detailsPrice = this.element?.querySelector('#details-price') as HTMLElement;
    const detailsStockBadge = this.element?.querySelector('#details-stock-badge') as HTMLElement;
    const detailsDesc = this.element?.querySelector('#details-description') as HTMLElement;
    const btnBuyDetails = this.element?.querySelector('#btn-buy-details') as HTMLElement;

    if (
      modal &&
      detailsImg &&
      detailsCategory &&
      detailsTitle &&
      detailsPrice &&
      detailsStockBadge &&
      detailsDesc &&
      btnBuyDetails
    ) {
      detailsImg.src = product.imageUrl;
      detailsImg.alt = product.name;
      detailsCategory.textContent = product.category.toUpperCase();
      detailsTitle.textContent = product.name;
      detailsPrice.textContent = formatCurrency(product.price);

      // Stock level badge styling inside modal
      if (product.stock < 5) {
        detailsStockBadge.className = 'storefront-product-stock stock-low-badge';
        detailsStockBadge.textContent = `Only ${product.stock} left!`;
        detailsStockBadge.style.background = 'rgba(239, 68, 68, 0.15)';
        detailsStockBadge.style.color = '#ef4444';
        detailsStockBadge.style.border = '1px solid rgba(239, 68, 68, 0.3)';
      } else {
        detailsStockBadge.className = 'storefront-product-stock stock-ok-badge';
        detailsStockBadge.textContent = `In Stock: ${product.stock} units`;
        detailsStockBadge.style.background = 'rgba(34, 197, 94, 0.15)';
        detailsStockBadge.style.color = '#22c55e';
        detailsStockBadge.style.border = '1px solid rgba(34, 197, 94, 0.3)';
      }

      detailsDesc.textContent = product.description;

      // Bind buying button click inside details modal
      btnBuyDetails.onclick = () => {
        modal.classList.add('hidden');

        const sslModal = this.element?.querySelector('#ssl-modal');
        const sslProductName = this.element?.querySelector('#ssl-product-name');
        const sslAmount = this.element?.querySelector('#ssl-amount');

        if (sslModal && sslProductName && sslAmount) {
          sslProductName.textContent = product.name;
          sslAmount.textContent = formatCurrency(product.price);
          sslModal.classList.remove('hidden');
        }
      };

      modal.classList.remove('hidden');
    }
  }
}
