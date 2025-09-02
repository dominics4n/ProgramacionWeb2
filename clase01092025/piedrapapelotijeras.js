let vidas = 3;
let adivina = 0;
while(vidas > 0){
    adivina = Math.floor(Math.random() * 11)
    let A = parseInt(prompt("Adivina el numero, tienes " + vidas + "vidas: "));
    console.log(adivina);
    if(A == adivina){
        console.log("Ganaste");
        vidas = -1;
    }
    else{
        vidas = vidas - 1;
    }
}
if(vidas == 0){
    console.log("perdiste");
}
