const nodeMailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "thilakramanie@gmail.com", // Change to your recipient
  from: "thilakramanie007@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

// const sendMail = async (req, res) => {
//   let testAccount = await nodeMailer.createTestAccount();
//   const transporter = nodeMailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "alejandrin.mueller70@ethereal.email",
//       pass: "TR9W36mW7YPmfvDzBR",
//     },
//   });
// let info = await transporter.sendMail({
//     from: '"Thilak Ramanie" <thilakramanie007@gmail.com>',
//     to: 'alejandrin.mueller70@ethereal.email',
//     subject:'Hello',
//     html: '<h2>Sedning emails with nodejs</h2>'
// })
//res.send(info);
//};

const sendMail = async (req, res) => {
  const info = sgMail.send(msg);
  res.send(info);
};

module.exports = sendMail;
