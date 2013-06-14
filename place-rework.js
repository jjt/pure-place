module.exports = function(grunt) {
  var _ = grunt.util._;
  var rework = require('rework');
  var JSON = require('JSON');
    var options = grunt.options();
    options.toString = options.toString || {};
    options.use = options.use || [];
    options.vendors = options.vendors || [];

    grunt.verbose.writeflags(options, 'Options');

    var async = grunt.util.async;
    var done = grunt.async();

    async.forEach(grunt.files, function(file, next) {
      var src = _.isFunction(file.src) ? file.src() : file.src;
      var srcFiles = grunt.file.expand(src);

      async.forEach(srcFiles, function(srcFile, nextF) {
        var srcCode = grunt.file.read(srcFile);
        var css = rework(srcCode).vendors(options.vendors);

        options.use.forEach(function (e) {
          var fnName = e.shift();
          var fnArgs = e.map(function (arg) {
            return JSON.stringify(arg);
          }).join(', ');
          css.use(eval(fnName + '(' + fnArgs + ')'));
        });

        // generate file to string
        var res = css.toString(options.toString);

        var dest = _.isFunction(options.processName) ?
          options.processName(srcFile, res) : file.dest;
        grunt.file.write(dest, res);
        grunt.log.writeln('File "' + dest + '" created.');
        nextF();
      }, next);
    }, done);
}
