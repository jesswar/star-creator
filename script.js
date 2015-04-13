
10 / ( 2 - 5 )* 2


 $(document).ready(function() {
        var numberElement = $('#number');
        var submit = $('#submit');

        var windowWidth;
    	var windowHeight;

    	var shootOutStar = function ( star ) {
    		var starTime = Math.random() * 4000;
    		setTimeout(function() {
    			star.className += ' is-animating';
    			var x = ( Math.random() * windowWidth ) - ( windowWidth / 2 );
    			var y = ( Math.random() * windowHeight ) - ( windowHeight / 2 );
    			star.style.transform= 'translate3d(' + x + 'px,' + y + 'px, 0 )';
    		}, starTime );

    	}
    
        var createStars = function() {
        	var numberOfStars = numberElement.val();
        	

	        for( var black = 0; black < numberOfStars; black++) {
	        	var aStar = document.createElement('div');
        		aStar.className='star';

	        	windowWidth = window.innerWidth;
	    		windowHeight = window.innerHeight;

	    		var x = windowWidth / 2;
	    		var y = windowHeight / 2;


	    		var starTop = y + 'px';
	    		var starLeft = x + 'px';


	    		aStar.style.top= starTop;
	    		aStar.style.left= starLeft;

	    		document.body.appendChild( aStar );
	    		shootOutStar( aStar );

	    	}
        }

        submit.on('click', function() {
        	createStars();



            //alert(number.val());
        
        });
  });





/*
	$('#submit').on('click', function() {
		alert('you clicked');
	});
});

*/