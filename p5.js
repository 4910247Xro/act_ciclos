let acumMayores=0
let acumMenores=0
let contMayores=0
let contMenores=0
let ProMayores=0
let ProMenores=0

let estudiantes = prompt("Ingresa la cantidad de estudiantes")

for (let i=1 ; i <=estudiantes ;  i++) {
    let codigo = Number(prompt("Ingresa el codigo del estudiante"))
    let edad = Number(prompt("Ingresa la edad del estudiante"))

    if (edad > 21) {
        acumMayores=acumMayores+edad 
        contMayores=contMayores+1
    } else {
        acumMenores=acumMenores+edad 
        contMenores=contMenores+1
    }


}

if (contMayores > 0 ) {
    ProMayores= acumMayores/contMayores
    console.log("El promedio de los mayores de 21 es " + ProMayores)
} else {
    console.log("No hay estudiantes mayores a 21")
}

if (contMenores > 0 ) {
    ProMenores= acumMenores/contMenores
    console.log("El promedio de los menores de 21 es " + ProMenores)
} else {
    console.log("No hay estudiantes menores de 21 ")
}