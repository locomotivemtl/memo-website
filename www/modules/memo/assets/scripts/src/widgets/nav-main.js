// ==========================================================================
// Nav main
// ==========================================================================
var app = window.app || {};
app.widgets = app.widgets || {};

app.widgets.navMain = {

    init : function() {

    	$('.js-nav-button').click(function(event) {
    		$('body').toggleClass('has-nav-open');
    	});

    }

};
