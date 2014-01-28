# Homework 2.1 - Ever wonder what all these signs say?

For Homework 1.1, you found a nice project on Github, forked it into your own account, and cloned it into your Cloud 9 IDE account. For this assignment, pick one or more Javascript files from your project (you DID pick a Javascript project, didn't you?) and identify some of the following items of Javascript grammar and vocabulary that we talked about in class, including but not limited to:

* Variables: `$name`
* Constants: `E_USER_WARNING`, `MY_AWESOME_CONSTANT`
* Arithmetic operators: addition (+), subtraction (-)
* Functions: `array_slice()`, `do_something_amazing()`

When you find one, identify the file and line number in this file, below the instrcutions per the example below. Try to make the indentation match the original file (yes, copy and paste), even if that means there's NO indentation. Crazy Javascript-ers.

You don't have to identify EVERYTHING in a given line or even in a single file, but you may get extra points if you're thorough or make a survey of more than one file... And you might get docked if you make too much work for me. I at least want to see about 50 lines of code.

When you're done editing this file, save it, commit it, and push it to your "assignments" repo, called "origin". You remember how to push, right?

## Your work should look like this...

`path/to/file.js:3`
```javascript
    if ( true )
    // Boolean: true
```

`path/to/file.js:42`
```javascript
    var name = do_something_amazing() + 1;
    // Variable: name
    // Function: do_something_amazing()
    // Integer: 1
```

## Now get to it!

Code from annyang.js

// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
  var optionalParam = /\s*\((.*?)\)\s*/g;
  var optionalRegex = /(\(\?:[^)]+\))\?/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#]/g;
  var commandToRegExp = function(command) {
    command = command.replace(escapeRegExp, '\\$&')
                  .replace(optionalParam, '(?:$1)?')
                  .replace(namedParam, function(match, optional) {
                    return optional ? match : '([^\\s]+)';
                  })
                  .replace(splatParam, '(.*?)')
                  .replace(optionalRegex, '\\s*$1?\\s*');
    return new RegExp('^' + command + '$', 'i');
  };

  // This method receives an array of callbacks to iterate over, and invokes each of them
  var invokeCallbacks = function(callbacks) {
    callbacks.forEach(function(callback) {
      callback.callback.apply(callback.context);
    });
  };

  var initIfNeeded = function() {
    if (!isInitialized()) {
      root.annyang.init({}, false);
    }
  };

  var isInitialized = function() {
    return recognition !== undefined;
  };

  root.annyang = {
    // Initialize annyang with a list of commands to recognize.
    // e.g. annyang.init({'hello :name': helloFunction})
    // annyang understands commands with named variables, splats, and optional words.
    init: function(commands, resetCommands) {

      // resetCommands defaults to true
      if (resetCommands === undefined) {
        resetCommands = true;
      } else {
        resetCommands = !!resetCommands;
      }

      // Abort previous instances of recognition already running
      if (recognition && recognition.abort) {
        recognition.abort();
      }

      // initiate SpeechRecognition
      recognition = new SpeechRecognition();

      // Set the max number of alternative transcripts to try and match with a command
      recognition.maxAlternatives = 5;
      recognition.continuous = true;
      // Sets the language to the default 'en-US'. This can be changed with annyang.setLanguage()
      recognition.lang = 'en-US';
