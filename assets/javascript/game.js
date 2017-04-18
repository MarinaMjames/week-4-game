
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
	attack: 6,
	counter: 10, 
};

var bellatrix = {
	hp: 110, 
	attack: 7, 
	counter: 9, 
};

var voldemort = {
	hp: 170, 
	attack: 12, 
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
	});
	// Bellatrix
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
	});
	// Voldemort
	$('.four').on('click', function() {
		$('.choiceToAttack').append($('.four'));
		secondPlayer = voldemort;
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
	});
	// Bellatrix
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
	});
	// Voldemort
	$('.four').on('click', function() {
		$('.choiceToAttack').append($('.four'));
		secondPlayer = voldemort;
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
	});
	// Dumbledore
	$('.two').on('click', function() {
		$('.choiceToAttack').append($('.two'));
		secondPlayer = dumbledore;
	});
	// Voldemort
	$('.four').on('click', function() {
		$('.choiceToAttack').append($('.four'));
		secondPlayer = voldemort;
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
	});
	// Dumbledore
	$('.two').on('click', function() {
		$('.choiceToAttack').append($('.two'));
		secondPlayer = dumbledore;
	});
	// Voldemort
	$('.three').on('click', function() {
		$('.choiceToAttack').append($('.three'));
		secondPlayer = bellatrix;
	});	
});	
// Attack function
    $('.attackButton').on ('click', function() {
    	secondPlayer.hp -= firstPlayer.attack; 
 		firstPlayer.attack += firstPlayer.attack;
    	firstPlayer.hp -= secondPlayer.counter;

	});






//click attack button (button didn't work before)



//click attack damage defender, opponent loses HP, points at bottom of pic change

//opponent counter attacks, players character loses HP, points at bottom of pic change

//defender HP = 0, remove from defender area

//player chooses new opponent

//player wins by defeating all opponents

//player loses if HP goes to 0 or below