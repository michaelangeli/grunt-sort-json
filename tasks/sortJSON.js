'use strict';

module.exports = function (grunt) {

    /**
     * recursive sorting of object
     *
     * @method recursiveSort
     * @param {Object} obj
     * @return {Object} sortedObject
     */
    function recursiveSort (obj) {
        var orderedAttributes = Object.keys(obj).sort();
        var newObject = {};
        var i;

        for (i = 0; i < orderedAttributes.length; i++) {
            newObject[orderedAttributes[i]] = obj[orderedAttributes[i]];

            // if it's an object, sort it!
            if (typeof obj[orderedAttributes[i]] === 'object') {
                newObject[orderedAttributes[i]] = recursiveSort(newObject[orderedAttributes[i]]);
            }
        }

        return newObject
    }

    /**
     * sort the give source file and rewrite its contents
     *
     * @method sortFile
     * @param {String} file Path to source file
     */
    function sortFile (file) {
        var fileContents = grunt.file.readJSON(file);
        var sortedObject = recursiveSort(fileContents);

        grunt.file.write(file, JSON.stringify(sortedObject, null, 4));
    }

    //
    // register tags grunt task
    //
    grunt.registerMultiTask('sortJSON', 'A grunt task for alphabetizing json files', function () {
        this.filesSrc.forEach(function (file) {
            sortFile(file);
        });
    });
};