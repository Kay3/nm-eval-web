Development Stack
=================
- Persistence : Open Public API https://dog.ceo/api/breed/terrier/list
- Backend Service: Node.js and Express Framework - https://github.com/Kay3/nm-eval-myappserver.git
- Web: AngularJS - CSS based on bootstrap

Good solution would be to host Web - Angular app on S3 and your Backend NodeJS API on a service like Heroku. 

Installation
============
Set up the Backend Service before running this web app => Check https://github.com/Kay3/nm-eval-myappserver/blob/master/README.md

Node.js - require Node 6.9.0 or higher.

Get the Code
Either clone this repository or fork it on GitHub and clone your fork:
1) git clone https://github.com/Kay3/nm-eval-web.git
2) cd nm-eval-web
3) npm install
4) npm start

Browse to the application at [http://localhost:3000]

This is the client that runs on localhost port 3000 and connects to the server that will run on port 7000
