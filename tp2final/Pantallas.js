function mostrarInicio() {
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Pantalla de Inicio", width / 2, height / 2 - 40);
  textSize(16);
  text("Presiona 'S' para ver las instrucciones", width / 2, height / 2);
  text("Presiona 'P' para comenzar el juego", width / 2, height / 2 + 40);
}

function mostrarInstrucciones() {
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Pantalla de Instrucciones", width / 2, height / 2 - 40);
  textSize(16);
  text("Presiona 'B' para volver al inicio", width / 2, height / 2);
}

function mostrarJuego() {
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Pantalla del Juego", width / 2, height / 2 - 40);
  textSize(16);
  text("Presiona 'F' para ver los créditos", width / 2, height / 2);
  text("Puntos: " + puntos, width / 2, height / 2 + 40);
  
  if (puntos >= 8 && estadoActual !== ESTADO_CREDITOS) {
    estadoActual = ESTADO_CREDITOS;
  }
}

function mostrarCreditos() {
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Pantalla de Créditos", width / 2, height / 2 - 40);
  textSize(16);
  text("Presiona 'B' para volver al inicio", width / 2, height / 2);
}
