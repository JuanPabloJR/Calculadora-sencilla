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


let boton = document.querySelector("#Botonc");
                        //Evento que va a escuchar, función que se va a ejecutar
boton.addEventListener("click",function(){
    console.log("Dimos Click en el boton");
    
    //Agrega la clase solo una vez, el toggle hace intercambio (las veces que lo presiones (falso, verdadero))
    boton.classList.add('verde');
});

boton.addEventListener("mouseover",function(){
    document.querySelector("#over").innerHTML = ("Estamos sobre el boton");
});

boton.addEventListener("mouseout",function(){
    document.querySelector("#over").innerHTML = ("Salí del boton");
});

window.addEventListener("keydown" , (e) => {
    document.querySelector("#x").innerHTML = ("Pulso una tecla");
    document.querySelector("#teclas").innerHTML = (String.fromCharCode (e.keyCode));
} );

window.addEventListener("keyup" , (e) => {
    document.querySelector("#x").innerHTML = ("Deje de presionar una tecla");
} );

window.addEventListener("load", (e) => {
    document.querySelector("#cargue").innerHTML = ("Termine de cargar la página");
});

// document.querySelector("#inp").addEventListener("input", (e) => {
//     let text = document.querySelector("#text");
//     document.querySelector("#text").value = this.value;
// } );