import nodemailer from 'nodemailer';
import generateHtmlTemplate from './generateHtmlTemplate';

const sendVerificationEmail = async(regToken, newUser) =>{
    const redirectLink = `${process.env.REDIRECT_URL}` + `/auth/verify/` + regToken

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
    to: `${newUser.email}`, // list of receivers
    subject: "Account Verification", // Subject line
    text: "Hello world?", // plain text body
    html: generateHtmlTemplate(redirectLink, newUser.email) // html body
  });

}
export default sendVerificationEmail


