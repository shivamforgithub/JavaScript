var x = 20 , y = 30;
function bloackscope() {
	var x = 10 
	console.log("Value of var is " + x);

{
	var x = 5;
	console.log("Value inside block is " + x);
}
	console.log("Value outside block is " + x);
}
function localscope(){
	var x = 5;
	console.log("Value of var is " + x);
}
function localvar(){
	var x = 10 ;
	console.log("Value of var is " + x);
	localscope();                           // function is envoked fuction call within a fuction
	console.log("Value of var outside is " + x); // variable X is overriden here on global variable
	console.log("Value of var is " + y);

}

function letscope(){
	let x = 10;
	console.log("Value of let is " + x);
{
	let x = 5;
	console.log("Value of let is " + x);
}
	console.log("Value of let is " + x);   // let & var are two ways to define a variable in JS. let don't change value outside block



}