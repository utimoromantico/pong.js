let xbolinha = 500;
let ybolinha = 250;
let diametro =50;
let vxbolinha = 10;
let raio =diametro / 2;
let vybolinha = 10

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(0);
criarBolinha ();
movimentarBolinha();

  circle(xbolinha, ybolinha, diametro);

 


  if(xbolinha + raio > width || xbolinha < 0) {
    vxbolinha *= -1;

  }

  if(ybolinha + 30 > height || ybolinha < 0) {
    vybolinha *= -1;

  }

function criarBolinha (){
  circle(xbolinha, ybolinha,diametro)

  
}

function movimentarBolinha (){
  xbolinha += vxbolinha;

ybolinha += vybolinha

}


}