module.exports = function(grunt) {

  grunt.initConfig({
    jsDir: 'public/javascripts/',
    jsDistDir: 'dist/javascripts/',    
    cssDir: 'public/stylesheets/',
    cssDistDir: 'dist/stylesheets/',
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      test: {
        src: 'public/javascripts/*.js',
        options: {
          specs: 'specs/*.spec.js',
          vendor: [
          "dist/vendor/jquery/jquery-1.11.0.min.js"
          ]
        }
      }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['<%=jsDir%>*.js'],
        dest: '<%=jsDistDir%><%= pkg.name %>.js'
      },
      css: {
        src: ['<%=cssDir%>*.css'],
        dest: '<%=cssDistDir%><%= pkg.name %>.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%=jsDistDir%><%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          '<%=cssDistDir%><%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
        }
      }
    },
    watch: {
      files: ['<%=jsDir%>*.js', '<%=cssDir%>*.css' ],
      tasks: ['concat', 'uglify', 'cssmin']
    }     
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
  grunt.registerTask('default', [
    'concat',
    'uglify',
    'cssmin'
  ]);
  
};