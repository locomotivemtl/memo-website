module.exports = {
	target: {
		files: [{
			expand: true,
			cwd: 'www/modules/memo/assets/scripts/dist/',
			src: '**/*.js',
			dest: 'www/modules/memo/assets/scripts/dist/'
		}]
	}
}
