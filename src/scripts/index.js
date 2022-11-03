/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/extensions
import './menu.js';
import './component/hero-bar';
import './component/footer-bar';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});

const skipLinkElement = document.querySelector('.skip-link');
skipLinkElement.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#maincontent').focus();
});
