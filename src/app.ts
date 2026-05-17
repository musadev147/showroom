import { LoginPage } from './pages/login.page';
import { DashboardPage } from './pages/dashboard.page';
import { StorefrontPage } from './pages/storefront.page';
import { AuthService } from './services/auth.service';
import { BaseComponent } from './components/common/base.component';

export class App extends BaseComponent {
  private currentPage: BaseComponent | null = null;

  public render(): string {
    return `
      <div id="app-root" class="min-h-screen">
        <div id="page-mount-point" class="animate-fade-in"></div>
        <div id="notification-container"></div>
      </div>
    `;
  }

  protected afterMount(): void {
    // Check initial route
    this.handleRoute();

    // Bind custom event listeners for route navigate triggers
    window.addEventListener('app:navigate', (e: Event) => {
      const { route } = (e as CustomEvent).detail;
      this.transitionTo(route);
    });

    // Bind custom event listeners for auth changes
    window.addEventListener('auth:state-change', (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.isAuthenticated) {
        this.transitionTo('dashboard');
      } else {
        this.transitionTo('storefront');
      }
    });

    // Listen to custom toasts notifications events
    window.addEventListener('app:toast', (e: Event) => {
      const { message, type } = (e as CustomEvent).detail;
      this.triggerToast(message, type);
    });

    // Handle auto-logout triggers from HTTP interceptors
    window.addEventListener('auth:logout', () => {
      this.transitionTo('storefront');
      this.triggerToast('Session expired. Please sign in again.', 'warning');
    });
  }

  /**
   * Route navigator checking session states.
   */
  private handleRoute(): void {
    const isAuthed = AuthService.isAuthenticated();
    if (isAuthed) {
      this.transitionTo('dashboard');
    } else {
      this.transitionTo('storefront');
    }
  }

  /**
   * Handles smooth navigation transitions between Storefront, Login, and Dashboard layouts.
   */
  private transitionTo(route: 'storefront' | 'login' | 'dashboard'): void {
    // Cleanup previous page before mounting next
    if (this.currentPage) {
      this.currentPage.unmount();
    }

    const mountPoint = this.element?.querySelector('#page-mount-point') as HTMLElement;
    if (!mountPoint) return;

    // Enforce guard checking
    if (route === 'dashboard' && !AuthService.isAuthenticated()) {
      route = 'login';
    }

    if (route === 'dashboard') {
      this.currentPage = new DashboardPage();
    } else if (route === 'login') {
      this.currentPage = new LoginPage();
    } else {
      this.currentPage = new StorefrontPage();
    }

    this.currentPage.mount(mountPoint);
  }

  /**
   * Dynamic toast notification engine.
   */
  private triggerToast(message: string, type: 'success' | 'error' | 'warning'): void {
    const container = this.element?.querySelector('#notification-container') as HTMLElement;
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `notification ${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';

    toast.innerHTML = `
      <span class="notification-icon">${icon}</span>
      <span class="notification-message">${message}</span>
    `;

    container.appendChild(toast);

    // Auto-remove toast after 4 seconds
    setTimeout(() => {
      toast.style.animation = 'fadeIn 0.25s reverse forwards';
      setTimeout(() => {
        toast.remove();
      }, 250);
    }, 4000);
  }
}
