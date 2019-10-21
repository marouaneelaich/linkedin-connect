# linkedin-connect
Connect with your linkedin suggestions using keywords.

With linkedin-connect you can automate the process of sending connect requests on linkedin, use it responsibly (or not).

# How to use

Clone this repo:

`git clone git@github.com:marouaneelaich/linkedin-connect.git`

Install dependencies:

`cd linkedin-connect`
`npm install`

Enter your login and password, open the file `credentials.js` and fill your username / password:
```
module.exports = {
  username: 'email@mail.com',
  password: 'p@33w0rd'
}

```
Start use your keywords (use commas to enter multiple keywords) and sit back and relax:

`npm start -- --keywords='Engineer,React,node.js'`

For headless mode add headless option:

`npm start -- --headless --keywords='Batman'`

Please file an issue if you have a problem running it or email me at `marouane.elaich@sablecard.com`.
