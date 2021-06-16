function iseven(number){
	return number % 2 === 0;
}

function isodd(number){
	return number % 2 === 1;
}

function isprime(number){
	var num = number , i = 2;
	while(i < number/2){
		if (number % i === 0){
			return false;
		}
		i++;
	}
	return true;
}

function checkrange(num1 , num2 , operation){
	switch (operation){
		case 1:
			for(i = num1; i <= num2; i++){
				if(iseven(i))
					console.log(i);
			}
			break;
		case 2:
			for(i = num1; i <= num2; i++){
				if(isodd(i))
					console.log(i);
			}
			break;
		case 3:
			for(i = num1; i <= num2; i++){
				if(isprime(i))
					console.log(i);
			}
			break;
		default:
			console.log("Select option 1 to 3");
	}
}