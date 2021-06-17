const student = {
	name: "Mosh",
	school: "CoEP",
	age: 21,

	run(){
		console.log("Hello" + this.name);
		console.log("Hello You are " + this.age);

	},
	dob(){
		console.log("Hi");
	}

}

let copy = {			// COPY object 
	...student
};
copy.run();
copy.age = 50;
copy.run();
student.run();


