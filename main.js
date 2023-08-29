
//Ejercicio 1
let nombre = "Ariana"

function saludar (parametro) {
    let saludo = "Hola " + parametro
    return saludo
}

let resultadoSaludo = saludar(nombre)
console.log (resultadoSaludo)


//Ejercicio 2

function multiplicar (a,b) {
    let resultado = a * b
    return resultado
}
let numero1 = 5 
let numero2 = 8

let resultadoFuncion = multiplicar(numero1,numero2)
console.log(resultadoFuncion)

//Ejercicio 3

let base = 5
let altura = 3
let lado1 = 4
let lado2 = 5
let lado3 = 6

function areaTriangulo (a,b) {
    let area = a * b
    return area
}
let resultadoAreaTriangulo = areaTriangulo (base,altura)
console.log (resultadoAreaTriangulo)

function perimetroTriangulo (a,b,c) {
    let perimetro = a + b + c
    return perimetro
}
let resultadoPerimetroTriangulo = perimetroTriangulo(lado1,lado2,lado3)
console.log(resultadoPerimetroTriangulo)


//Ejercicio 4
let precio = 10
let cantidad = 30

function calcularPrecio(p,q) {
    let precioTotal = p*q
    return precioTotal
}
let PrecioTotalCompra = calcularPrecio(precio,cantidad)

if (cantidad>=10) {
    console.log(PrecioTotalCompra * 0.9)
}
if (cantidad>=20) {
    console.log(PrecioTotalCompra * 0.8)
}

//Ejercicio 5

function esMayorDeEdad (e) {
    let edad = e
    if (edad>=18){
        console.log("Eres mayor de Edad")
       }else{
        console.log("Eres menor de edad")
       }
}

let años = 26
let añosDeEdad = esMayorDeEdad(años)

 //Ejercicio 6

 function calcularImpuesto (i) {
    let ingreso = i
    if (ingreso<=10000) {
        return ingreso * 0.1
    }
    if (10000<ingreso<=20000) {
        return ingreso * 0.15
    }
    if (ingreso>20000) {
        return ingreso * 0.2
    }
 }

let ingresoAnual = 18000

let impuestoAPagar = calcularImpuesto(ingresoAnual)
console.log(impuestoAPagar)

 //Ejercicio 7

 function verificarDia (d) {
    let diaDeLaSemana = d
    switch (diaDeLaSemana) {
        case 1:
            console.log("Es un día laboral") 
            break;
        case 2:
            console.log("Es un día laboral") 
            break;
        case 3:
            console.log("Es un día laboral")
            break;
        case 4:
            console.log("Es un día laboral") 
            break;
        case 5:
            console.log("Es un día laboral") 
            break;
        case 6:
            console.log("Es fin de semana")
            break;
        case 7:
            console.log("Es fin de semana")
            break;             
    }   
 }

 let numeroDeDia = 4
 let diaSemanal = verificarDia(numeroDeDia)
 






