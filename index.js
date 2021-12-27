var express = require("express");
var app     = express();
var routes  = require("./app");
var {Server}= require("socket.io");

var http    = app.listen(4000, ()=>console.log("Server runing: http://localhost:4000"));
var io      = new Server(http);
var socket  = require("./socket");

io.on("connection", socket);
app.use(routes);
app.use(express.static("views"));