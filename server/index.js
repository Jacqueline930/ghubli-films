var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
