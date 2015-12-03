unction piramide(cuantos) {

    var num = "";

    for (i = 1; i <= cuantos; i++){
        num = num + i;
        console.log(num);
    };
}

piramide(20);
MIÉ 20:41

var num1 = 0;
var num2 = 1;
var num3 = "";

function fibonnacci(cuantos) {

    for (i= 0; i<=cuantos;i++){
  
     num3 = num1 + num2;
     num1 = num2;
     num2 = num3;    

    console.log(num3);
    };
}

fibonnacci(20);