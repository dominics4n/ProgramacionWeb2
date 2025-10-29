const express = require("express");
const path = require("path");

const app = express();
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});
const port = 3011;
app.listen(port, ()=>{
    console.log(`Servidor en http://127.0.0.1:${port}`);
})