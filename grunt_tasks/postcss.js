module.exports = {
	postcss: {
    	options: {
	    	processors: [
				require('autoprefixer')({
					browsers: ['last 2 versions', '> 1%', 'ie >= 9']
				}),
			]
		},
		files: [
			{
				src : ['www/modules/memo/assets/styles/dist/*.css'],
				dest : 'www/modules/memo/assets/styles/dist/',
				expand : true,
				flatten : true
			}
		]
	}
}
