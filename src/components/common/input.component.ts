import { BaseComponent } from './base.component';

interface InputProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: string;
  id: string;
  name: string;
  onChange?: (value: string) => void;
}

export class InputComponent extends BaseComponent {
  private props: InputProps;

  constructor(props: InputProps) {
    super();
    this.props = {
      type: 'text',
      placeholder: '',
      value: '',
      required: false,
      error: '',
      ...props,
    };
  }

  public render(): string {
    const { label, type, placeholder, value, required, error, id, name } = this.props;
    const requiredStar = required ? '<span class="text-danger">*</span>' : '';
    const errorClass = error ? 'input-error' : '';
    const errorMessage = error ? `<span class="error-text animate-fade-in">${error}</span>` : '';

    return `
      <div class="input-group">
        <label for="${id}" class="input-label">${label} ${requiredStar}</label>
        <input 
          type="${type}" 
          id="${id}" 
          name="${name}" 
          placeholder="${placeholder}" 
          value="${value}"
          class="input-field ${errorClass}"
          ${required ? 'required' : ''}
        />
        ${errorMessage}
      </div>
    `;
  }

  protected afterMount(): void {
    if (this.element) {
      const input = this.element.querySelector('input');
      input?.addEventListener('input', (e) => {
        const val = (e.target as HTMLInputElement).value;
        this.props.value = val;
        if (this.props.onChange) {
          this.props.onChange(val);
        }
      });
    }
  }

  public getValue(): string {
    if (this.element) {
      const input = this.element.querySelector('input');
      return input ? input.value : this.props.value || '';
    }
    return this.props.value || '';
  }

  public setProps(newProps: Partial<InputProps>): void {
    this.props = { ...this.props, ...newProps };
    if (this.element) {
      this.mount(this.element);
    }
  }
}
