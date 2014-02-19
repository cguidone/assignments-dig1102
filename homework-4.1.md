`/cguidone/annyang/annyang.js:26`
```javascript
    // Creating an array for variable commandsList
    var commandsList = [];
```

`/cguidone/annyang/annyang.js:28`
```javascript
    // Variable callbacks is created, new arrays are built inside of the array callbacks
    var callbacks = { start: [], error: [], end: [], result: [], resultMatch: [], resultNoMatch: [], errorNetwork: [], errorPermissionBlocked: [], errorPermissionDenied: [] };
```

`/cguidone/annyang/annyang.js:133`
```javascript
    // Array results[i]
    commandText = results[i].transcript.trim();
```

`/cguidone/annyang/annyang.js:145`
```javascript
    // Varaible result created, Array commandsList[j]
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

`/cguidone/annyang/annyang.js:155`
```javascript
    // Build array commandsList
    commandsList = [];
```

`/cguidone/annyang/annyang.js:155`
```javascript
    commandsList.push({ command: command, callback: cb, originalPhrase: phrase });
```
