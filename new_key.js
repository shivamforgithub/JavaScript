const person = {

	branch : "IT" ,
	college: "CoEP",
	count: 80,
	deptID : 163589,
	name : {
				surname : "Agrawal",
				MISS : 111708005 
			},

	students: [{
			name : {
				surname : "Agrawal",
				MIS : 111708005 
			}
		
	}]

}


var kvalue;
var path = []
var ispresent = true;

function traverse(obj , key ){
		for (x in obj){
			if(typeof(obj[x]) != "object" && typeof(obj[x]) != "function"){
				//console.log(typeof(x) + "--->" + x + "-->" + (obj[x]))

				if(key == x){
					path.push(key)
					kvalue = obj[x]
					return true;
					
				}
				
			}
			else if(typeof(obj[x]) == "object") {
				var abc = x
				ispresent = traverse(obj[x], key)
				if(ispresent){
					path.push(abc)
					return true;
				}


				
			}
		}
		return false
				
	}

function reversePath(path) {                            //to reverse path array to get orignal path
    var newpath = "";
    for (var i = path.length - 1; i >= 0; i--) {
        newpath += (path[i] + '/');
    }
    return newpath;
}

function traversal(object , key){
	var value = traverse(object,key);
	if (value == true){
		path.push('person')
		console.log("value of key is:" , kvalue)
		path = reversePath(path)
		console.log(path)
	}
	else
		console.log("Key is not present is given Object")
}

traversal(person ,'MISSS')

