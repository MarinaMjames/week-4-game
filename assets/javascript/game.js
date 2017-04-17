
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

//on click choose character

$('.one').on('click', function() {
	$('.playersChoice').append($('.one'));

	console.log("Got a click on HP");

});	

$('.two').on('click', function() {
	$('.playersChoice').append($('.two'));

	console.log("Got a click on Dumbledore");

});	

$('.three').on('click', function() {
	$('.playersChoice').append($('.three'));

	console.log("Got a click on bellatrix");

});	

$('.four').on('click', function() {
	$('.playersChoice').append($('.four'));

	console.log("Got a click on voldemort");

});	


// Attack function
    $('#attackButton').on ('click', function() {
    	player1.hp -= harryPotter.counter;
		harryPotter.counter += harryPotter.counter;


	});


//move enemies to different div on screen (html)



//on click choose opponent - move to defender area



//click attack button (button didn't work before)



//click attack damage defender, opponent loses HP, points at bottom of pic change

//opponent counter attacks, players character loses HP, points at bottom of pic change

//defender HP = 0, remove from defender area

//player chooses new opponent

//player wins by defeating all opponents

//player loses if HP goes to 0 or below