const student = {
	name: "Mosh",
	school: "CoEP",
	age: 21,

	run(){
		var age = 40;
		console.log("Hello" + this.name);
		console.log("Hello You are " + this.age);
		console.log("Hello You are " + age);

	},
	dob(){
		console.log("Hi");
	}

}

var nname = student;     // refernce of student is associated to nname (No copy)

student.age = 40;
console.log(nname.age);   // changes in "student" object is reflected in "nname" object

