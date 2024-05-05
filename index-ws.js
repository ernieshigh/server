const express = require('express');
const server = require('http').createServer();
const app = express();
const PORT = 3200;

app.get('/', function(req, res) {
  res.sendFile('index-ws.html', {root: __dirname});
});

server.on('request', app);

server.listen(PORT, function () { console.log('Listening on ' + PORT); });

