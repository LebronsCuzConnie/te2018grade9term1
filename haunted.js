const READLINE = require("readline-sync");

let player = {
  name: undefined,
};

console.log(); 
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house. `);
console.log(`${player.name} hears what sounds like screaming coming from inside the house. `);
let enterHouse = READLINE.question(`Will ${player.name} enter the house? (yes or no) `);
if(enterHouse == "y" || enterHouse == "yes") {
  	console.log(`${player.name} opens the door and sees two tunnels. `);
  	let seeTunnels = READLINE.question(`Does ${player.name} decide to enter the tunnel on the left or the right? (left or right) `);
  	if(seeTunnels == "l" || seeTunnels == "left"){
  		console.log(`${player.name} decides to enter the tunnel whose entrance is covered in blood. A little ghost girl motions for ${player.name} to follow. `);
  		let ghostGirl = READLINE.question(`Does ${player.name} follow the ghost girl or run from her? (follow or run from) `);
  			if(ghostGirl == "f" || ghostGirl == "follow"){
  				console.log(`She smiles revealing black gums. Her bones crack and she morphs into a carbon copy of ${player.name}! She points a bony finger at ${player.name} and ${player.name} feel a sharp pain spread through ${player.name}'s body. ${player.name} looks down and realizes that s/he has become the ghost. She disappears and ${player.name} is left alone. A knife and a glass filled with a red substance appears. `);
  				let appearingThings = READLINE.question(`Does ${player.name} pick up the knife or drink the red liquid? (knife or drink) `);
  				if(appearingThings == "k" || "knife"){
  					console.log(`The knife slips from ${player.name} hands, levitates, and stabs ${player.name} in the throat. Unfortunatley, ${player.name} has died. `)
  				}
  				else if(appearingThings == "d" || "drink"){
  					console.log(`${player.name} blacks out and wakes up in his/her bed. ${player.name}'s mother comes in to wake ${player.name} up. Little does ${player.name} know, s/he still looks like the ghost girl and the ghost girl still looks like her/him! ${player.name}'s mother's  eyes widen. When she looks at ${player.name} she sees the ghost girl! She grabs a dagger from her pocket and stabs ${player.name}! What a shame, ${player.name} has been killed by his/her own mother... `);
  				}
  			}
  			else if(ghostGirl == "r" || "run from"){
  				console.log(`A pain spreads through ${player.name}'s chest. As ${player.name}'s' vision becomes increasingly fuzzy, s/he sees the ghost girl with a finger over her mouth. ${player.name} contemplates whether to speak or close his/her eyes and accept defeat. `);
  				let fingerGhostGirl = READLINE.question(`Does ${player.name} try to speak or do they close his/her eyes? (close eyes or speak) `);
  				if(fingerGhostGirl == "s" || fingerGhostGirl == "speak"){
  					console.log(`${player.name} opens his/her mouth and blood clots spurt from it. Sadly, ${player.name} bleeds out and dies. `);
  				}
  				else if(fingerGhostGirl == "c" || fingerGhostGirl == "close eyes"){
  					console.log(`${player.name} closes his/her eyes. They wake up and realize it was all a dream. Congratulations ${player.name}! `);
  				}	
  			}	
  	}
  	else if(seeTunnels == "r" || seeTunnels == "right"){
  		console.log(`${player.name} decides to enter the tunnel on the right, whose entrance is covered in roaches. As ${player.name} steps in they notice that on the opposite ends of the tunnel's walls there's a switch and a trapdoor. `);
  		let doorSwitch = READLINE.question(`Does ${player.name} go through the door or flip the switch? (flip switch or open door) `);
  		if (doorSwitch == "o" || "open door"){
  			console.log(`${player.name} steps through the door and falls into an endless void. To say it simply, ${player.name} dies. ` );
  		}
  		else if(doorSwitch == "f" || "flip switch"){
  			console.log(`As ${player.name} reaches out to flip the switch they feel a buzzing sensation and his/her body jolts. His/her muscles contract and they fall to the ground stiff. Slowly they lose consciousness and never regain it. ${player.name} is dead. `);
  		}
  	}

} 
else if (enterHouse == "n" || enterHouse == "no") {
  console.log(`${player.name} decides not to open the door. They hear a raspy whisper, "Come in. Save me." ${player.name} step towards the haunted house, compelled by the sound of the voice. The voice grows louder and ${player.name}'s ears begin to bleed. Slowly ${player.name}'s breath shortens until it stops. Because ${player.name} did not enter the house s/he lost all chance of survival and died. `);
}
console.log("Thanks for playing!");


