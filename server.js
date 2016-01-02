var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

// Display posts.html file as content
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/posts.html');
});

// Start server on port 3000
app.listen(8000, function () {
    console.log(new Date() + ' Server running on port', 8000);
});