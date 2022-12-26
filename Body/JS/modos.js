function atras(){
   location.href="inicio2.html"
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
