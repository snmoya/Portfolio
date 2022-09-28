var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
var htpp = require('http');
var server = http.server(app);

app.use(express.static('client'));

server.listen(PORT, function(){
    console.log('Server running');
});

app.listen(process.env.PORT || 30000, function() {
    console.log("Server is running on port 3000")
});