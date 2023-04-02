function abrir(){
    document.getElementById("política").style.display="block";
}

function cerrar(){
    document.getElementById("política").style.display="none";
    
}

function menu(){
   document.getElementById("menu").style.display="block";
   document.getElementById("me").style.display="none";
   document.getElementById("Jugar").style.display="none";
   
   setTimeout(function() {

    document.getElementById("menu").style.display="none";
   document.getElementById("me").style.display="block";
   document.getElementById("Jugar").style.display="block";
    
}, 1000*4);
   
}
function cerrar1(){
   document.getElementById("Facebook3").style.display="none";
}
