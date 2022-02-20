export default function sendContactEmail(req, res) {
    const { fullName, email, typeOfEnquiry, enquiry } = req.body;

    /**
     * To use this api you need to set GMAIL_EMAIL_AUTH & GMAIL_PASSWORD_AUTH in
     * env variables.
     */

    const nodemailer = require('nodemailer');
    const ReactDOMServer = require('react-dom/server');

    const transporter = nodemailer.createTransport({
        name: 'gmail.com',
        port: 587,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GMAIL_EMAIL_AUTH,
            pass: process.env.GMAIL_PASSWORD_AUTH,
        },
    });

    const mailData = {
        from: {
            name: fullName,
            address: email,
        },
        to: 'football@realfutbolinstitute.com',
        bcc: ['sam@relab.com.au', 'didi@relab.com.au'],
        subject: `Enquiry about ${typeOfEnquiry} From ${fullName}`,
        text: enquiry,
        html: ReactDOMServer.renderToString(
            <div>
                <p>{enquiry}</p>
                <small>Reply To: {email}</small>
            </div>
        ),
    };

    transporter.sendMail(mailData, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
    });

    res.status(200).send('Success');
}
