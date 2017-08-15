/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        src: 'public/js/app/*.js',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        src: 'public/js/zorus.js',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        src: 'public/components/bootbox.js/bootbox.js',
                        ext: '.min.js'
                    }
                ]
            }
        },
        watch: {
            cssmin: {
                files: ['public/css/*.css', '!public/css/*.min.css'],
                tasks: ['cssmin']
            },
            concat: {
                files: '<%= concat.dist.src >',
                tasks: ['concat']
            },
            uglify: {
                files: ['public/js/app/*.js', 'public/js/zorus.js', 'public/components/bootbox.js/bootbox.js'],
                tasks: ['uglify']
            }
        },
        cssmin: {
            bootstrap: {
                src: 'Coralite/static/css/bootstrap.css',
                dest: 'Coralite/static/css/bootstrap.min.css'
            },
            defaultSkin: {
                src: 'Coralite/static/css/default-skin.css',
                dest: 'Coralite/static/css/default-skin.min.css'
            },
            styleMobile: {
                src: 'Coralite/static/css/style-mobile.css',
                dest: 'Coralite/static/css/style-mobile.min.css'
            },
            styleNarrow: {
                src: 'Coralite/static/css/style-narrow.css',
                dest: 'Coralite/static/css/style-narrow.min.css'
            },
            styleNarrower: {
                src: 'Coralite/static/css/style-narrower.css',
                dest: 'Coralite/static/css/style-narrower.min.css'
            },
            styleNormal: {
                src: 'Coralite/static/css/style-normal.css',
                dest: 'Coralite/static/css/style-normal.min.css'
            },
            styleWide: {
                src: 'Coralite/static/css/style-wide.css',
                dest: 'Coralite/static/css/style-wide.min.css'
            },
            style: {
                src: 'Coralite/static/css/style.css',
                dest: 'Coralite/static/css/style.min.css'
            }
        }


    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin', /*'jshint',*/ 'concat', 'uglify', 'watch']);

};