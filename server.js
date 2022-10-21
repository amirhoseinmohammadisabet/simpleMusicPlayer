const MongoClient = require('mongodb').MongoClient
const express = require('express')
const bodyParser = require('body-parser');
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))


app.listen(8080, function () {
	console.log('listening on 8080')
})

app.get("/", (req, res) => {
	//res.send("hello world")
	res.sendfile(__dirname + '/index.html')
})

app.post("/quotes", (req, res) => {
	console.log(res.body);
})


MongoClient.connect('mongodb-connection-string', (err, client) => {
	// ... do something here
})