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
   // Conditional Operator: ||
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

```javascript  
`/cguidone/annyang/annyang.js:27`
  var recognition;
  // Variable: recognition
```

```javascript  
`/cguidone/annyang/annyang.js:31`
  var debugState = false;
  // Variable: debugState
  // Boolean: False
```

```javascript  
`/cguidone/annyang/annyang.js:48`
      return new RegExp('^' + command + '$', 'i');
  // Function: RegExp('^' + command + '$', 'i')
  // Operator: addition
```

```javascript  
`/cguidone/annyang/annyang.js:52-56`
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