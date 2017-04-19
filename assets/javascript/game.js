
// var firstPlayerFlag = 0; 
var firstPlayer;

var secondPlayer; 

var harryPotter = {
	hp: 180,
	attack: 10,
	counter: 20, 
};

var dumbledore = {
	hp: 130,
	attack: 10,
	counter: 10, 
};

var bellatrix = {
	hp: 110, 
	attack: 10, 
	counter: 9, 
};

var voldemort = {
	hp: 170, 
	attack: 10, 
	counter: 20, 
};


//Created on click functions for each character in order to pick the players character and move the other characters to the attack div

// On Click function to choose player one and move all other plays to choicetoattack

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
	// Dumbledore
	$('.two').on('click', function() {
		$('.choiceToAttack').append($('.two'));
		secondPlayer = dumbledore; 
	$('.hpSecondPlayer').html(secondPlayer.hp);
	});
	// Bellatrix
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
	$('.hpSecondPlayer').html(secondPlayer.hp);
	});
	// Voldemort
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
	// Harry Potter
	$('.one').on('click', function() {
		$('.choiceToAttack').append($('.one'));
		secondPlayer = harryPotter; 
		// secondPlayer.hp = harryPotter.hp;
    $('.hpSecondPlayer').html(secondPlayer.hp);

	});
	// Bellatrix
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});
	// Voldemort
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
	// Harry Potter
	$('.one').on('click', function() {
		$('.choiceToAttack').append($('.one'));
		secondPlayer = harryPotter; 
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});
	// Dumbledore
	$('.two').on('click', function() {
		$('.choiceToAttack').append($('.two'));
		secondPlayer = dumbledore;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});
	// Voldemort
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
	// Harry Potter
	$('.one').on('click', function() {
		$('.choiceToAttack').append($('.one'));
		secondPlayer = harryPotter; 
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});
	// Dumbledore
	$('.two').on('click', function() {
		$('.choiceToAttack').append($('.two'));
		secondPlayer = dumbledore;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});
	// Voldemort
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
		$('.hpSecondPlayer').html(secondPlayer.hp);
	});	
});	
// Attack function
$('.attackButton').on ('click', function() {
   	secondPlayer.hp -= firstPlayer.attack; 
 	firstPlayer.attack += firstPlayer.attack;
    firstPlayer.hp -= secondPlayer.counter;
    $('.hpFirstPlayer').html(firstPlayer.hp);
    $('.hpSecondPlayer').html(secondPlayer.hp);
    	
    	if (secondPlayer == harryPotter && secondPlayer.hp <= 0){
    		$('.one').remove();
    		// $(firstPlayer.attack) = 10; 
    		// $firstPlayer.attack.delete();
    	}
    	else if (secondPlayer == dumbledore && secondPlayer.hp <= 0){
    		$('.two').remove(); 
    		// $(firstPlayer.attack) == 10; 
    		// $($(firstPlayer.attack:reset));
    		// $('.attackButton').clear();
    	}
    	else if (secondPlayer == bellatrix && secondPlayer.hp <= 0){
    		$('.three').remove();
    		// $(firstPlayer.attack) == 10; 
    		// $($(firstPlayer.attack:reset));
    		// $('.attackButton').clear();
   		}
    	else if (secondPlayer == voldemort && secondPlayer.hp <= 0){
    		$('.four').remove();
    		// $(firstPlayer.attack) == 10; 
    		// $($(firstPlayer.attack:reset));
    		// $('.attackButton').clear();
   		}

   		if (firstPlayer.hp <= 0){
   			$('.playersChoice').append('You Lose!');
   		}
});

$('.resetButton').on('click', function() {

});

//player loses if HP goes to 0 or below