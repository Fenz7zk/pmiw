const ESTADO_INICIO = 0;
const ESTADO_INSTRUCCIONES = 1;
const ESTADO_JUEGO = 2;
const ESTADO_CREDITOS = 3;

let juego;
let estadoActual = ESTADO_INICIO;
let puntos = 0; // Variable para llevar la cuenta de los puntos


function setup() {  
  createCanvas(400, 600);  
  juego = new Juego();  
}  

function draw() {  
  juego.actualizar();  
  juego.dibujar();  

switch (estadoActual) {
    case ESTADO_INICIO:
      mostrarInicio();
      break;
    case ESTADO_INSTRUCCIONES:
      mostrarInstrucciones();
      break;
    case ESTADO_JUEGO:
      mostrarJuego();
      break;
    case ESTADO_CREDITOS:
      mostrarCreditos();
      break;
  }
}

function keyPressed() {
  if (estadoActual === ESTADO_INICIO) {
    if (key === 'S' || key === 's') {
      estadoActual = ESTADO_INSTRUCCIONES;
    } else if (key === 'P' || key === 'p') {
      estadoActual = ESTADO_JUEGO;
    }
  } else if (estadoActual === ESTADO_INSTRUCCIONES) {
    if (key === 'B' || key === 'b') {
      estadoActual = ESTADO_INICIO;
    }
  } else if (estadoActual === ESTADO_JUEGO) {
    // No es necesario presionar una tecla para los créditos
  } else if (estadoActual === ESTADO_CREDITOS) {
    if (key === 'B' || key === 'b') {
      estadoActual = ESTADO_INICIO;
    }
  }
}
