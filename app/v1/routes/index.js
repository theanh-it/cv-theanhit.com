var route = require("express").Router();

route.get("/", (request, response)=>{
    return response.json({
        version: "v1",
        message: "Welcome"
    });
});

module.exports = route;