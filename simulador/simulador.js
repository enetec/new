

document.getElementById("simule").onclick=function(){
// guarda em registro local os inputs
window.localStorage.setItem('email',document.getElementById("email").value);
window.localStorage.setItem('tarifa',document.getElementById("tarifa").value);
window.localStorage.setItem('nome',document.getElementById("name").value);
window.localStorage.setItem('Estado',document.getElementById("sel").value);
window.localStorage.setItem('consumo',document.getElementById("cons").value);

console.log( window.localStorage.getItem('tarifa'))

//estima a incidencia em cada Estado, baseado no Atlas:http://www.cresesb.cepel.br/publicacoes/download/Atlas_Solarimetrico_do_Brasil_2000.pdf
//paginas 33 a 57
  var Estado=document.getElementById("sel").value;
var inc=[1,2,3,4,5,6,7,8,9,10,11,12]
if (Estado == "AC"){
inc=[16,14,16,16,16,16,16,18,18,18,16,16]
}
else if (Estado == "AL"){
inc=[20,20,20,16,14,13,14,16,19,22,22,20]
}
else if(Estado == "AP"){
  inc=[14,14,16,14,14,16,18,18,19,19,18,14]
}
else  if (Estado == "AM"){
    inc=[14,14,14,14,15,16,16,18,18,18,16,15]
  }
  else if (Estado == "BA"){
    inc=[21,20,19,17,16,14,14.5,17,18,19,19,20]

  }
  else if(Estado == "CE"){
inc=[18,17,16,17,16,16,17,20,20,20,20,18]
  }
  else if(Estado == "DF"){
    inc=[16,18,18,16,16,14,16,18,18,18,16,16]

}
else if(Estado == "ES"){
inc=[17,18,18,14,14,12,12,13,14,16,16,16]
}
else if(Estado == "GO"){
  inc=[16,18,18,16,15,14,16,17,18,18,17,17]
}
else if (Estado == "MA") {
  inc= [15,15,15,15,17,17,18,19,18,18,17,16]

}
else if (Estado == "MT"){
inc= [17,16,17,18,15,14,16,17,18,18,17,17]
}
else if(Estado == "MS"){
inc= [19,18,18,15,13,11,14,15,16,18,20,20]

}
else if( Estado == "MG"){

  inc= [16,19,17,15,14,13,13,14,14,17,18,16]
}
else if( Estado == "PA"){
inc=[14,14,14,15,15,16,17,18,18,18,16,14]
}
else if ( Estado == "PB"){
inc=[20,20,20,18,16,14,14,18,20,22,21,20]

}

else if ( Estado == "PE"){
inc=[20,20,20,18,16,14,14,18,20,22,22,20]

}
else if ( Estado == "PI"){
inc= [17,16,16,18,18,18,18,20,20,20,20,20]

}
else if ( Estado == "PR"){
inc = [19,17,17,14,14,11,10,14,13,16,19,19]

}

else if ( Estado == "RJ"){
inc = [18,18,18,14,12,10,12,12,14,17,18,17]

}

else if ( Estado == "RN"){
    inc=[20,20,19,18,16,16,16,20,20,22,20,20]
}

else if ( Estado == "RO"){
  inc = [16,15,16,16,16,16,16,18,18,18,17,16]
}

else if ( Estado == "RR"){
inc=[18,18,20,16,16,16,16,18,19,19,17]

}

else if ( Estado == "RS"){
inc=[21,19,17,12,10,08,08,11,13,16,20,22]

}
else if( Estado == "SC"){
inc= [21,17,16,12,11,08,10,11,13,16,17,20]

}
else if ( Estado == "SE"){
inc = [20,22,20,16,14,12,14,16,18,20,21,22]

}

else if ( Estado == "SP"){
inc = [17,17,16,14,12,11,12,11,14,17,17,18]

}

else if ( Estado == "TO"){
inc = [15,15,16,17,17,16,16,18,18,17,16,15]

}
var i,media=0;
for (i=0;i<12;i++)
{
media=media + inc[i];
window.localStorage.setItem("incidencia"+i,inc[i]);
}
 media=Math.floor(100*media/12)/100;
  var input=document.getElementsByTagName("input");

if(input[0].value!="" && input[1].value!="" && input[2].value!=""){

/*

  document.getElementById("texto-nome").innerHTML="Prezado(a) " + document.getElementById("name").value + ",";
document.getElementById("texto-placas").innerHTML="Número de placas necessárias: "+ placa +
" de "+ Math.max(...inc)*16.67 + " watts. A área necessária é de "+ Math.floor(100*placa*2.01)/100 + " metros quadrados.";
document.getElementById("texto-custo").innerHTML= " O payback é entre " + Math.floor(100*payback)/100 +
 " e  " + Math.floor(110*payback)/100 + " anos."

document.getElementById("div-simulador").style.display="block";
*/
}

else {
  alert("Preencha todos os campos por favor");
}
}
