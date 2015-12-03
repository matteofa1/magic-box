function primos(n){
	for(i=0; i <= n; i++){

		for(j = 1;  j<=n; j++){
			if (1 % j !=0){
				console.log("el numero" + i + "no es primo");
			}
			else{
				return "el numero" + i + "es primo"
			}
		}
	}
}