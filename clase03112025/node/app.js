const express = require('express');
const path = require('path');
const app = express();
const port = 3025
const pagesRutas = require('./routes/pages');
app.use(express.static('public'));

app.use('/', pagesRutas)
app.get('/',(req,res)=>{
    res.redirect('/calculadora')
})
app.listen(port,()=>{
    console.log("http://localhost:"+port);
})