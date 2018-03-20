// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
    "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"
);

function sendMail({ to, from, subject, text, html }) {
    return new Promise((resolve, reject) => {
        const msg = {
            to,
            from,
            subject,
            text,
            html
        };
        sgMail.send(msg, (err, response) => {
            if (err) reject(err);
            else
                resolve({
                    response: response,
                    to: to
                });
        });
    });
}

module.exports = sendMail;
