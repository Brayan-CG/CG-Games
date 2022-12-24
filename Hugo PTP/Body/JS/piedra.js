swal("Inicia el juego");

function piedra(){
    document.getElementById("piedra").style.display="none";
    document.getElementById("tijeras").style.display="none";
    document.getElementById("papel").style.display="none";
    let player = 0;

  if (player == 0) {
    document.getElementById("player0").style.display="block";
}else if (player == 1) {
    document.getElementById("player1").style.display="block";
}else if (player == 2) {
    document.getElementById("player2").style.display="block";
}

document.getElementById("Reinicio").style.display="block";

let enemy = Math.round(Math. random()*2)

if (enemy == 0) {
   document.getElementById("enemy0").style.display="block";
}else if (enemy == 1) {
    document.getElementById("enemy1").style.display="block";
}else if (enemy == 2) {
    document.getElementById("enemy2").style.display="block";
}

if (player == enemy) {
    document.getElementById("Empate").style.display="block";
}else if (player == 0 && enemy == 2) {
    document.getElementById("Ganaste").style.display="block";
}else if (player == 1 && enemy == 0) {
    document.getElementById("Ganaste").style.display="block";
}else if (player == 2 && enemy == 1) {
    document.getElementById("Ganaste").style.display="block";
}else {
    document.getElementById("Perdiste").style.display="block";
}
}