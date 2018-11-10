const READLINE = require("readline-sync");

let schoolQuality = READLINE.question("How was school today? Enter good/bad. ")

if(schoolQuality == "good"){
	let homeworkDone = READLINE.question("Did you do your homework? Enter yes/no. ");
		if(homeworkDone == "yes"){
			console.log("Go clean your room.");
		}
		else if(homeworkDone == "no"){
			console.log("Hurry up and finish so that you can clean your room!");
		}
}
else if (schoolQuality == "bad"){
	let wannaT = READLINE.question("Do you wanna talk about it? Enter yes/no. ");
		if(wannaT == "yes"){
			console.log("I'm all ears!");
		}
		else if(wannaT == "no"){
			console.log("What happened at school?!!?")
		}

}
