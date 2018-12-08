function sayHello(name){
	console.log(`Hello ${name}`);
}

sayHello("LeBron");


function add(x,y){
	let sum = x + y;
	console.log(sum);
}

add(1,4);

function getAge(){
	let birthYear = READLINE.question("What is yor birth year?: ")
	let currentYear = (new Date()).getFullYear();
	console.log(currentAge);
	let age =  currentYear - birthYear;
	return age;
}

let userAge = getAge();
if (userAge < 17){
	console.log("No R-Rated movies!");
}
