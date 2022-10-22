import generateHtmlTemplate from "../sendEmail/generateHtmlTemplate";
import nodemailer from 'nodemailer'
const sendResetEmail = async(user, link) =>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_EMAIL_APP_PASSWORD
        }   
    })

  let info = await transporter.sendMail({
    from: `"Spectator School" <${process.env.USER_EMAIL}>`, // sender address
    to: `${user.email}`, // list of receivers
    subject: "Reset Password", // Subject line
    text: `${link}`, // plain text body
    html: `<a href=${link}>Click here to reset your password</a>`
    // html: generateHtmlTemplate(redirectLink, newUser.email) // html body
  });

}

export default sendResetEmail