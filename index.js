/**
* Configurable HTML Template with SendGrid & SMTP support.
* @author Tittu Varghese
*/

const template = require('./src/template');
const mailService = require('./src/mailer');

module.exports = {
	template,
	mailService,
};
