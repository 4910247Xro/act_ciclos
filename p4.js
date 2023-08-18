let nombre =prompt("ingrese nombre")
let cantidad =prompt("ingrese cuantos huevos comprara")
const precioUnidad =250
let descuento, precio_neto 
precio_neto= precioUnidad*cantidad
console.log("El precio por la cantidad de huevos es " + precio_neto)

if (cantidad >0 && cantidad <=100) {
    descuento= precio_neto-precio_neto*3/100

} else if (cantidad >100 && cantidad <=200) {
    descuento=precio_neto-precio_neto*5/100

} else if (cantidad >200 && cantidad <=300) {
    descuento= precio_neto-precio_neto*8/100

} else {
    descuento = precio_neto-precio_neto*10/100

}

console.log("El precio final con el descuento aplicado es " + descuento)
