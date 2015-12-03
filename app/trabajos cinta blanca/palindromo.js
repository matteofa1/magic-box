var palindromo=prompt("dime un palindromo");
palindromo=palindromo.toLowerCase();
var palindromo1=palindromo.replace(/\s/g, "");
var palin1="";
//alert(palindromo1);

for ( var i=palindromo1.length - 1; i >= 0 ; i--){
	//var palin1=console.log(palindromo1[i])
	palin1=palin1+palindromo1[i];

};

if (palin1==palindromo1){
	alert("es un palindromo")

}else{
	alert("no es un palindromo")
};