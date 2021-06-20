const person = {

	branch : "IT" ,
	college: "CoEP",
	count: 80,
	deptID : 163589,

	addstudents(name , MIS ) {
	
	this.students.push({Name: name , Roll_No: MIS});       // This fuction takes student information and push it into array as a object
	// body...
	},

	students: [{
			name : {
				surname : "Agrawal",
				MIS : 111708005 
			}
		
	}]
}



const path = [];

function traverse(obj , key){
		for (x in obj){
			if(typeof(obj[x]) != "object" && typeof(obj[x]) != "function"){
				if(key == obj[x]){
					path.push(x);
					console.log("Key Found");
					return true;
				}
				
			}
			else if (typeof(obj[x]) == "object"){
				if(traverse(obj[x], key)){
					path.push(x);
				}
			}
		}
		
	}

/*function clearpath(path){
	while(path.length != 0)
		path.pop();
}*/

