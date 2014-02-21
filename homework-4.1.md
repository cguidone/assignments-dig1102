`/cguidone/annyang/annyang.js:26`
```javascript
    // Creating an array for variable commandsList
    var commandsList = [];
```

`/cguidone/annyang/annyang.js:28`
```javascript
    // Variable callbacks is created
    // Arrays are built inside of the array callbacks
    var callbacks = { start: [], error: [], end: [], result: [], resultMatch: [], resultNoMatch: [], errorNetwork: [], errorPermissionBlocked: [], errorPermissionDenied: [] };
```

`/cguidone/annyang/annyang.js:133`
```javascript
    // Array results[i]
    commandText = results[i].transcript.trim();
```

`/cguidone/annyang/annyang.js:145`
```javascript
    // Varaible result created
    // Array commandsList[j]
    var result = commandsList[j].command.exec(commandText);
```

`/cguidone/annyang/annyang.js:149`
```javascript
    // Array commandsList[j]
    root.console.log('command matched: %c'+commandsList[j].originalPhrase, debugStyle);
```

`/cguidone/annyang/annyang.js:155`
```javascript
    // Array commandsList[j]
    ommandsList[j].callback.apply(this, parameters);
```

`/cguidone/annyang/annyang.js:167`
```javascript
    // resets array commandsList
    commandsList = [];
```

`/cguidone/annyang/annyang.js:223`
```javascript
    // Array inside an array
    // || or
    // Variable cb
    cb = root[commands[phrase]] || commands[phrase];
```

`/cguidone/annyang/annyang.js:230`
```javascript
    // Push commandsList add everything in array { command: command, callback: cb, originalPhrase: phrase } to tail end of list
    commandsList.push({ command: command, callback: cb, originalPhrase: phrase });
```

`/cguidone/annyang/annyang.js:240`
```javascript
    // Array.isArray(commandsToRemove)
    commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
```

`/cguidone/annyang/annyang.js:243`
```javascript
    // Array commandsToRemove[i]
    // if conditional statement
    if (commandsToRemove[i] === command.originalPhrase) {
```

`/cguidone/annyang/annyang.js:255`
```javascript
    // Array callbacks[type]
    // undefined
    // if conditional statement
    if (callbacks[type]  === undefined) {
```

`/cguidone/annyang/annyang.js:262`
```javascript
    // Array callbacks[type]
    // push - add everything in array {callback: cb, context: context || this} to tail end of list
    callbacks[type].push({callback: cb, context: context || this});
```