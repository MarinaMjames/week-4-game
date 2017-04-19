//global variables
// variable used to select users character
var firstPlayer;
//variable used to select character they wish to fight
var secondPlayer; 
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
$('.one').on('click', function() {

	if (!firstPlayer) {
		$('.playersChoice').append($('.one'));

// Move other characters to enemies station
		$('.enemies').append($('.two'));
		$('.enemies').append($('.three'));
		$('.enemies').append($('.four')); 
		firstPlayer = harryPotter;
	}

// move enemies to choiceToAttack div on screen 
	// will move Dumbledore
	$('.two').on('click', function() {
		$('.choiceToAttack').append($('.two'));
		secondPlayer = dumbledore; 
	$('.hpSecondPlayer').html(secondPlayer.hp);
	});

	// will move Bellatrix
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
	$('.hpSecondPlayer').html(secondPlayer.hp);
	});

	// will move Voldemort
	$('.four').on('click', function() {
		$('.choiceToAttack').append($('.four'));
		secondPlayer = voldemort;
	$('.hpSecondPlayer').html(secondPlayer.hp);
	});	
});

// Dumbledore as First Player
$('.two').on('click', function() {

	if (!firstPlayer) {
		$('.playersChoice').append($('.two'));
	
// Move other characters to enemies station
		$('.enemies').append($('.one'));
		$('.enemies').append($('.three'));
		$('.enemies').append($('.four'));
		firstPlayer = dumbledore;
	}
	
// move enemies to choiceToAttack div on screen
	// will move Harry Potter
	$('.one').on('click', function() {
		$('.choiceToAttack').append($('.one'));
		secondPlayer = harryPotter; 
   		$('.hpSecondPlayer').html(secondPlayer.hp);
	});

	// will move Bellatrix
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});

	// will move Voldemort
	$('.four').on('click', function() {
		$('.choiceToAttack').append($('.four'));
		secondPlayer = voldemort;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});	
});

// Bellatrix as First Player
$('.three').on('click', function() {

	if (!firstPlayer) {
		$('.playersChoice').append($('.three'));

// Move other characters to enemies station
		$('.enemies').append($('.one'));
		$('.enemies').append($('.two'));
		$('.enemies').append($('.four'));
		firstPlayer = bellatrix;
	}

// move enemies to choiceToAttack div on screen
	// will move Harry Potter
	$('.one').on('click', function() {
		$('.choiceToAttack').append($('.one'));
		secondPlayer = harryPotter; 
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});

	// will move Dumbledore
	$('.two').on('click', function() {
		$('.choiceToAttack').append($('.two'));
		secondPlayer = dumbledore;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});

	// will move Voldemort
	$('.four').on('click', function() {
		$('.choiceToAttack').append($('.four'));
		secondPlayer = voldemort;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});	
});

// Voldemort as First Player
$('.four').on('click', function() {

	if (!firstPlayer) {
		$('.playersChoice').append($('.four'));

// Move other characters to enemies station
		$('.enemies').append($('.one'));
		$('.enemies').append($('.two'));
		$('.enemies').append($('.three'));
		firstPlayer = voldemort;
	}

// move enemies to choiceToAttack div on screen
	// will move Harry Potter
	$('.one').on('click', function() {
		$('.choiceToAttack').append($('.one'));
		secondPlayer = harryPotter; 
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});

	// will move Dumbledore
	$('.two').on('click', function() {
		$('.choiceToAttack').append($('.two'));
		secondPlayer = dumbledore;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});

	// will move Voldemort
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});	
});	

// Attack function
$('.attackButton').on ('click', function() {
	//Takes hp away from second player when attack button is clicked
   	secondPlayer.hp -= firstPlayer.attack; 
   	//Add the first players attack to itself to continually increase each time attack button is clicked
 	firstPlayer.attack += firstPlayer.attack;
 	//takes hp away from first play due to second players counter attack when the attack button is clicked
    firstPlayer.hp -= secondPlayer.counter;
    //Shows the hp for the first and second players on the webpage
    $('.hpFirstPlayer').html(firstPlayer.hp);
    $('.hpSecondPlayer').html(secondPlayer.hp);
    
// This removes harry potter from defender box if he is second player and has an hp of 0 and below
    	if (secondPlayer == harryPotter && secondPlayer.hp <= 0){
    		$('.one').remove();
    	}
// This removes dumbledore from defender box if he is second player and has an hp of 0 and below
    	else if (secondPlayer == dumbledore && secondPlayer.hp <= 0){
    		$('.two').remove(); 
    	}
// This removes bellatrix from defender box if he is second player and has an hp of 0 and below
    	else if (secondPlayer == bellatrix && secondPlayer.hp <= 0){
    		$('.three').remove();
   		}
// This removes voldemort from defender box if he is second player and has an hp of 0 and below
    	else if (secondPlayer == voldemort && secondPlayer.hp <= 0){
    		$('.four').remove();
   		}
// If first players hp goes to 0 the screen appears with You Lose!
   		if (firstPlayer.hp <= 0){
   			$('.playersChoice').append('You Lose!');
   		}
});

// Reset button - reload entire webpage by clicking on this button 
$('[data-command="reset"]').click(function () {    
    window.location.href = window.location.href;
});