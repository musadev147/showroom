import { BaseComponent } from '../components/common/base.component';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product.types';
import { formatCurrency } from '../utils/formatters';
import logoImg from '../assets/images/logo.png';
import heroImg from '../assets/images/maru.jpeg';

export class StorefrontPage extends BaseComponent {
  private products: Product[] = [];

  public render(): string {
    return `
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
          <div class="catalog-header">
            <div class="catalog-title-group">
              <h2>Timeless fashion for every occasion</h2>
              <p>Explore our premium catalog of Sarees, Salwar Kameez, Panjabis, and Lehengas.</p>
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
          <div class="storefront-product-img-wrapper" style="background-color: #fcfcfc;">
            <img src="${product.imageUrl}" alt="${product.name}" class="storefront-product-img" style="object-fit: cover; width: 100%; height: 100%;" />
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

    // Attach buy trigger modals
    const buyTriggers = mountPoint.querySelectorAll('.btn-buy-trigger');
    buyTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
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
  }
}
