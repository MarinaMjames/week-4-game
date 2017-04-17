
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

	// if {
 //        var player1 = $('.one');
 //        $('.one').clone().appendTo('.playersChoice');
 //        $('.players .one').remove();
       
    
	// if ($('.two').html() == 'Dumbledore'){
 //        var player2 = $('.two');
 //        $('#playersChoice').append(player2);
    

 //        console.log("Player 2 was clicked!");
   
	// if($('.three').html() == '.three'){
 //        var player3 = $('.three');
 //        $('#playersChoice').append(player3);
        
    
	// if($('.four').html() == '.four'){
 //        var player4 = $('.four');
 //        $('#playersChoice').append(player4);
        

	// }
	// }
	// }
	// }
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