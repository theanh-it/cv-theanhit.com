var express = require("express");
var app     = express();
var routes  = require("./app");
var {Server}= require("socket.io");

var {port}  = require("./config.json");
var http    = app.listen(port, ()=>console.log("Server runing: http://localhost:"+port));
var io      = new Server(http);
var socket  = require("./socket");

io.on("connection", socket);
app.use(routes);
app.use(express.static("views"));