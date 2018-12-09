import get from 'lodash/get';
import deepMerge from 'helpers/deepMerge';

export default class Config {
  constructor(config) {
    this.set(config);
  }

  set(config) {
    this.data = deepMerge(this.data, config);
  }

  get(path, defaultValue) {
    if (!path) return this.data;
    return get(this.data, path, defaultValue);
  }
}
