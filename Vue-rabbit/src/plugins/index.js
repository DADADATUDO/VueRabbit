import { setup as setRouter } from '@/router/index.js';
import { setup as setPinia } from './Pinia.js';
import { setup as setupElement } from './element-plus';
import { setup as setupFontAwesome } from './FontAwesomeIcon';

export function setup(app) {
  setRouter(app);
  setPinia(app);
  setupElement(app);
  setupFontAwesome(app);
}
