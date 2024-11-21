// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;


let velocidadeX = 4;
let velocidadeY = 6

// variáveis da raquete
let larguraRaquete = 10;
let alturaRaquete = 60;

let xRaquete = 0;
let yRaquete = 170;

let xRaqueteOponente = 590;
let yRaqueteOponente = 170;

let meusPontos = 0;
let pontosOponente = 0;

let ponto;
let raquetada;
let trilha;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  verificaRaquete();
  desenhaPlacar();
  contabilizaPlacar();
}

function desenhaBolinha(){
  
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}

function verificaBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeX *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeY *= -1;
  }
}

function desenhaRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
  
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

function verificaRaquete(){
  if(xBolinha - raio <= xRaquete + larguraRaquete &&
    yBolinha + raio >= yRaquete &&
    yBolinha - raio <= yRaquete + alturaRaquete){
     velocidadeX *= -1;
    raquetada.play();
     }
  
  if(xBolinha + raio >= xRaqueteOponente &&
    yBolinha + raio >= yRaqueteOponente &&
    yBolinha - raio <= yRaqueteOponente + alturaRaquete){
     velocidadeX *= -1;
    raquetada.play();
     }
}

function desenhaPlacar(){
  fill('orange')
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(meusPontos, 150, 25);
  text(pontosOponente, 450, 25);
}

function contabilizaPlacar(){
  if(xBolinha - raio <= 0){
    pontosOponente += 1;
    ponto.play();
  }
  if(xBolinha + raio >= width){
    meusPontos += 1;
    ponto.play();
  }
}

function preload(){
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3");
}
