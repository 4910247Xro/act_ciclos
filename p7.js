for (let i=1 ; i<=5 ; i++) {
     let producto= prompt("Ingresa el nombre del producto")
     let precio = prompt("Ingresa el precio del producto")
     let iva= parseInt (precio) * (.19)
     let total= parseInt (precio) * (iva)
     console.log("El precio a pagar con el iva incluido es de " + producto + total)
}