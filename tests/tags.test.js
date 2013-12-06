//
// nodeunit tests for tags task
//

var grunt = require('grunt');

module.exports = {
    sortJSON: function (test) {
        test.expect(1);

        var expect = grunt.file.read('tests/expect/file.json');
        var result = grunt.file.read('tests/results/file.json');
        test.equal(expect, result, 'should process a basic sortJSON task');

        test.done();
    }
};