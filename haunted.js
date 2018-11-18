const READLINE = require("readline-sync");

let player = {
  name: undefined,
  pronouns: undefined 
};

console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
player.pronouns = READLINE.question("What are your prefered pronouns (she/her or he/his/him or they/their)?: ");
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
  				console.log(`She smiles revealing black gums. Her bones crack and she morphs into a carbon copy of ${player.name}! She points a bony finger at ${player.name} and ${player.name} feel a sharp pain spread through ${player.pronouns} body. ${player.name} looks down and realizes that ${player.pronouns} ha(s)(ve) become the ghost. She disappears and ${player.name} is left alone. A knife and a glass filled with a red substance appears. `);
  				let appearingThings = READLINE.question(`Does ${player.name} pick up the knife or drink the red liquid? (knife or drink) `);
  				if(appearingThings == "k" || appearingThings == "knife"){
  					console.log(`The knife slips from ${player.name} hands, levitates, and stabs ${player.name} in the throat. Unfortunatley, ${player.name} has died. `);
  				}
  				else if(appearingThings == "d" || appearingThings == "drink"){
  					console.log(`${player.name} drinks the red substance, blacks out and wakes up in ${player.pronouns} bed. ${player.name}'s mother comes in to wake ${player.name} up. Little does ${player.name} know, ${player.pronouns} still looks like the ghost girl and the ghost girl still looks like ${player.pronouns}! ${player.name}'s mother's  eyes widen. When she looks at ${player.name} she sees the ghost girl! She grabs a dagger from her pocket and stabs ${player.name}! What a shame, ${player.name} has been killed by ${player.pronouns} own mother... `);
  				}
  				else{
  					console.log(`${player.name} decide to do ${player.pronouns} own thing and immediatly a bright light hits ${player.pronouns}. ${player.name} is blinded and faints. The floor becomes lined with spikes and as ${player.pronouns} hit the ground...well, ${player.pronouns} died. `);
  				}
  			}
  			else if(ghostGirl == "r" || ghostGirl == "run from"){
  				console.log(`A pain spreads through ${player.name}'s chest. As ${player.name}'s' vision becomes increasingly fuzzy, ${player.pronouns} see(s) the ghost girl with a finger over her mouth. ${player.name} contemplates whether to speak or close ${player.pronouns} eyes and accept defeat. `);
  				let fingerGhostGirl = READLINE.question(`Does ${player.name} try to speak or do/does ${player.pronouns} close ${player.pronouns} eyes? (close eyes or speak) `);
  				if(fingerGhostGirl == "s" || fingerGhostGirl == "speak"){
  					console.log(`${player.name} opens ${player.name} mouth and blood clots spurt from it. Sadly, ${player.name} bleeds out and dies. `);
  				}
  				else if(fingerGhostGirl == "c" || fingerGhostGirl == "close eyes"){
  					console.log(`${player.name} closes ${player.pronouns} eyes. ${player.pronouns} wake(s) up and realize it was all a dream. Congratulations ${player.name}! `);
  				}
  				else{
  					console.log(`${player.name} begins to levitate. "I'm flying!" ${player.pronouns} think(s). Then SPLAT, they pummel to the ground and die. `);
  				}	
  			}
  			else{
  				console.log(`Really,${player.name}? It's one or the other! The ghost girl gets angry over ${player.pronouns} hesitance and kills ${player.name}! `);
  			}	
  	}
  	else if(seeTunnels == "r" || seeTunnels == "right"){
  		console.log(`${player.name} decides to enter the tunnel on the right, whose entrance is covered in roaches. As ${player.name} steps in ${player.pronouns} notice(s) that on the opposite ends of the tunnel's walls there's a switch and a trapdoor. `);
  		let doorSwitch = READLINE.question(`Does ${player.name} go through the door or flip the switch? (flip switch or open door) `);
  		if (doorSwitch == "o" || doorSwitch == "open door" || doorSwitch == "open the door"){
  			console.log(`${player.name} steps through the door and falls into an endless void. To say it simply, ${player.name} dies. ` );
  		}
  		else if(doorSwitch == "f" || doorSwitch == "flip switch"||doorSwitch == "flip the switch"){
  			console.log(`As ${player.name} reaches out to flip the switch ${player.pronouns} feel(s) a buzzing sensation and ${player.name} body jolts. ${player.pronouns} muscles contract and ${player.pronouns} fall(s) to the ground stiff. Slowly ${player.pronouns} lose(s) consciousness and never regain(s) it. ${player.name} is dead. `);
  		}
  		else{
  			console.log(`${player.pronouns} really tried it. ${player.name} died from incompetence. ${player.pronouns} only had one job! `);
  		}
  	}
  	else{
  		console.log(`${player.name} really thought that they could dodge death. But death waits for no one. To say it simply, because of ${player.pronouns} indecisiveness, ${player.pronouns} died. `);
  	}

} 
else if (enterHouse == "n" || enterHouse == "no") {
  console.log(`${player.name} decides not to open the door. ${player.pronouns} hear(s) a raspy whisper, "Come in. Save me." ${player.name} step(s) towards the haunted house, compelled by the sound of the voice. The voice grows louder and ${player.name}'s ears begin to bleed. Slowly ${player.name}'s breath shortens until it stops. Because ${player.name} did not enter the house ${player.pronouns} lost all chance of survival and died. `);
}
else{
	console.log(`Really, ${player.name}! You missed out on a fun adventure. SMH. `);
}
console.log("~~~~~~~~~~~~~~~~The End~~~~~~~~~~~~~~~~");


