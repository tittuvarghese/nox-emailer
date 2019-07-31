/**
* SendGrid Mailer
* @author Tittu Varghese
*/

const sendGrid = require('@sendgrid/mail');


/**
* mailer - Function to send email over SendGrid
* @param emailConfiguration
* @param emailContent
*/

let sendEmail = (emailConfiguration, emailContent) => {
  return new Promise(function(resolve,reject) {
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: emailConfiguration.toAddress,
      from: emailConfiguration.fromAddress,
      subject: emailConfiguration.subject,
      //text: 'and easy to do anywhere, even with Node.js',
      html: emailContent,
    };
    sendGrid.send(msg).
    then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });
}

module.exports = {
  sendEmail,
}
