import { createPinia } from "pinia";

export function setup(app) {
  app.use(createPinia());
}
