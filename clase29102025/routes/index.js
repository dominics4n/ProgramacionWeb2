const express = require("express");
const path = require("path");
const router = express();
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});

router.get("/registro", (req, res)=>{
    res.sendFile(path.join(__dirname+"/registro.html"));
})

module.exports=router;