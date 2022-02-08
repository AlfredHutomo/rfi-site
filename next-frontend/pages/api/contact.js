export default function (req, res) {
    const { fullName, email, typeOfEnquiry, enquiry } = req.body;

    /**
     * To use this api you need to set GMAIL_EMAIL_AUTH & GMAIL_PASSWORD_AUTH in
     * env variables.
     */

    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GMAIL_EMAIL_AUTH,
            pass: process.env.GMAIL_PASSWORD_AUTH,
        },
        secure: true,
    });

    const mailData = {
        from: email,
        to: 'RFI email here',
        subject: `Enquiry about ${typeOfEnquiry} From ${fullName}`,
        text: enquiry,
        html: <div>{enquiry}</div>,
    };

    transporter.sendMail(mailData, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
    });

    res.status(200);
}
