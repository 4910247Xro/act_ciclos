let porcentaje = prompt("Ingrese (1) si desea comprar un carro o una moto, (2) si desea bicicleta o patineta, (3) si desea un sccoter electrico")

if (porcentaje === "1") {
    console.log("su descuento sera de 15%")
} else if (porcentaje === "2"){
    console.log("su descuento sera de 10%")
} else if (porcentaje === "3"){
    console.log("su descuento sera de 5%")
} else {
    console.log("No ingresaste un numero dentro del rango")
}
