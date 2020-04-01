# NodeMailer sample

This project demonstrates the usage of [Nodemailer](https://nodemailer.com/about/) in Node.js to send email to a contact.

It uses [Firebase Cloud Functions](https://firebase.google.com/docs/functions/) which allows us to respond to events without setting up a server.

## Requirements

Install firebase-tools using the following command:

`npm install -g firebase-tools`

Follow the steps [here](https://firebase.google.com/docs/functions/get-started) for getting started with firebase functions.
Select Javascript as the language.

After that, install nodemailer:

`npm install nodemailer`

## Build

Run the following command to set up the email and password from which you want to send the mail:

`firebase functions:config:set gmail.email="username@gmail.com" gmail.password="password"`

Deploy your functions with the following command, it may take some time:

`firebase deploy --only functions`
 
