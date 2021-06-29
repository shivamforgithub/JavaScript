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



var path = " ";

function traverse(obj , key , paths ){
	var newpath = obj.name;
	path = path + paths;
		for (x in obj){
			if(typeof(obj[x]) != "object" && typeof(obj[x]) != "function"){
				if(key == obj[x]){
					path = path +"/"+ x;

					console.log("Key Found")
					return[key , path]
				}
				
			}
			else if (typeof(obj[x]) == "object"){
				traverse(obj[x], key , path +'/'+ x);
				
			}
		}		
	}


traverse(person,"Agrawal",' ');
console.log(path);
