function atras(){
   location.href="inicio2.html"
}
function primero(){
   location.href="go:1"
}
function segundo(){
   location.href="go:2"
}
function tercero(){
   location.href="go:3"
}
function cuarto(){
   location.href="go:4"
}
function quinto(){
   location.href="go:5"
}
function sesto(){
   location.href="go:6"
}
function hugo(){
   location.href="Hugo PTP/hugo.html"
}
function apack(){
   location.href="#"
}
function multijugador(){
   document.getElementById("próximo").style.display="block";
   
   document.getElementById("hugo").style.display="none";
   
   document.getElementById("apack").style.display="none";
    
    document.getElementById("multi").style.display="none";
   
   setTimeout(function() {

    document.getElementById("próximo").style.display="none";
    
    document.getElementById("hugo").style.display="block";
    
    document.getElementById("apack").style.display="block";
    
    document.getElementById("multi").style.display="block";
    
}, 1500*1);

}

function apack(){
   document.getElementById("próximo").style.display="block";
   
   document.getElementById("hugo").style.display="none";
   
   document.getElementById("apack").style.display="none";
    
    document.getElementById("multi").style.display="none";
   
   setTimeout(function() {

    document.getElementById("próximo").style.display="none";
    
    document.getElementById("hugo").style.display="block";
    
    document.getElementById("apack").style.display="block";
    
    document.getElementById("multi").style.display="block";
    
}, 1500*1);

}
