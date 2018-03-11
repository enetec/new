//obtém as variáveis
var email= window.localStorage.getItem('email')
var nome = window.localStorage.getItem('nome')
var Estado = window.localStorage.getItem('Estado')
var consumo= window.localStorage.getItem('consumo')
var inc=[0,0,0,0,0,0,0,0,0,0,0,0];
for (i=0;i<12;i++){
 inc[i]=window.localStorage.getItem("incidencia"+ i);
 console.log(inc[i]);
}

if( window.localStorage.getItem('email')!=null &&
window.localStorage.getItem('nome')!=null &&
window.localStorage.getItem('Estado')!=null &&
window.localStorage.getItem('consumo')!=null)
{
media=0;
  console.log(inc);
  for (i=0;i<12;i++)
{
media=parseInt(media,10) + parseInt(inc[i],10);

}
 media=Math.floor(100*media/12)/100;
//considera-se para os calculos que a incidência é dada em MJ/(m^2.dia)
//que a tarifa do kwh é de 0.45 e que cada placa tem uma área de 2.01 metros quadrados
  var input=document.getElementsByTagName("input");

  var placa=Math.floor(3.6*consumo/(media*0.5*30*2.01));
  var preço=1.05*(placa*700+20000);


  var payback= 3.6*preço/(placa*media*0.5*2.01*30*0.45*12);




//coloca para o usuário ver
  document.getElementById("texto-nome").innerHTML="Prezado(a) " + nome + ",";
document.getElementById("texto-placas").innerHTML="Número de placas necessárias: "+ placa +
" de "+ Math.floor(100*Math.max(...inc)*16.67)/100 + " watts. A área necessária é de "+ Math.floor(100*placa*2.01)/100 + " metros quadrados.";
document.getElementById("texto-custo").innerHTML= " O payback é entre " + Math.floor(100*payback)/100 +
 " e  " + Math.floor(110*payback)/100 + " anos."

document.getElementById("div-simulador").style.display="block";



}
