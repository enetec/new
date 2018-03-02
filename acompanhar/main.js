document.getElementById('acompanhe').onclick=function(){
var senha=document.getElementById('name').value;
if(senha=="AlphaVille2018"){
document.getElementById('texto-fazendo').innerHTML=
'Iniciando o orçamento para trocar as lâmpadas por LED '+
'<p>Escrevendo o laudo</p>'

document.getElementById('texto-feito').innerHTML=
'Colocado analisador de cargas '+
'<p>Campanha de Boas Práticas</p> '+
'<p>Analisado a planta </p>'

document.getElementById("div-acompanhe").style.display="block";
}
else{
  alert("Senha incorreta!");
}


}
