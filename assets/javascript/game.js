//global variables
// variable used to select users character
var playersChoice = false;
//variable used to select character they wish to fight
var enemyChoice; 
// harry potter's fight stats 
var harryPotter = {
	hp: 180,
	attack: 6,
	counter: 27, 
};
//dumbledore's fight stats
var dumbledore = {
	hp: 130,
	attack: 4,
	counter: 21, 
};
// bellatrix's fight stats
var bellatrix = {
	hp: 110, 
	attack: 4, 
	counter: 19, 
};
// voldemort's fight stats
var voldemort = {
	hp: 170, 
	attack: 7, 
	counter: 27, 
};

//Created on click functions for each character in order to pick the players character and move the other characters to the choiceToAttack div
// Harry Potter as First Player

$('.one').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.one'));

// Move other characters to enemies station
		$('.enemies').append($('.two'));
		$('.enemies').append($('.three'));
		$('.enemies').append($('.four')); 
		playersChoice = harryPotter;
	}

// move enemies to choiceToAttack div on screen 
	// will move Dumbledore
	$('.two').click(function() {
		$('.choiceToAttack').append($('.two'));
		enemyChoice = dumbledore; 
	$('.hpSecondPlayer').html(enemyChoice.hp);
	});

	// will move Bellatrix
	$('.three').click(function() {
		$('.choiceToAttack').append($('.three'));
		enemyChoice = bellatrix;
	$('.hpSecondPlayer').html(enemyChoice.hp);
	});

	// will move Voldemort
	$('.four').click(function() {
		$('.choiceToAttack').append($('.four'));
		enemyChoice = voldemort;
	$('.hpSecondPlayer').html(enemyChoice.hp);
	});	
});

// Dumbledore as First Player
$('.two').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.two'));
	
// Move other characters to enemies station
		$('.enemies').append($('.one'));
		$('.enemies').append($('.three'));
		$('.enemies').append($('.four'));
		playersChoice = dumbledore;
	}
	
// move enemies to choiceToAttack div on screen
	// will move Harry Potter
	$('.one').click(function() {
		$('.choiceToAttack').append($('.one'));
		enemyChoice = harryPotter; 
   		$('.hpSecondPlayer').html(enemyChoice.hp);
	});

	// will move Bellatrix
	$('.three').click(function() {
		$('.choiceToAttack').append($('.three'));
		enemyChoice = bellatrix;
		$('.hpSecondPlayer').html(enemyChoice.hp);
	});

	// will move Voldemort
	$('.four').click(function() {
		$('.choiceToAttack').append($('.four'));
		enemyChoice = voldemort;
		$('.hpSecondPlayer').html(enemyChoice.hp);
	});	
});

// Bellatrix as First Player
$('.three').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.three'));

// Move other characters to enemies station
		$('.enemies').append($('.one'));
		$('.enemies').append($('.two'));
		$('.enemies').append($('.four'));
		playersChoice = bellatrix;
	}

// move enemies to choiceToAttack div on screen
	// will move Harry Potter
	$('.one').click(function() {
		$('.choiceToAttack').append($('.one'));
		enemyChoice = harryPotter; 
		$('.hpSecondPlayer').html(enemyChoice.hp);
	});

	// will move Dumbledore
	$('.two').click(function() {
		$('.choiceToAttack').append($('.two'));
		enemyChoice = dumbledore;
		$('.hpSecondPlayer').html(enemyChoice.hp);
	});

	// will move Voldemort
	$('.four').click(function() {
		$('.choiceToAttack').append($('.four'));
		enemyChoice = voldemort;
		$('.hpSecondPlayer').html(enemyChoice.hp);
	});	
});

// Voldemort as First Player
$('.four').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.four'));

// Move other characters to enemies station
		$('.enemies').append($('.one'));
		$('.enemies').append($('.two'));
		$('.enemies').append($('.three'));
		playersChoice = voldemort;
	}

// move enemies to choiceToAttack div on screen
	// will move Harry Potter
	$('.one').click(function() {
		$('.choiceToAttack').append($('.one'));
		enemyChoice = harryPotter; 
		$('.hpSecondPlayer').html(enemyChoice.hp);
	});

	// will move Dumbledore
	$('.two').click(function() {
		$('.choiceToAttack').append($('.two'));
		enemyChoice = dumbledore;
		$('.hpSecondPlayer').html(enemyChoice.hp);
	});

	// will move Voldemort
	$('.three').click(function() {
		$('.choiceToAttack').append($('.three'));
		enemyChoice = bellatrix;
		$('.hpSecondPlayer').html(enemyChoice.hp);
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
    $('.hpFirstPlayer').html(playersChoice.hp);
    $('.hpSecondPlayer').html(enemyChoice.hp);

// This removes harry potter from defender box if he is second player and has an hp of 0 and below
    	if (enemyChoice == harryPotter && enemyChoice.hp <= 0){
    		$('.one').remove();
    	}
// This removes dumbledore from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == dumbledore && enemyChoice.hp <= 0){
    		$('.two').remove(); 
    	}
// This removes bellatrix from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == bellatrix && enemyChoice.hp <= 0){
    		$('.three').remove();
   		}
// This removes voldemort from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == voldemort && enemyChoice.hp <= 0){
    		$('.four').remove();
   		}
// If first players hp goes to 0 the screen appears with You Lose!
   		if (playersChoice.hp <= 0){
   			alert("You were to weak to defeat your enemy. Try Again!");
   			//automatically resets page when the player loses
   			window.location.href = window.location.href;
   		}
});
