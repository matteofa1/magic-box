function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var gd=0;

while (gd<1){
var user= prompt("escoge 0 para papel, 1 para tijera y 2 para piedra");
var compu = getRandomInt(0,2);
var papel= 0
var tijera=1
var piedra=2

if (compu == user) {
    console.log("empate")

}; 
if  (compu =="2" && user =="1"){
    console.log("pierdes")
};
if  (compu =="2" && user == "0") {
    console.log("ganas")
};
if  (compu == "0" && user =="2") {
    console.log("pierdes")
};
if  (compu == "0" && user =="1"){
    console.log("ganas")
};
if  (compu == "1" && user == "0"){
    console.log("pierdes")
};
if  (compu == "1" && user == "2"){
    console.log("ganas")
};

var gd = prompt("quieres seguir jugando? si=0 no=1");
}