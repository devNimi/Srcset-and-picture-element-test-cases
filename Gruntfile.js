module.exports = function(grunt) {


  grunt.initConfig({
    // WebP configuration
    webp: {
      files: {
        //expand: true,
        //cwd: 'path/to/source/images',
        src: 'images/*.jpg',
        dest: 'images/webp_grunt/'
      },
      options: {
        binpath: require('webp-bin').path,
        preset: 'photo',
        verbose: true,
        quality: 80,
        alphaQuality: 80,
        compressionMethod: 6,
        segments: 4,
        psnr: 42,
        sns: 50,
        filterStrength: 40,
        filterSharpness: 3,
        simpleFilter: true,
        partitionLimit: 50,
        analysisPass: 6,
        multiThreading: true,
        lowMemory: false,
        alphaMethod: 0,
        alphaFilter: 'best',
        alphaCleanup: true,
        noAlpha: false,
        lossless: false
      }
    }

  });

  // load npm task
  grunt.loadNpmTasks('grunt-webp');

  // register task
  grunt.registerTask('default', 'webp');

};