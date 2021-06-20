const person = {

	branch : "IT" ,
	college: "CoEP",
	count: 80,
	deptID : 163589,

	addstudents(name , MIS ) {
	
	this.students.push({Name: name , Roll_No: MIS});       // This fuction takes student information and push it into array as a object
	// body...
	},

	traverse(){
		for (let x= 0 ; x < this.students.length; x++){
			console.log(this.students[x]);
		}
	},

	students: []


}
var nname = person.students;


