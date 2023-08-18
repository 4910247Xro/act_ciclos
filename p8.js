let contHijos =0
let contSinHijos=0 
let totalPersonas= prompt("Ingresa (Si) si hay personas")
let totalHijos=0

let promedio=0
while (totalPersonas === "Si") {
    let tieneHijos = prompt("La persona Tiene Hijos? (Si/No) ");

    if (tieneHijos === "Si") {
        let num_Hijos = parseInt(prompt("Ingrese la cantidad de hijos que tiene" ))
        contHijos=contHijos+1 
         totalHijos=totalHijos+num_Hijos

    } else {
        contSinHijos=contSinHijos+1

    }

totalPersonas= prompt("Hay otra persona? ")


}

promedio= totalHijos/contHijos

console.log("La cantidad de hijos de las personas es " + totalHijos)

console.log("Las personas sin hijo son " + contSinHijos)

console.log("El numero de personas con hijos son "  + contHijos)

console.log("El promedio de los hijos es " + promedio)