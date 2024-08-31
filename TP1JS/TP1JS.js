//Programación para medios interactivos orientada a las tecnologías web
//Julian Mercado 119089/9 Comision 3
//https://www.youtube.com/watch?v=2vq_DtM_fZ8

let colorcuadrado;
let colorcirculo;
let ColorPredet = true;
let img;

function preload() {
  img = loadImage("obratp3.png");
}

function setup() {
  createCanvas(800, 400);
  noLoop();
  colorcuadrado = color(0);
  colorcirculo = color(255);
}

function draw() {
  let columnas = 10;
  let filas = 10;
  let w = width / (2 * columnas);
  let h = height / filas;
  
  image(img, 0, 0, width/2, width/2);
  translate(400, 0);
  
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      if ((i + j) % 2 == 0) {
        fill(colorcuadrado);
      } else {
        fill(255 - red(colorcuadrado), 255 - green(colorcuadrado), 255 - blue(colorcuadrado));
      }
      rect(i * w, j * h, w, h);
      
      fill((i + j) % 2 == 0 ? colorcirculo : color(255 - red(colorcirculo), 255 - green(colorcirculo), 255 - blue(colorcirculo)));
      ellipse(i * w + w / 2, j * h + h / 2, w / 2, h / 2);
    }
  }
}

function coloraleatorio(R, G, B) {
  colorcuadrado = color(random(R), random(G), random(B));
  colorcirculo = color(random(R), random(G), random(B));
  ColorPredet = false;
}

function reiniciarcolor() {
  colorcuadrado = color(0);
  colorcirculo = color(255);
  ColorPredet = true;
}

function mousePressed() {
  if (mouseButton === LEFT) {
    coloraleatorio(255, 255, 255);  // Cambia los colores con valores aleatorios dentro de los rangos RGB
  } else if (mouseButton === RIGHT) {
    reiniciarcolor();  // Reinicia los colores a blanco y negro
  }
  redraw();
}
