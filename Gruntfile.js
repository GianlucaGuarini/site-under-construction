module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      js: {
        // watch all the changes in these files
        files: [
          'assets/js/**/*.js'
        ],
        // parse the index.html to get all the js files to compile
        // and then it puts the generated file into the dist folder
        tasks: ['jshint']
      },
      css: {
        // watch all the scss files
        files: [
          'assets/scss/**/*.scss',
        ],
        tasks: ['compass']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'assets/js/**/*.js']
    },
    clean: {
      build: {
        src: ['dist']
      },
      tmp: {
        src: ['.tmp']
      }
    },
    // copy all the useful files from the root to the dist folder
    copy: {
      main: {
        files: [{
          // take the only the folders needed on the production server from the assets folde
          expand: true,
          cwd: 'assets',
          src: ['css/**', 'img/**', 'fonts/**'],
          dest: 'dist/assets'
        }, {
          // take only the root files needed on the production server from the root
          expand: true,
          // exclude settings and config files
          src: ['*.!(json|rb|md|js)'],
          dest: 'dist',
          filter: 'isFile'
        }],
      }
    },
    // parse the file (or the files containing the js files to build)
    // remember to wrap all the js files to build inside an html comment
    //
    // <!-- build:js assets/js/main.min.js -->
    // <script src="js/app.js"></script>
    // <script src="js/controllers/thing-controller.js"></script>
    // <script src="js/models/thing-model.js"></script>
    // <script src="js/views/thing-view.js"></script>
    // <!-- endbuild -->
    //
    //  THIS will become ...
    //
    //                  |
    //                  |
    //                  |
    //                  |
    //                  |
    //                  V
    //
    // <script src="assets/js/main.min.js"></script>
    //
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },
    // replace the html build comments with the right build js script
    // see above..
    usemin: {
      html: ['dist/index.html']
    },

    // to generate all the favicons
    favicons: {
      options: {
        appleTouchBackgroundColor: '#ffffff',
        trueColor: true,
        html: 'assets/favicons/favicons.html'
      },
      icons: {
        src: 'assets/favicons/favicon-original.png',
        dest: 'assets/favicons/'
      }
    },
    // build the scss files reading the compass config
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['jshint', 'clean:build', 'copy', 'useminPrepare', 'concat', 'uglify', 'compass', 'usemin', 'clean:tmp']);

};