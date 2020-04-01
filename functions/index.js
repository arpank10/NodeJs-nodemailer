// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();


const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);


exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {
    const snapshot = event.after;
// Only send email for new messages.
    if (event.before.val() || !snapshot.val().name) {
        return;
    }

    const val = snapshot.val();

    const mailOptions = {
        to: 'devark10@gmail.com',
        subject: `${val.name} wants to connect to you`,
        text: `${val.message} \n\n\nReply to ${val.email}`
    };

    return mailTransport.sendMail(mailOptions).then(() => {
        return console.log('Mail sent to: devark10@example.com')}
    )
});
