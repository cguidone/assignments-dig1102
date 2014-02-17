`/cguidone/annyang/annyang.js:26`
```javascript
  // Creating an array for variable commandsList
  var commandsList = [];
```

`/cguidone/annyang/annyang.js:28`
```javascript
  // Variable callbacks is created, arrays inside an array
  var callbacks = { start: [], error: [], end: [], result: [], resultMatch: [], resultNoMatch: [], errorNetwork: [], errorPermissionBlocked: [], errorPermissionDenied: [] };
```

`/cguidone/annyang/annyang.js:133`
```javascript
          commandText = results[i].transcript.trim();
```

`/cguidone/annyang/annyang.js:145`
```javascript
            var result = commandsList[j].command.exec(commandText);
```