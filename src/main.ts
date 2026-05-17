import './assets/styles/global.css';
import { App } from './app';

document.addEventListener('DOMContentLoaded', () => {
  const mountElement = document.getElementById('app');

  if (mountElement) {
    const app = new App();
    app.mount(mountElement);
    console.info(`[Marufa Boilerplate] Initialized environment: "${import.meta.env.VITE_APP_ENV}"`);
  } else {
    console.error('[Marufa Boilerplate] Failed to mount application: #app root not found.');
  }
});
