var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('media'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get_videos', function (req, res, next) {
   // Prepare output in JSON format
   var content = fs.readFileSync('media/videos.json', 'utf8');
   res.json(JSON.parse(content));
   console.log(content);
   res.end(JSON.stringify(content));
   
})

app.get('/video/:uid', function (req, res, next) {
   // Prepare output in JSON format
   var content = fs.readFileSync('media/' + req.params.uid + '.json', 'utf8');
   res.json(JSON.parse(content));
   res.end(JSON.stringify(content));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
