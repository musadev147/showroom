import { BaseComponent } from './base.component';

interface ButtonProps {
  label: string;
  type?: 'submit' | 'button';
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  id?: string;
}

export class ButtonComponent extends BaseComponent {
  private props: ButtonProps;

  constructor(props: ButtonProps) {
    super();
    this.props = {
      type: 'button',
      variant: 'primary',
      isLoading: false,
      disabled: false,
      ...props,
    };
  }

  public render(): string {
    const { label, type, variant, isLoading, disabled, id } = this.props;
    const idAttr = id ? `id="${id}"` : '';
    const disabledAttr = disabled || isLoading ? 'disabled' : '';
    const loadingClass = isLoading ? 'btn-loading' : '';

    return `
      <button type="${type}" ${idAttr} class="btn btn-${variant} ${loadingClass}" ${disabledAttr}>
        ${isLoading ? '<span class="spinner-inline"></span>' : ''}
        <span class="btn-label">${label}</span>
      </button>
    `;
  }

  protected afterMount(): void {
    if (this.props.onClick && this.element) {
      const button = this.element.querySelector('button');
      button?.addEventListener('click', (e) => {
        if (!this.props.isLoading && !this.props.disabled) {
          this.props.onClick!(e as MouseEvent);
        }
      });
    }
  }

  public setProps(newProps: Partial<ButtonProps>): void {
    this.props = { ...this.props, ...newProps };
    if (this.element) {
      this.mount(this.element);
    }
  }
}
