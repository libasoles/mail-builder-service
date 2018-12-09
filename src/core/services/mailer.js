import nodemailer from 'nodemailer';

class MailerService {
  constructor({
    host,
    user,
    pass,
    secure,
    port,
  }) {
    this.service = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });
  }

  verifyConnection(callback) {
    this.service.verify(callback);
  }

  sendMail(mailOptions, callback) {
    this.service.sendMail(mailOptions, callback);
  }
}


export default MailerService;
