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

`/cguidone/annyang/annyang.js:1`
```javascript
//! annyang
// Comments
```

`/cguidone/annyang/annyang.js:10`
```javascript
var root = this;
// Variable: root
```

`/cguidone/annyang/annyang.js:13-17`
```javascript
  var SpeechRecognition = root.SpeechRecognition ||
                          root.webkitSpeechRecognition ||
                          root.mozSpeechRecognition ||
                          root.msSpeechRecognition ||
                          root.oSpeechRecognition;
   // Variable: SpeechRecognition
   // Conditional Operator: || or
```

`/cguidone/annyang/annyang.js:21-24`
```javascript
  if (!SpeechRecognition) {
  // Boolean: if()
    root.annyang = null;
    // null
    return undefined;
    // undefined
  }
```

`/cguidone/annyang/annyang.js:26`
```javascript
  var commandsList = [];
  // Variable: commandsList
  // Array: []
```

`/cguidone/annyang/annyang.js:27`
```javascript  
  var recognition;
  // Variable: recognition
```

`/cguidone/annyang/annyang.js:31`
```javascript  
  var debugState = false;
  // Variable: debugState
  // Boolean: False
```

`/cguidone/annyang/annyang.js:48`
```javascript  
      return new RegExp('^' + command + '$', 'i');
      // Function: RegExp('^' + command + '$', 'i')
      // Operator: + addition
```

`/cguidone/annyang/annyang.js:52-56`
```javascript  
  var invokeCallbacks = function(callbacks) {
  // Variable: invokeCallbacks
  // Function: function(callbacks)
    callbacks.forEach(function(callback) {
    // Function: function inside function callbacks.forEach(function(callback)
      callback.callback.apply(callback.context);
      // Function: callback.callback.apply(callback.context)
    });
  };
```

`/cguidone/annyang/annyang.js:58-62`
```javascript  
  var initIfNeeded = function() {
  // Variable: initIgNeeded
  // Function: function()
    if (!isInitialized()) {
    // Boolean: if (!isInitialized())
    // Function: !isInitialized()
      root.annyang.init({}, false);
      // Function: root.annyang.init({}, false)
      // Boolean: False
    }
  };
```

`/cguidone/annyang/annyang.js:72`
```javascript  
    init: function(commands, resetCommands) {
    // Function: function(commands, resetCommands)
```

`/cguidone/annyang/annyang.js:75-79`
```javascript  
      if (resetCommands === undefined) {
      // Boolen: if (resetCommands === undefined)
      // Undefined
        resetCommands = true;
        // Boolean: true
      } else {
        resetCommands = !!resetCommands;
        // Boolean: else
      }
```

`/cguidone/annyang/annyang.js:82-84`
```javascript  
      if (recognition && recognition.abort) {
      // Boolean: if (recognition && recognition.abort)
      // Conditional Operator: && and
        recognition.abort();
        // Function: recognition.abort()
      }
```

`/cguidone/annyang/annyang.js:108-112`
```javascript  
          if (new Date().getTime()-lastStartedAt < 200) {
          // Boolean: if (new Date().getTime()-lastStartedAt < 200)
          // Function: new Date().getTime()
          // Operator: - subtraction
          // Operator: < less than
          // Integer: 200
            invokeCallbacks(callbacks.errorPermissionBlocked);
            // Function: invokeCallbacks(callbacks.errorPermissionBlocked)
          } else {
          // Boolean: else
            invokeCallbacks(callbacks.errorPermissionDenied);
            // Function: invokeCallbacks(callbacks.errorPermissionDenied)
          }
```

`/cguidone/annyang/Gruntfile.js:8-13`
```javascript  
      all: [
        'Gruntfile.js',
        'annyang.js',
        'sites/facebook.js',
        'sites/geektime.js',
      ],
      // Array: all: []
      // .js files
```

`/cguidone/annyang/Gruntfile.js:15`
```javascript  
        "node"      : true,
        // Boolean: true
```

`/cguidone/annyang/Gruntfile.js:39`
```javascript  
        "indent"    : 2
        // Interger: 2
```

`/cguidone/annyang/Gruntfile.js:15`
```javascript  
    watch: {
    // Function: watch
      files: ['annyang.js', 'sites/facebook.js', 'sites/geektime.js', 'demo/css/main.css', '!**/node_modules/**'],
      // Array: files: []
      // .js files
      // .css file
      tasks: ['default'],
      // Array: task: []
    },
```