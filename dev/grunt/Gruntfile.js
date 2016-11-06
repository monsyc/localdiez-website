module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      purifycss: {
        options: {},
        target: {
          src: ['../architecture.html', 
          '../js/jquery-1.11.3.min.js',
          '../js/bootstrap.min.js',
          '../js/arquitectura.js'],
          css: ['../css/bootstrap.css',
          '../css/style.css',
          '../css/style2.css',
          '../css/style3.css'],
          dest: '../grunt/tmp/architecture.css'
        },
      },
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: '../grunt/tmp',
            src: ['architecture.css'],
            dest: '../../stg/css',
            ext: '.min.css'
          }]
        }
      },
      uglify: {
        my_target: {
          files: {
            '../../stg/js/architecture.min.js': [ '../js/menu.js', 
                                                  '../js/jquery-1.11.3.min.js',
                                                  '../js/bootstrap.min.js',
                                                  '../js/arquitectura.js']
          }
        }
      }, 
      processhtml: {
        options: {},
        dist: {
          files: {
            'tmp/architecture.html': ['../architecture.html']
          }
        }
      },
      htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            '../../stg/architecture.html': 'tmp/architecture.html' //,     // 'destination': 'source'
            /* 'dist/contact.html': 'src/contact.html'*/
          }
        }
      },
      imagemin: {
        dynamic: {                         // Another target
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: '../',                   // Src matches are relative to this path
            src: [  '**/*.{png,jpg,gif,svg}', '!grunt/**'],   // Actual patterns to match
            dest: '../../stg/'                  // Destination path prefix
          }]
        }
      },
    });

    // Load the plugin that provides the "purifycss" task.
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['purifycss','cssmin','uglify', 'processhtml', 'htmlmin', 'imagemin']);

};