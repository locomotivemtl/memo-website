// ==========================================================================
// Globals
// ==========================================================================
var app = window.app || {};

app.globals = {

    init : function() {

    	app.svgs.init();
    	app.scrollto.init();

    	$(window).load(function() {
    		app.animations.init();
    	});

    }

};
