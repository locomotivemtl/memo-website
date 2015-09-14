// ==========================================================================
// Scroll to
// ==========================================================================
var app = window.app || {};

app.scrollto = {

    init : function() {

    	$('.js-scrollto').click(function(event) {
    		event.preventDefault();

    		var $this = $(this);
    		var targetSection = $this.attr('href');
    		var speed = $(targetSection).offset().top * 0.4;

    		if (speed < 450) {
    			speed = 450;
    		} else if (speed > 1200) {
    			speed = 1200;
    		}

    		$('html, body').animate({
		        scrollTop: $(targetSection).offset().top
		    }, speed);

		    $('body').removeClass('has-nav-open');
    	});

    }

};
