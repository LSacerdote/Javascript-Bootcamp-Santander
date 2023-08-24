var jogador1 = 1;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') :
 console.log ('Os jogadores são invalidos');
  
 //usando if
if (jogador1 > 0 && jogador2 == 0 ) {
  console.log ('Jogador 1 Marcou Ponto');
  placar = jogador1 > jogador2;
}

//usando else if
 else if (jogador2 > 0 && jogador1 == 0){
console.log('Jogador 2 Marcou Ponto');
placar = jogador2 > jogador1;

//usando else
} else {
  console.log ('Ninguem Marcou Ponto');
} 


switch (placar) {
  case placar = jogador1 > jogador2:
console.log('Jogador 1 Ganhou!');
break;    
case placar = jogador2 > jogador1:
  console.log('Jogador 2 Ganhou!')
}