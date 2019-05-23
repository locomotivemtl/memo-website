// ==========================================================================
// Aniamtions
// ==========================================================================
var app = window.app || {};

app.animations = {

    init : function() {

       var wow = new WOW (
		  {
		    boxClass:     'js-wow',
		    animateClass: 'is-animated'
		  }
		);
		wow.init();

    }

};
