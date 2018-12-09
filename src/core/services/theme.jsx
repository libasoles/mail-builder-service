import get from 'lodash/get';
import deepMerge from 'helpers/deepMerge';

class ThemeService {
  constructor(styles) {
    this.setStyles(styles);
  }

  setStyles = (newStyles) => {
    this.styles = deepMerge(this.styles, newStyles);
  }

  getStyles(path, defaultValue) {
    if (!path) return this.styles;
    return get(this.styles, path, defaultValue);
  }
}

export default ThemeService;
