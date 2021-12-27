var route = require("express").Router();

route.use("/v1", require("./v1/routes"));

module.exports = route;