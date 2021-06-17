// This code is for understanding basic concepts of array 
function display(arr){

	for(i = 0; i < arr.length ; i++){ 					//This function traverse all elements of array 
		console.log(arr[i]);
	}
}
var arr = [];

function selectionsort(){						// selection sort using push and splice functions in array
	var  len = 0;
	len  = arr.length;
	while(len){
		var max = 0 , number;
		
		for(i = 1; i < len; i++){
			if(arr[max] < arr[i])
				max = i;
		}
		len--;
		number = arr[max];						// Finding maximum number and copying into "number" variable
		arr.splice(max , 1);         			// deleting maximum number from current position and pushing it into last  
		display(arr);
		console.log("break");

		arr.push(number);

		}
	}
