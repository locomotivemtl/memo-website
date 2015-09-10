module.exports = {
	javascript: {
		files: ['www/modules/memo/assets/scripts/src/**/*.js'],
		tasks: ['concat', 'notify:concat']
	},
	sass: {
		files: ['www/modules/memo/assets/styles/src/**/*.scss'],
		tasks: ['sass', 'postcss', 'notify:sass'],
		options: {
			spawn: false,
			livereload: true
		}
	},
	svg: {
		files: ['www/modules/memo/assets/images/**/*.svg'],
		tasks: ['svgstore', 'notify:svg']
	},
	tasks: {
		files: ['grunt_tasks/*.js'],
		options: {
			reload: true
		}
	}
}
