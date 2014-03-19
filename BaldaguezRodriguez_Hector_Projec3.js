// Hector Baldaguez Rodriguez
// SDI 1403
// 03/20/2014
// Project-3

// My Variables
var title = "BladeBow Hunter";
var myDecision = "yes"
var huntBord = "Hunting Board";
var userName;

// The JSON data is in the json.js file.


// Title of the game.
var say = function (message) {console.log(message);};
 
alert("Welcome to the World of " + title)
userName = prompt("Welcome Hunter.","What is your Hunter name?");

// This will be the name of the users character.
var userN = function (hunter) {
    
    say("Your Hunter Name is " + userName);
    
};
userN(name)

// Array function. Monsters to hunt. Mission Board.
var monsters = function() {
    
var monstersNames = ["Gilbert the killer gunner", "The Scrapler"];

monstersNames[2] = "Nonsen the Blade";

say("There are " + monstersNames.length + " missions on the " + huntBord + ".");

say("The missions are:");
     
    for (var i = 0; i< monstersNames.length; i++)
      
     if (monstersNames[i] === "Gilbert the killer gunner") {
        // Huntin types
        say("The human to be hunted is " + monstersNames[i] + ".");
    
    } else {
        
        say("The monster to be hunted is " + monstersNames[i] + ".");
    
        var monsterList = monstersNames;     
    };
    
    
    return monsterList;
};

var mission = monsters();
say("This are the monsters to hunt:");
say(mission);

// Type of waepon to choose. Array Method

var weapons = ["Blade", "Bow", "Cannon"];

say("The weapons you have available are:");
say(weapons);

var lastWeapon = weapons.pop();// Taking out the connon weapon that is not needed.

say("We don't need the " + lastWeapon + ".")

say("All we need for this mission is the " + weapons + ".")

// Choosing mission from an array. In other words The mission board.
// This will be the Boolean function to see if the battle is won or not.

myDecision = confirm("Choose a Mission from the " + huntBord + ". Ok for humans or Cancel for monsters");
var decision = function (mission) {
    
    if (myDecision === true) {
        // What Mission to choose.
        say("Let's take them down.");
    } else {
        say("Let's go hunting monsters.");
    };
    return;
};
decision();

// My battle section

var attaking = function (hitPoints) {
    
    var attack = true;
    
    while (hitPoints > 0) {
        
        say("Slash him to death");
        say("He's going down. He has " + hitPoints + " HP to go.");
        attack = true
        
        attack = confirm("Time to hunt. OK to attack and Cancel to escape."); 
        
        if (attack === true) {
            hitPoints = hitPoints -370;
        } else {
            say("To bad.");
            attack = false
            break
            
        }   
        
    }     
    return hitPoints;
};             
var hp = attaking(3000);
say("The monster has " + hp + " life left");

// This part is for the cunsumption of experience points.

var exp = function (levelUp) { 
    var levelInc = 150;
    var expPoints = 1200;
    while (levelInc <= expPoints){
        say("Incrising the level of the weapon by " + levelInc + ". Level up to");
        levelInc = levelInc + 150;
    
    };    
        for (var levelInc = 150, expPoints = 1200; levelInc <= expPoints; levelInc = levelInc + 150) {
          say("You have added " + levelInc + " per level.");  
        };
       return levelUp;
};
var level = exp();
