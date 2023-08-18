let mayores=0
let menores=0
let contMayores=0
let contMenores=0

for (let i=1 ; i<=10 ; i++) {
    let edad = prompt("Ingrese la edad");

    if (edad<18) {
        contMenores=contMenores+1
    } else {
        contMayores=contMayores+1
    }
}

console.log("Los estudiantes mayores son " + contMenores);
console.log("Los estudiantes menores son " + contMayores);
