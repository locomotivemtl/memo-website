module.exports = {
	dev: {
		bsFiles: {
			src : [
				 'www/modules/memo/assets/styles/dist/*.css'
				,'www/modules/memo/assets/scripts/dist/*.js'
				,'**/*.php'
			]
		},
		options: {
			proxy: "memo-website.test",
			watchTask: true,
			notify: false
		}
	}
}
