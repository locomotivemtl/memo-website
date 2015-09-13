// ==========================================================================
// Globals
// ==========================================================================
var app = window.app || {};

app.globals = {

    init : function() {

    	app.scrollto.init();

    	$(window).load(function() {
    		app.animations.init();
    	});

    }

};
