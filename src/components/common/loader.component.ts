import { BaseComponent } from './base.component';

interface LoaderProps {
  type?: 'fullscreen' | 'inline' | 'skeleton';
  message?: string;
}

export class LoaderComponent extends BaseComponent {
  private props: LoaderProps;

  constructor(props: LoaderProps = {}) {
    super();
    this.props = {
      type: 'fullscreen',
      message: 'Loading secure environment...',
      ...props,
    };
  }

  public render(): string {
    const { type, message } = this.props;

    if (type === 'fullscreen') {
      return `
        <div class="loader-overlay animate-fade-in">
          <div class="loader-container">
            <div class="loader-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p class="loader-text">${message}</p>
          </div>
        </div>
      `;
    }

    if (type === 'skeleton') {
      return `
        <div class="skeleton-wrapper animate-fade-in">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-body"></div>
          <div class="skeleton-line skeleton-body"></div>
          <div class="skeleton-line skeleton-body"></div>
        </div>
      `;
    }

    return `
      <div class="loader-inline animate-fade-in">
        <div class="spinner-inline"></div>
        <span>${message || 'Processing...'}</span>
      </div>
    `;
  }
}
