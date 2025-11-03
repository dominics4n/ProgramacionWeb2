var productos = [
    { nombre: 'Camisa', precio: 300},
    { nombre: 'Pantalon', precio: 500},
    { nombre: 'Zapatos', precio: 800},
    { nombre: 'Sombrero', precio: 200}
]
let item = 0;
let cuenta = "";
let mensaje = "Seleccione una opcion \n";
productos.forEach((nombre, index)=>{
    mensaje += `${index+1}.- ${nombre.nombre}: $${nombre.precio} \n`;
})
mensaje += `5.- Ver carrito y total \n6.- Salir`
let Total = 0;

function mostrarMenu(){
  do {
    opcion = prompt(`${mensaje}`);
    switch(opcion){
      case "1":
        console.log(productos[0].nombre);
        AgregarACuenta(0);
        break;
      case "2":
        console.log(productos[1].nombre);
        AgregarACuenta(1);
        break;
      case "3":
        console.log(productos[2].nombre);
        AgregarACuenta(2);
        break;
      case "4":
        console.log(productos[3].nombre);
        AgregarACuenta(3);
        break;
      case "5":
        mostrarcuenta();
        break;
      case "6":
        
        break;
      default:
        alert("Opcion no valida");
    }
  } while (opcion < 6);
  mostrarcuenta();
}
function AgregarACuenta(id){
  item++;
  cuenta += `${item}.- ${productos[id].nombre}: $${productos[id].precio} \n`;
  Total = Total + productos[id].precio;
}
function mostrarcuenta(){
  console.log(cuenta);
  console.log("Total: " + Total);
}

mostrarMenu();