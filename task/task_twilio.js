// var twilio = require('twilio');
const accountSid = ''; // Your Account SID from www.twilio.com/console
const authToken = '';   // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const twiml = new MessagingResponse();

class TwilioRun {
    
    sendFirstMsg() {
        client.messages.create({
            body: 'Your appointment is coming up on chinese at 8am',
            to: 'whatsapp:+',  // Text this number
            from: 'whatsapp:+' // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
    }

    sendConversation(res){        
        twiml.message('The Robots are coming! Head for the hills!');
        
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    }
        
}

module.exports = TwilioRun
//junk = new JenkinsRun()
