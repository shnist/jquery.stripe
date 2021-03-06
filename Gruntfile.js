module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('stripe.jquery.json'),
		jshint: {
			all: ['src/*.js', '!src/jquery-1.7.1.min.js'],
			options: {
				browser: true,
				bitwise: true,
				eqeqeq: true,
				undef: true,
				evil: true,
				devel: true
			},
			globals: {
				jQuery: true,
				Zepto: true,
				module: true
			}
		},
		uglify: {
			options: {
				banner: [
					'/**',
					'	jQuery Plugin .stripe( options )',
					'	@version  : <%= pkg.version %>',
					'	@author   : Bruce Thomas',
					'	@requires : jquery<%= pkg.dependencies.jquery %>',
					'	@github   : <%= pkg.docs %>',
					'*/',
					''
				].join('\n')
			},
			dist: {
				src: 'src/jquery.<%= pkg.name %>.js',
				dest: 'dist/jquery.<%= pkg.name %>.min.js'
			}
		},
		clean: ['dist'],
		copy: {
			main: {
				files: [
					{
						cwd: 'src/',
						expand: true,
						src: ['**'],
						dest: 'dist/'
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['jshint','clean','copy','uglify']);

};
