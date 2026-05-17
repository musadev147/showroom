import { BaseComponent } from '../components/common/base.component';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product.types';
import { formatCurrency } from '../utils/formatters';

export class StorefrontPage extends BaseComponent {
  private products: Product[] = [];

  public render(): string {
    return `
      <div class="storefront-wrapper animate-fade-in">
        <!-- Transparent Glass Navigation Bar -->
        <nav class="storefront-nav">
          <div class="storefront-nav-logo">
            Marufa Showroom <span class="logo-dot"></span>
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
            <span class="hero-subtitle">Professional and Adaptive Spaces</span>
            <h1 class="hero-title">Crafted for Clarity.<br>Luxury Designed for Life.</h1>
            <p class="hero-description">
              Elevating simple structures into statement spaces. Discover curated furniture collections blending sustainable organic ashwood, sleek steel mesh panels, and timeless design aesthetics.
            </p>
            <div class="storefront-hero-actions mt-4">
              <a href="#shop" class="btn btn-primary" style="text-decoration: none;">Discover Collection →</a>
            </div>
          </div>
          <div class="storefront-hero-media">
            <div class="hero-img-backdrop"></div>
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80" alt="Luxury Living Space Showcase" class="storefront-hero-img" />
          </div>
        </header>

        <!-- Intro Detail Banner Section -->
        <section class="storefront-intro">
          <span class="intro-tag">Design Principles</span>
          <p class="intro-text">
            Where concepts become reality — this evolving showroom blends exquisite craftsmanship, structural detail, and adaptive design, <span class="highlight-green">shaping physical environments</span> that reflect elegance and purpose.
          </p>
        </section>

        <!-- Catalog Showcase Section -->
        <section id="shop" class="storefront-catalog-section">
          <div class="catalog-header">
            <div class="catalog-title-group">
              <h2>Timeless furniture for modern spaces</h2>
              <p>Explore our premium architectural catalog of seating, desks, cabinets and accessories.</p>
            </div>
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
                The ashwood coffee table completely redefined our living room layout. The structural drawer lines are clean and perfect.
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Sophia Larson" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Sophia Larson</span>
                  <span class="author-title">Interior Architect, Oslo</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                I love the design and durability of the Nordic Sideboard Cabinet. It blends perfectly with my minimalist design philosophy.
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Marcus Vane" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Marcus Vane</span>
                  <span class="author-title">Lead Designer, Stockholm</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                Exceptional customer service and fast shipping. The charcoal sofa bench is robust, heavy, and extremely comfortable.
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Elena Rostova" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Elena Rostova</span>
                  <span class="author-title">Visual Stylist, Copenhagen</span>
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
              <h2>Download Your Insights Now</h2>
              <p>Access our detailed catalog guides, design case studies, and customized space calculators on the go.</p>
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
              <div class="storefront-nav-logo">
                Marufa Showroom <span class="logo-dot"></span>
              </div>
              <p>Crafting high-performance structural workspaces and luxury home environments with architectural precision.</p>
            </div>
            <div class="footer-col">
              <h4>Innovations</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Eco-materials</a></li>
                <li class="footer-link"><a href="#">Modular joints</a></li>
                <li class="footer-link"><a href="#">Custom fabrics</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Collection</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Lounge Chairs</a></li>
                <li class="footer-link"><a href="#">Work Desks</a></li>
                <li class="footer-link"><a href="#">Cabinets</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Community</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Architect forum</a></li>
                <li class="footer-link"><a href="#">Local meetups</a></li>
                <li class="footer-link"><a href="#">Impact report</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Partners</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Dealers portal</a></li>
                <li class="footer-link"><a href="#">Press kits</a></li>
                <li class="footer-link"><a href="#">Design affiliate</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span class="copyright">© ${new Date().getFullYear()} Marufa Inc. All rights reserved.</span>
            <div class="social-links">
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">Pinterest</a>
            </div>
          </div>
        </footer>
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

  private renderCatalog(): void {
    const mountPoint = this.element?.querySelector('#storefront-catalog-mount') as HTMLElement;
    if (!mountPoint) return;

    if (!this.products.length) {
      mountPoint.innerHTML = `
        <div class="grid-empty-container">
          <div class="empty-icon">📦</div>
          <h3>Showroom is empty</h3>
          <p>Please log in as Administrator to register luxury assets.</p>
        </div>
      `;
      return;
    }

    const cardsHtml = this.products
      .map(
        (product) => `
        <div class="storefront-product-card animate-fade-in">
          <!-- Image frame -->
          <div class="storefront-product-img-wrapper">
            <img src="${product.imageUrl}" alt="${product.name}" class="storefront-product-img" />
            <span class="storefront-product-stock ${product.stock < 15 ? 'stock-low-badge' : 'stock-ok-badge'}">
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
            <button class="btn-add-cart-neon btn-cart-trigger" data-name="${product.name}">
              Add to cart <span style="font-weight: 300;">+</span>
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

    // Attach cart trigger notifications
    const cartTriggers = mountPoint.querySelectorAll('.btn-cart-trigger');
    cartTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const productName = (trigger as HTMLElement).dataset.name;
        window.dispatchEvent(
          new CustomEvent('app:toast', {
            detail: {
              message: `Added ${productName} to your cart successfully!`,
              type: 'success',
            },
          })
        );
      });
    });
  }
}
