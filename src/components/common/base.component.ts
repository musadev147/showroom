/**
 * Abstract BaseComponent class standardizing UI elements lifecycle behaviors.
 * Enforces modular architecture with structured rendering, mounting, and unmounting.
 */
export abstract class BaseComponent {
  protected element: HTMLElement | null = null;

  /**
   * Generates the component's inner HTML template string.
   */
  public abstract render(): string;

  /**
   * Mounts the component into an element.
   * Compiles HTML, attaches DOM listeners, instantiates sub-components.
   */
  public mount(element: HTMLElement): void {
    this.element = element;
    this.element.innerHTML = this.render();
    this.afterMount();
  }

  /**
   * Lifecycle hook executed immediately after the DOM has been populated.
   * Override to bind event listeners, query sub-elements, or load data.
   */
  protected afterMount(): void {
    // Optional hook for subclasses
  }

  /**
   * Lifecycle hook executed before destroying or swapping out the component.
   * Clean up event listeners, intervals, animations, or subscriptions to prevent memory leaks.
   */
  public unmount(): void {
    this.beforeUnmount();
    this.element = null;
  }

  /**
   * Lifecycle hook executed immediately before unmounting.
   * Override to perform teardown logic.
   */
  protected beforeUnmount(): void {
    // Optional hook for subclasses
  }
}
