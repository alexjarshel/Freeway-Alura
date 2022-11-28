let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3, 2.5, 5, 3.3, 2.3];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimemntoCarro = 50;
let alturaCarro = 40;

//carro1
let xCarro = 600;

//carro2
let xCarro2 = 600;

//carro3
let xCarro3 = 600;



//carro 1
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimemntoCarro, alturaCarro);
    
  }
}

function movimentaCarro(){ 
  for(let i = 0; i < imagemCarros.length; i = i+1){  
    xCarros[i] -= velocidadeCarros[i];
  }
 
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i = i+1){
    if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }     
}

function passouTodaTela(xCarro){
  return xCarro <-50;
}

