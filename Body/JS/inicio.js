setTimeout(function() {

    document.getElementById("intro").style.display="none";
    
}, 1000*9);

function abrir(){
    document.getElementById("política").style.display="block";
}

function cerrar(){
    document.getElementById("política").style.display="none";
}
function abrir2(){
   document.getElementById("menú").style.display="block";
   document.getElementById("abrir2").style.display="none";
   
   document.getElementById("Jugar").style.display="none";
   
   setTimeout(function() {

    document.getElementById("menú").style.display="none";
   document.getElementById("abrir2").style.display="block";
   
   document.getElementById("Jugar").style.display="block";
    
}, 1000*4);
   
}
function cerrar(){
   document.getElementById("Facebook3").style.display="none";
}