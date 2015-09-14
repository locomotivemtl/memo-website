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

// ==========================================================================
// Generic template
// ==========================================================================
var app = window.app || {};
app.templates = app.templates || {};

app.templates.generic = {

    init : function() {

    }

};

// ==========================================================================
// Generic widget
// ==========================================================================
var app = window.app || {};
app.widgets = app.widgets || {};

app.widgets.generic = {

    init : function() {

    }

};

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

// ==========================================================================
// App
// ==========================================================================
var app = window.app || {};

app.init = function() {

	'use strict';

	var self = this;

	self.params = {

	};

	self.elements = {
		html : document.documentElement,
		body : document.body
	};

	self.templates = self.templates || {};

	self.widgets = self.widgets || {};

	// Globals
	// ==========================================================================
	if (typeof self.globals === 'object') {
		self.globals.init();
	}

	// Modules
	// ==========================================================================
	self.params.current_modules = [];

	var modules = document.querySelectorAll('[data-app]');
    for (var m = 0; m < modules.length; m++) {
        var dataApp = modules[m].getAttribute('data-app');
        if (typeof self[dataApp] === 'object' && self.params.current_modules.indexOf(dataApp) === -1) {
            self[dataApp].init();
            self.params.current_modules.push(dataApp);
        }
    }

	// Template
	// ==========================================================================
	self.params.current_template = self.elements.body.getAttribute('data-template');

	if (typeof self.templates[ self.params.current_template ] === 'object') {
		self.templates[ self.params.current_template ].init();
	}

	// Widgets
	// ==========================================================================
	self.params.current_widgets = [];

	var widgets = document.querySelectorAll('[data-widget]');
	for (var w = 0; w < widgets.length; w++) {
        var dataWidget = widgets[w].getAttribute('data-widget');
        if (typeof self.widgets[dataWidget] === 'object' && self.params.current_widgets.indexOf(dataWidget) === -1) {
            self.widgets[dataWidget].init();
            self.params.current_widgets.push(dataWidget);
        }
    }
};

// Init
// ==========================================================================
$(function() {
	app.init();
});
