import { BaseComponent } from '../components/common/base.component';
import { InputComponent } from '../components/common/input.component';
import { ButtonComponent } from '../components/common/button.component';
import { AuthService } from '../services/auth.service';

export class LoginPage extends BaseComponent {
  private emailInput!: InputComponent;
  private passwordInput!: InputComponent;
  private submitButton!: ButtonComponent;
  private errorElement: HTMLElement | null = null;

  public render(): string {
    return `
      <div class="login-wrapper">
        <div class="login-glow"></div>
        <div class="glass-card login-card animate-fade-in">
          <div class="login-header">
            <h1 class="text-gradient">Marufa Admin</h1>
            <p>Boilerplate System Login</p>
          </div>
          
          <div id="login-error-container"></div>
          
          <form id="login-form" class="login-form">
            <div id="email-field-container"></div>
            <div id="password-field-container"></div>
            <div id="submit-btn-container" class="mt-6"></div>
          </form>
          
          <div class="login-footer">
            <p>Demo credentials: <code class="credential-code">admin@marufa.io</code> / <code class="credential-code">password123</code></p>
            <p class="mt-4"><a class="btn-back-showroom" style="color: var(--text-secondary); text-decoration: underline; cursor: pointer; font-size: 0.875rem;">← Back to Showroom</a></p>
          </div>
        </div>
      </div>
    `;
  }

  protected afterMount(): void {
    const emailContainer = this.element?.querySelector('#email-field-container') as HTMLElement;
    const passwordContainer = this.element?.querySelector(
      '#password-field-container'
    ) as HTMLElement;
    const submitContainer = this.element?.querySelector('#submit-btn-container') as HTMLElement;
    this.errorElement = this.element?.querySelector('#login-error-container') as HTMLElement;

    // Instantiate modular inputs
    this.emailInput = new InputComponent({
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your admin email',
      required: true,
      id: 'login-email',
      name: 'email',
      value: 'admin@marufa.io', // fill in default for user speed
    });

    this.passwordInput = new InputComponent({
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      required: true,
      id: 'login-password',
      name: 'password',
      value: 'password123', // fill in default
    });

    this.submitButton = new ButtonComponent({
      label: 'Verify Credentials',
      type: 'submit',
      variant: 'primary',
      id: 'login-submit',
    });

    // Mount them to the view slots
    this.emailInput.mount(emailContainer);
    this.passwordInput.mount(passwordContainer);
    this.submitButton.mount(submitContainer);

    // Form submission binding
    const form = this.element?.querySelector('#login-form');
    form?.addEventListener('submit', (e) => {
      this.handleLogin(e);
    });

    // Back to showroom redirect binding
    const backBtn = this.element?.querySelector('.btn-back-showroom');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('app:navigate', { detail: { route: 'storefront' } }));
      });
    }
  }

  private async handleLogin(e: Event): Promise<void> {
    e.preventDefault();
    if (!this.errorElement) return;

    this.errorElement.innerHTML = '';
    const email = this.emailInput.getValue();
    const password = this.passwordInput.getValue();

    // Basic Validation check
    if (!email || !password) {
      this.showError('Both email and password fields are required.');
      return;
    }

    try {
      this.submitButton.setProps({ isLoading: true });
      await AuthService.login(email, password);
      // Auth success triggers main app state transitions automatically
    } catch (error) {
      const err = error as Error;
      this.showError(err.message || 'Verification failed. Please check your credentials.');
      this.submitButton.setProps({ isLoading: false });
    }
  }

  private showError(message: string): void {
    if (this.errorElement) {
      this.errorElement.innerHTML = `
        <div class="alert alert-danger animate-fade-in">
          <span class="alert-icon">⚠️</span>
          <span class="alert-text">${message}</span>
        </div>
      `;
    }
  }
}
