const express = require('express')
const app = express()

app.listen(8080, function () {
	console.log('listening on 8080')
})

app.get("/", (req, res) => {
	//res.send("hello world")
	res.sendfile(__dirname + '/index.html')
})

app.post("/quotes", (req, res) => {
	console.log("Helooooooo!");
})
