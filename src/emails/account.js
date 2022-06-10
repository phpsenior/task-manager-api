const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'david.garcia@rank.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'david.garcia@rank.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. We hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}