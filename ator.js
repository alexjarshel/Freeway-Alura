//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor < 366){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao =collideRectCircle(xCarros[i], yCarros[i],comprimemntoCarro, alturaCarro,
             xAtor, yAtor, 15);
    if(colisao){
      colidiu();
      }
    }
     
  }

 function colidiu(){
  if(meusPontos > 0){
    meusPontos -= 1;
    
  }
        somDaColisao.play();
        voltaAtor();
 }

function incluiPontos(){
  textAlign(CENTER);
  fill(color(255,240,60))
  textSize(25);
  text(meusPontos, width /5, 27);
}

function marcaPontos(){
  if(yAtor < 15){
    somDoPonto.play();
    meusPontos += 1;
    voltaAtor();
    
  }
}

function voltaAtor(){
  yAtor =366;
}








