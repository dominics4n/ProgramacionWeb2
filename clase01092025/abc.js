let A = parseInt(prompt("Ingresa el numero A: "));
let B = parseInt(prompt("Ingresa el numero B: "));
let C = parseInt(prompt("Ingresa el numero C: "));
console.log("Comparacion A / B");
if(A>B){
    console.log(A + ">" + B);
}
else{
    if(A==B){
        console.log(A + "=" + B);
    }
    else{
        console.log(A + "<" + B);
    }
}
console.log("Comparacion A / C");
if(A>C){
    console.log(A + ">" + C);
}
else{
    if(A==C){
        console.log(A + "=" + C);
    }
    else{
        console.log(A + "<" + C);
    }
}
console.log("Comparacion B / C");
if(B>C){
    console.log(B + ">" + C);
}
else{
    if(B==C){
        console.log(B + "=" + C);
    }
    else{
        console.log(B + "<" + C);
    }
}