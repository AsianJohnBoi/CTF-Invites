# Sosig Party

A CTF Challenge to challenge users on JavaScript functions, cryptography and APIs. Users will need to try and hack their way through to obtain the flag. The user starts on a HTML page and will need to find a JavaScript file containing information to move to the next stage. This file is publicly accessible and has a message that the user needs to decrypt. Afterwards, the user will need to figure out a way to capture the next set of data by running a request method to the API. The flag is obtained afterwards.

## Requirements

```
Node v10.15 and above
mongodb
mongoose
```

## Deployment

1. Open a new terminal and set present working directory to the folder `/invitesapi`

2. Run API server `npm run start`

   The terminal will return a message "*connected to db*" if setup is correct. 

3. Test API by running POST request to https://localhost:3000/. If no data returned, check the db connection. Web application can connect to any mongodb database (empty or not). Challenge doesn't use CRUD operation. 

4. Take on the challenge!

## Management

You can change the messages being sent to the user. 

Change the encrypted message /js/functions.js:

```javascript
function theCode() {
    var theData = {
        data: "TWFrZSBhIFBPU1QgcmVxdWVzdCB0byBteSBzaXRlJ3MgaXAgYWRkcmVzcy4gV2hpY2ggcG9ydCBpcyBvcGVuPw==",//change
        enctype: "encoded"
    };
    return theData;
}
```

Change the flag in invitesModels.js:

```javascript
var TaskSchema = new Schema({
  Flag: {
    type: String,
    default: 'FLAG{}' //Change me
  },
```

Controllers, models, and routes can be configured if you'd like to add more request methods etc. 