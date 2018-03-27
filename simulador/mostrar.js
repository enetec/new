//obtém as variáveis
var email= window.localStorage.getItem('email')
var nome = window.localStorage.getItem('nome')
var Estado = window.localStorage.getItem('Estado')
var consumo= window.localStorage.getItem('consumo')
var tarifa= window.localStorage.getItem('tarifa')

var inc = [0,0,0,0,0,0,0,0,0,0,0,0];

if(email !=null &&
nome != null &&
Estado != null &&
consumo != null &&
tarifa != null )
{
  var media = 0;
  var canvas = document.getElementById("grafico");
  var ctx = canvas.getContext('2d');
  //cria eixo y
  ctx.beginPath();

  ctx.moveTo(0,canvas.height/2);

  ctx.lineTo(canvas.width,canvas.height/2);

  ctx.stroke();

  //cria eixo x
  ctx.beginPath();

  ctx.moveTo(10,canvas.height);

  ctx.lineTo(10,0);

  ctx.stroke();

  //cria o gráfico de energia(kwh)x mês e calcula a média de incidência
  for (i=0; i<12; i++){

    inc[i] = window.localStorage.getItem("incidencia"+ i);
    console.log(inc[i])
    //muda a cor dos retângulos
if (parseInt(inc[i]) < 16){
  ctx.fillStyle="#FF0000";
}
else if (parseInt(inc[i])  < 20) {
  ctx.fillStyle="#0000ff";
}
else {
  ctx.fillStyle="#00ff00";


}

    ctx.fillRect(15+43*i , parseInt(inc[i])*16.67/1000*30*8, 26,-parseInt(inc[i])*16.67/1000*30*8 + canvas.height/2 );
    media = parseInt(media,10) + parseInt(inc[i],10);
  }

 media = Math.floor(100*media/12)/100;

//considera-se para os calculos que a incidência é dada em MJ/(m^2.dia)
// e que cada placa tem uma área de 2.01 metros quadrados


  var placa = Math.floor(3.6*consumo/(media*0.5*30*2.01));
/*
//não sei o que está de errado, mas o payback é entre 4 e 6 anos
  var inv = Math.floor(placa*36/1000) + 1

  var preço = 780*placa + 5000*inv ;

  console.log(inv);
  console.log(placa);
//  var payback = 3.6*preço/(placa*media*0.5*16.67*tarifa*12);
*/


//coloca para o usuário ver

document.getElementById("texto-nome").innerHTML="Prezado(a) " + nome + ",";
document.getElementById("texto-placas").innerHTML="Número de placas necessárias: "+ placa +
" de "+ Math.floor(100*Math.max(...inc)*16.67)/100 + " watts. A área necessária é de "+ Math.floor(100*placa*2.01)/100 + " metros quadrados.";
document.getElementById("texto-custo").innerHTML= " O tempo de retorno é entre 4 e 6 anos."
document.getElementById("div-simulador").style.display="block";

}
