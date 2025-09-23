let carritofrutas = [];
while(confirm("Quieres agregar una fruta? ")){
    carritofrutas.push(prompt("Que fruta quieres?"))
    console.log(carritofrutas);
}
console.log("Tu carrito tiene: ");
for(let fruta of carritofrutas){
    console.log(fruta);
}