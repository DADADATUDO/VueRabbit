import { LazyImg } from './LazyImg/LazyImg';
import { InputFocus } from './Focus/Focus';

const directives = {
  'lazy-img': LazyImg,
  'input-focus': InputFocus,
};

export const setupDirectives = (app) => {
  Object.entries(directives).forEach(([name, directive]) => {
    app.directive(name, directive);
  });
};
