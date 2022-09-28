var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
var htpp = require('http');
var server = http.server(app);

app.use(express.static('client'));

server.listen(PORT, function(){
    console.log('Server running');
});