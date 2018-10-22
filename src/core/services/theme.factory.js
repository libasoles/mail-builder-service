import defaultStyles from '../styles/index';
import Theme from './theme';

export default class ThemeFactory {
  static create(customStyles = {}) {
    const instance = new Theme(defaultStyles);
    instance.setStyles(customStyles);
    return instance;
  }
}
