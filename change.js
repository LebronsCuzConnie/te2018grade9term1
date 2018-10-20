// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
console.log("bLeep blOop! i'm a CHanGE macHINe!")

let inputCents = READLINE.question("Please enter cents as a positive integer: ");
console.log(`${inputCents} cents makes:`);
let quarters = Math.floor(inputCents/25);
let dimes = Math.floor(inputCents%25/10)
let nickels = Math.floor(inputCents%10/5)
let pennies = Math.floor(dimes%5/1)


let changeMachine = {
	cents : inputCents,
	quarters : quarters,
	dimes : dimes,
	nickel : nickels,
	pennies : pennies,
	greeting : "bLeep blOop! i'm a CHanGE macHINe!",
	farewell : "BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!"
};

console.log(`${quarters} quarters`);
console.log(`${dimes} dimes`);
console.log(`${nickels} nickels`);
console.log(`${pennies} pennies`);

console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");


