import MailerService from './mailer';

class MailerFactory {
  static create(options) {
    const instance = new MailerService(options);
    return instance;
  }
}

export default MailerFactory;
