var sourcemap = Npm.require('source-map');

var handler = function (compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";

  try {
    var output = Opal.compile(source);
  } catch (e) {
    throw new Error(
      compileStep.inputPath + ':' +
      (e.location ? (e.location.first_line + ': ') : ' ') +
      e.message
    );
  }

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: output,
    bare: compileStep.fileOptions.bare
  });
}

Plugin.registerSourceHandler("rb", handler);
Plugin.registerSourceHandler("js.rb", handler);
