var fs     = require("fs"); 
var {view} = require("../db.json");
var online = [];

module.exports = socket=>{
    view += 1;
    fs.writeFileSync("db.json", `{"view":${view}}`);
    online.push(socket.id);
    socket.emit("online", {view: view, online:online.length});
    socket.broadcast.emit("online", {view: view, online:online.length});

    socket.on("disconnect", ()=>{
        var index = online.findIndex(e=>e==socket.id);
        online.splice(index, 1);
        socket.broadcast.emit("online", {view: view, online:online.length});
    });
}