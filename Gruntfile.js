module.exports = function ( grunt ) {
  'use strict';

  require( 'time-grunt' )( grunt );

  require( 'jit-grunt' )(
    grunt, {
      scsslint: 'grunt-scss-lint'
    }
  );

  grunt.initConfig(
    {

      pkg: grunt.file.readJSON( 'package.json' ),

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
            'scsslint'
          ]
        }
      }
    }
  );

  grunt.registerTask( 'default', [ 'watch' ] );
};