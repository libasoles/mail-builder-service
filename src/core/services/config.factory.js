import defaultConfig from 'config/index';
import Config from './config';

export default class ConfigFactory {
  static create(customConfig = {}) {
    const instance = new Config(defaultConfig);
    instance.set(customConfig);
    return instance;
  }
}
