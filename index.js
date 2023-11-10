//Estructuras de control
//Condiciones y ciclos
//While, do while, for
    //indice ; condicional; incremento o decremento
    //Palabras reservadas (break, continue, debbuger)
// for (let index = 1; index < 6; index++) {
//     if (index == 3){
//         continue;
//     }
//     console.log(index);
//     debugger;  //para ir viendo paso por paso el código
// }
//console.log("Termino el ciclo");

//Funciones (también son llamadas metodos)
//Paramretro: Variable o variables que van a introducirse a la función para hacer un proceso
// function suma(a,b,c) {
//     return a + b + c;
// }

// const numero = [5,6,7];

// let resultadodefuncion = suma(...numero)
// console.log(resultadodefuncion);

// function funcionsaludar(nombre) {
//     console.log("Hola " + nombre + " desde una arrow");
// }

// funcionsaludar("JP");

// //Funciones anonimas
// let hola = function (nombre) {
//     console.log("Hola " + nombre + " Mundo Anonima");
// };

// hola("JP");

// //Arrow function, funciones flecha, lambda, fat

// //numero += numero;

// let holaArrow = (nombre) => console.log("Hola " + nombre + " desde una arrow");
// holaArrow("JP");

// function resta (a,b, saludo()=>{console.log("Hola JP")}) {
    
// }


 

function suma() {

    let x = parseFloat(document.querySelector("#n1").value);
    let y = parseFloat(document.querySelector("#n2").value);
    document.querySelector("#suma").innerHTML=("El resultado de la suma es: " + (x+y));
}
function restar() {

    let x = parseFloat(document.querySelector("#n1").value);
    let y = parseFloat(document.querySelector("#n2").value);
    document.querySelector("#resta").innerHTML=("El resultado de la resta es: " + (x-y));
}
function multiplicar() {

    let x = parseFloat(document.querySelector("#n1").value);
    let y = parseFloat(document.querySelector("#n2").value);
    document.querySelector("#multi").innerHTML=("El resultado de la multiplicación es: " + (x*y));
}

function dividir() {
    let x = parseFloat(document.querySelector("#n1").value);
    let y = parseFloat(document.querySelector("#n2").value);
    document.querySelector("#divi").innerHTML=("El resultado de la división es: " + (x/y));
}