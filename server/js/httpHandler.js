const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////


//return a random command
function generateRandom() {
  var validMessages = ['up', 'down', 'right', 'left'];
  var random = Math.floor(Math.random() * 4);
  return validMessages[random];
}

module.exports.router = (req, res, next = ()=>{}) => {
  var command = generateRandom();
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  res.write(command);
  res.end();
};

