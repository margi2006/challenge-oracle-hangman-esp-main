let btnIniciar = document.querySelector("#iniciar-juego");
let inputPalabra = document.querySelector("#input-nueva-palabra");
let btnAgregarPalabra = document.querySelector("#nueva-palabra");
let tablero = document.querySelector("#ahorcado");
let pincel = tablero.getContext("2d");
let listaDePalabras = ["ALURA" , "HTML","LOGICA","PROGRAMA","ORACLE","JAVA"];
let palabraElegida = "";
let numeroAlAzar;
let palabraEnJuego = [];
let puntosUsuario = 9;
let enJuego = false;
pincel.lineWidth =3;
pincel.strokeStyle = "black";

//Permite al usuario iniciar el juego:
btnIniciar.addEventListener("click",() =>{
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    numeroAlAzar = Math.floor(Math.random()*listaDePalabras.length);
    palabraElegida = listaDePalabras[numeroAlAzar];
    pincel.beginPath();
    palabraEnJuego = [];
    puntosUsuario = 9;
    enJuego = true;
    for(let i=0; i < palabraElegida.length; i++){
        pincel.moveTo((410 + (i * 50)), 300);
        pincel.lineTo((440 + (i * 50)) , 300);
        pincel.stroke();
    } 
    
})

window.addEventListener("keydown",(element) => {
    if(enJuego) {
        jugando(element);
    }   
});
//Permite al usuario agregar sus propias palabras
btnAgregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    listaDePalabras.push(inputPalabra.value.toUpperCase());
    inputPalabra.value = "";
    inputPalabra.focus();
})

function dibujarLetra(letra, posicion){
    pincel.beginPath();
    pincel.fillStyle = "blue";
    pincel.font = "bold 20 px", "arial";
    pincel.fillText(letra, (420 + (posicion *50)) ,290);
}

function jugando(element){
    console.log(palabraElegida);
    let bandera = false;
    if(puntosUsuario <= 0) {
        alert("Fin del juego!");
        enJuego = false;
    }   else if(!(palabraEnJuego.join('') == palabraElegida)){
            for(let i =0; i < palabraElegida.length; i++){
                if(element.key.toUpperCase() == palabraElegida[i]){
                    dibujarLetra(element.key.toUpperCase(), i);
                    palabraEnJuego[i]= element.key.toUpperCase();
                    bandera = true;
                }
            }
            if(palabraEnJuego.join('') == palabraElegida){
                alert("Ganaste, Felicidades!");
                enJuego = false;
            }
            if(!bandera){
                puntosUsuario--;
                dibujarMuneco(puntosUsuario);
            }
            console.log(palabraEnJuego);
    }   else{
         alert("Ganaste, Felicidades!");
         enJuego = false;
    }
    
}
