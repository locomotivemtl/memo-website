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
			proxy: "localhost:8888",
			watchTask: true,
			notify: false
		}
	}
}
