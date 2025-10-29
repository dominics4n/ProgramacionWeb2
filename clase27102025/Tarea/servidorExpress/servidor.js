const express = require("express");
const app = express();
app.get("/", (req, res)=>{
    res.send("Hola Mundo en Express");
});
const port = 3009;
app.listen(port, ()=>{
    console.log(`Servidor en http://127.0.0.1:${port}`);
})