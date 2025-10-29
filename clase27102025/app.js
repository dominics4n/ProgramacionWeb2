const os = require('node:os');
console.log("informacion de sistema operativo");
console.log("Nombre: ", os.platform());
console.log("Arquitectura: ", os.arch());
console.log("Memoria: ", os.totalmem()/1024/1024);
