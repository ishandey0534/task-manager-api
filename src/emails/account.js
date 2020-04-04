const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'gainfire@gmail.com',
        subject: 'Thanks for joining...',
        text: `Welcome to the app, ${name}`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gainfire@gmail.com',
        subject: 'Cancellation',
        text: `Why are you cancelling, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}