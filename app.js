// set up the server
const express = require("express")
const app = express()
const port = 3306
const logger = require("morgan")

// middleware
app.use(logger("dev"))

// define middleware that serves static resources in the public directory
app.use(express.static(__dirname + '/public'))

// start the server
app.listen(port, () => {
    console.log(`App server listening on ${port}`)
})

// define a route for the index
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

// define a route for the homepage
app.get( "/homepage", ( req, res ) => {
    res.sendFile(__dirname + "/views/homepage.html");
})

// define a route for the info page
app.get( "/info", ( req, res ) => {
    res.sendFile(__dirname + "/views/info.html");
} );

