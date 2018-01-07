module.exports = function ( grunt ) {
  'use strict';


  require( 'jit-grunt' )( grunt );

  grunt.initConfig( {
                      pkg: grunt.file.readJSON( 'package.json' ),

                      sass: {
                        options: { outputStyle: 'expanded' },

                        testing: {
                          files: [
                            {
                              expand: false,
                              src:    [
                                'tackle-box.scss',
                              ],
                              dest:   'test.css',
                            }
                          ],
                        },
                      },

                      scsslint: {
                        report: {
                          options: {
                            config:         '.scss-lint.yml',
                            reporterOutput: null,
                          },
                          files:   [
                            {
                              src: [
                                '_tackle-box.scss', 'tackle/*.scss',
                              ]
                            }
                          ]
                        }
                      },

                      watch: {
                        scss: {
                          files: [
                            '**/*.scss'
                          ],
                          tasks: [
                            'testSCSS'
                          ]
                        }
                      }
                    } );

  grunt.registerTask( 'testSCSS', [
    'sass', //
  ] );

  grunt.registerTask( 'default', [ 'watch' ] );
};