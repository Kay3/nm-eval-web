Stack
======
Persistence : Open Public API https://dog.ceo/api/breed/terrier/list
Backend Service: Node.js and Express Framework - https://github.com/Kay3/nm-eval-myappserver.git
Web: AngularJS on the client - CSS based on bootstrap

Good solution would be to host Web - Angular app on S3 and your Backend NodeJS API on a service like Heroku. 

Installation
============
Set up the Backend Service before running this app => Check https://github.com/Kay3/nm-eval-myappserver/blob/master/README.md

Install Node.js - require Node 6.9.0 or higher
Node.js comes with a package manager called npm for installing NodeJS applications and libraries.

Get the Code
Either clone this repository or fork it on GitHub and clone your fork:
> git clone https://github.com/Kay3/nm-eval-web.git
> cd nm-eval-web
> npm install
> npm run serve

Browse to the application at [http://localhost:3000]

This is the client that runs on localhost port 3000 and connects to the server that will run on port 7000
