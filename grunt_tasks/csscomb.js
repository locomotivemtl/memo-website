module.exports = {
	options: {
		config: '.csscomb.json'
	},
	build: {
		expand: true,
		cwd: 'www/modules/memo/assets/styles/src/',
		src: ['**/*.scss', '!base/_fonts.scss'],
		dest: 'www/modules/memo/assets/styles/src/'
	}
}
