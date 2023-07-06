//write a twilio template to send sms to a number
const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT;
const account_sid = process.env.ACCOUNT_SID;
const auth_token = process.env.AUTH_TOKEN;
const twilio_number = "+18148014964";

const client = require('twilio')(account_sid, auth_token);

const notify = (twilio_number) => {
    client.messages
        .create({
            body: 'Testing template for twilio notification sending in phone number',
            to: '+916294124759', // Text your number
            from: twilio_number, // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
}



app.get('/', (req, res) => {
    notify(twilio_number)
    res.send("WELCOME TO THE PAGE")
})




app.listen(port, () => {
    console.log(`CONNECTED TO ${port}`);
})