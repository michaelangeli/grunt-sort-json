# grunt-sort-json [![Build Status](https://travis-ci.org/andrewjmead/grunt-sort-json.png)](https://travis-ci.org/andrewjmead/grunt-sort-json)

> A grunt task for alphabetizing JSON files

## Community

If you have any problems setting up or using `grunt-sort-json`, open an issue. I would be happy to help.

**This is an active repository** that takes user suggestions, feedback and pull requests seriously. Happy grunting!

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

	npm install grunt-sort-json --save-dev

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

	grunt.loadNpmTasks('grunt-sort-json');

## The "sortJSON" task

### Overview
In your project's Gruntfile, add a section named `sortJSON` to the data object passed into `grunt.initConfig()`.

	grunt.initConfig({
		sortJSON: {
			src: [
				'translations/english.json',
				'translations/french.json'
			]
		}
	});
	
### Usage Examples

#### Default Options

All you need to do is specify the files to alphabetize as the source files. 

	grunt.initConfig({
		sortJSON: {
			src: [
				'translations/english.json',
				'translations/french.json'
			]
		}
	});

**or**

	grunt.initConfig({
		sortJSON: {
			task: {
				src: [
					'translations/english.json',
					'translations/french.json'
				]
			}
		}
	});

### Before Sorting 

	{
	    "two": "2",
	    "one": "1",
	    "3": "three",
	    "4": {
	        "b": "b",
	        "a": "a"
	    }
	}

### After Sorting

	{
	    "3": "three",
	    "4": {
	        "a": "a",
	        "b": "b"
	    },
	    "one": "1",
	    "two": "2"
	}

## Run Tests

    > npm install
    > npm test

## Contributing
In lieu of a formal 	, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 2013-05-12   v0.0.1   First version!

---

Task submitted by [Andrew Mead](http://www.andrewjmead.com)
