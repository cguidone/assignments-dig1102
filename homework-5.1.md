`/cguidone/jquery/src/selector-native.js:38-41`

```javascript
        // if a is exactly equal to b the selector_hasDuplicate is equal to true
        // returns 0
		if ( a === b ) {
			selector_hasDuplicate = true;
			return 0;
		}
```

`/cguidone/jquery/src/selector-native.js:45-62`

```javascript
        // if compare is true then run next if
		if ( compare ) {
			// Disconnected nodes
			// if compare and 1 is ture then run next if
			if ( compare & 1 ) {

				// Choose the first element that is related to our document
				// if a is exactly equal to document or if jQuery.contains(document, a) is true
				// then return -1
				if ( a === document || jQuery.contains(document, a) ) {
					return -1;
				}
				// if b is exactly equal to document or if jQuery.contains(document, a) is true
				// then return 1
				if ( b === document || jQuery.contains(document, b) ) {
					return 1;
				}

				// Maintain original order
				return 0;
			}

			return compare & 4 ? -1 : 1;
		}
```

`/cguidone/jquery/src/selector-native.js:77-79`

```javascript
        // if selector or type of selector is not a string 
        // return results
		if ( !selector || typeof selector !== "string" ) {
			return results;
		}
```

`/cguidone/jquery/src/selector-native.js:82-84`

```javascript
        // if context.nodeType is not equal 1 and nodeType not equal to 9
        // return an array
		if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
			return [];
		}
```

`/cguidone/jquery/src/selector-native.js:86-94`

```javascript
        // if seed is true then run while loop
		if ( seed ) {
			while ( (elem = seed[i++]) ) {
			    // if jQuery.find.matchesSelector(elem, selector) is true
			    // then execute results.push(elem)
				if ( jQuery.find.matchesSelector(elem, selector) ) {
					results.push( elem );
				}
			}
			// if jQuery.find.matchesSelector(elem, selector) is false
			// then exectue jQuery.merge( results, context.querySelectorAll(selector)
		} else {
			jQuery.merge( results, context.querySelectorAll(selector) );
		}
```