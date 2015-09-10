module.exports = {

	app: {
		src: [
			'www/modules/memo/assets/scripts/src/app/*.js',
			'www/modules/memo/assets/scripts/src/templates/*.js',
			'www/modules/memo/assets/scripts/src/widgets/*.js',
			'www/modules/memo/assets/scripts/src/app.js'
		],
		dest: 'www/modules/memo/assets/scripts/dist/app.js'
	},
	vendors: {
		src: [
			'www/modules/memo/assets/scripts/src/vendors/*.js'
		],
		dest: 'www/modules/memo/assets/scripts/dist/vendors.js'
	}

};
