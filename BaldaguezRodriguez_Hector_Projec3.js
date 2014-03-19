// Hector Baldaguez Rodriguez
// SDI 1403
// 03/20/2014
// Project-3

// My Variables
var title = "BladeBow Hunter";
var myDecision = "yes"
var huntBord = "Hunting Board";
var userName;

// The JSON data is in the json.js file


// My Prompt and Proceduer
var say = function (message) {console.log(message);};
 
alert("Welcome to the World of " + title)
userName = prompt("Welcome Hunter.","What is your Hunter name?");

var userN = function (hunter) {
    
    say("Your Hunter Name is " + userName);
    
};
userN(name)

// Array function. Monsters to hunt. Mission Board.

var monstersNames = ["Gilbert the killer gunner", "The Scrapler, Shadrowing"];
monstersNames[monstersNames.length] = "Gilbert the killer gunner"


// Choosing mission from an array. In other words The mission board.

myDecision = confirm("Choose a Mission from the " + huntBord + ". Ok for Scrapler or Cancel for Gunner");
var decision = function (mission) {
    
    if (myDecision === true) {
        // What Mission to choose.
        say("Let's go hunting.");
    } else {
        say("Let's take him down.");
    };
    return;
};
decision();

// My battle section

var attaking = function (hitPoints) {
    
    var attack = true;
    
    while (hitPoints > -330) {
        
        say("Slash him to death");
        say("He's going down only " + hitPoints + " HP left");
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
        console.log("Incrising the level of the weapon by " + levelInc + ". Level up to");
        levelInc = levelInc + 150;
    
    };    
        for (var levelInc = 150, expPoints = 1200; levelInc <= expPoints; levelInc = levelInc + 150) {
          console.log("You have added " + levelInc + " per level.");  
        };
       return levelUp;
};
var level = exp();
