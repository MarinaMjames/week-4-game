//global variables
// variable used to select users character
var playersChoice = false;
//variable used to select character they wish to fight
var enemyChoice; 
// harry potter's fight stats 
var harryPotter = {
	hp: 180,
	attack: 6,
	counter: 28, 
};
//dumbledore's fight stats
var dumbledore = {
	hp: 125,
	attack: 5,
	counter: 19, 
};
// bellatrix's fight stats
var bellatrix = {
	hp: 125, 
	attack: 5, 
	counter: 17, 
};
// voldemort's fight stats
var voldemort = {
	hp: 180, 
	attack: 9, 
	counter: 29, 
};

//Created on click functions for each character in order to pick the players character and move the other characters to the choiceToAttack div
// Harry Potter as First Player

$('.harry').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.harry'));

// Move other characters to enemies station
		$('.enemies').append($('.dumble'));
		$('.enemies').append($('.bella'));
		$('.enemies').append($('.volde')); 
		playersChoice = harryPotter;
	}

// move enemies to choiceToAttack div on screen 
	// will move Dumbledore
	$('.dumble').click(function() {
		$('.choiceToAttack').appenbellad($('.dumble'));
		enemyChoice = dumbledore; 
	$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Bellatrix
	$('.bella').click(function() {
		$('.choiceToAttack').append($('.bella'));
		enemyChoice = bellatrix;
	$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Voldemort
	$('.volde').click(function() {
		$('.choiceToAttack').append($('.volde'));
		enemyChoice = voldemort;
	$('.hpEnemyChoice').html(enemyChoice.hp);
	});	
});

// Dumbledore as First Player
$('.dumble').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.dumble'));
	
// Move other characters to enemies station
		$('.enemies').append($('.harry'));
		$('.enemies').append($('.bella'));
		$('.enemies').append($('.volde'));
		playersChoice = dumbledore;
	}
	
// move enemies to choiceToAttack div on screen
	// will move Harry Potterharry
	$('.harry').click(function() {
		$('.choiceToAttack').append($('.harry'));
		enemyChoice = harryPotter; 
   		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Bellatrix
	$('.bella').click(function() {
		$('.choiceToAttack').append($('.bella'));
		enemyChoice = bellatrix;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Voldemort
	$('.volde').click(function() {
		$('.choiceToAttack').append($('.volde'));
		enemyChoice = voldemort;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});	
});

// Bellatrix as First Player
$('.bella').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.bella'));

// Move other characters to enemies station
		$('.enemies').append($('.harry'));
		$('.enemies').append($('.dumble'));
		$('.enemies').append($('.volde'));
		playersChoice = bellatrix;
	}

// move enemies to choiceToAttack div on screen
	// will move Harry Potter
	$('.harry').click(function() {
		$('.choiceToAttack').append($('.harry'));
		enemyChoice = harryPotter; 
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Dumbledore
	$('.bella').click(function() {
		$('.choiceToAttack').append($('.bella'));
		enemyChoice = dumbledore;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Voldemort
	$('.volde').click(function() {
		$('.choiceToAttack').append($('.volde'));
		enemyChoice = voldemort;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});	
});

// Voldemort as First Player
$('.volde').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.volde'));

// Move other characters to enemies station
		$('.enemies').append($('.harry'));
		$('.enemies').append($('.dumble'));
		$('.enemies').append($('.bella'));
		playersChoice = voldemort;
	}

// move enemies to choiceToAttack div on screen
	// will move Harry Potter
	$('.harry').click(function() {
		$('.choiceToAttack').append($('.harry'));
		enemyChoice = harryPotter; 
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Dumbledore
	$('.dumble').click(function() {
		$('.choiceToAttack').append($('.dumble'));
		enemyChoice = dumbledore;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Voldemort
	$('.bella').click(function() {
		$('.choiceToAttack').append($('.bella'));
		enemyChoice = bellatrix;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});	
});	

// Attack function
$('.attackButton').click(function() {
	//Takes hp away from second player when attack button is clicked
   	enemyChoice.hp -= playersChoice.attack; 
   	//Add the first players attack to itself to continually increase each time attack button is clicked
 	playersChoice.attack += playersChoice.attack;
 	//takes hp away from first play due to second players counter attack when the attack button is clicked
    playersChoice.hp -= enemyChoice.counter;
    //Shows the hp for the first and second players on the webpage
    $('.hpPlayersChoice').html(playersChoice.hp);
    $('.hpEnemyChoice').html(enemyChoice.hp);

// This removes harry potter from defender box if he is second player and has an hp of 0 and below
    	if (enemyChoice == harryPotter && enemyChoice.hp <= 0){
    		$('.harry').remove();
    	}
// This removes dumbledore from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == dumbledore && enemyChoice.hp <= 0){
    		$('.dumble').remove(); 
    	}
// This removes bellatrix from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == bellatrix && enemyChoice.hp <= 0){
    		$('.bella').remove();
   		}
// This removes voldemort from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == voldemort && enemyChoice.hp <= 0){
    		$('.volde').remove();
   		}
// If first players hp goes to 0 the screen appears with You Lose!
   		if (playersChoice.hp <= 0){
   			alert("You were to weak to defeat your enemy. Try Again!");
   			//automatically resets page when the player loses
   			window.location.href = window.location.href;
   		}
});