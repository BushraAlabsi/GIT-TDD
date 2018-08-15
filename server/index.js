const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function (req, res) {
 	db.Cat.find({} ,function (err, data) {
 		if(err) res.send(err);
 		else res.send(data)
 	});

});

app.post('/cats', function (req, res) {
  db.save(req.body,function(err,data){
  	if(err) res.send(err);
  	else res.sendStatus(201);
  })
  
})



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
module.exports = app


