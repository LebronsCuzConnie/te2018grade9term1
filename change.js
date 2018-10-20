// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
console.log("bLeep blOop! i'm a CHanGE macHINe!")

let inputCents = READLINE.question("Please enter cents as a positive integer: ");
console.log(`${inputCents} cents makes:`);
let quarters = Math.floor((inputCents)/25);
let remainder = inputCents%25;
let dimes = Math.floor(remainder/10);
remainder = remainder%10;
let nickels = Math.floor(remainder/5);
remainder = remainder%5;
let pennies = Math.floor(remainder/1);


let changeMachine = {
	cents : inputCents,
	quarters : quarters,
	dimes : dimes,
	nickels : nickels,
	pennies : pennies,
	greeting : "bLeep blOop! i'm a CHanGE macHINe!",
	farewell : "BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!"
};

console.log(`${changeMachine.quarters} quarters`);
console.log(`${changeMachine.dimes} dimes`);
console.log(`${changeMachine.nickels} nickels`);
console.log(`${changeMachine.pennies} pennies`);

console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");


