`/cguidone/jquery/src/selector-native.js:38-41`

```javascript
        // if a is exactly equal to b then selector_hasDuplicate is true
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
			// if compare and 1 are ture then run next if
			if ( compare & 1 ) {

				// Choose the first element that is related to our document
				// if a is exactly equal to document or if jQuery.contains(document, a) is true
				// then return -1
				if ( a === document || jQuery.contains(document, a) ) {
					return -1;
				}
				// if b is exactly equal to document or if jQuery.contains(document, b) is true
				// then return 1
				if ( b === document || jQuery.contains(document, b) ) {
					return 1;
				}

				// Maintain original order
				// if neither the two if statements above are true return 0
				return 0;
			}
            // if compare & 1 are not true return compare & 4 ? -1 : 1
			return compare & 4 ? -1 : 1;
		}
```

`/cguidone/jquery/src/selector-native.js:77-79`

```javascript
        // if selector is a string or typeof selector is not a string 
        // returns results
		if ( !selector || typeof selector !== "string" ) {
			return results;
		}
```

`/cguidone/jquery/src/selector-native.js:82-84`

```javascript
        // if context.nodeType is not equal to 1 and nodeType is not equal to 9
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
		// if seed is false
		// then exectue jQuery.merge( results, context.querySelectorAll(selector)
		} else {
			jQuery.merge( results, context.querySelectorAll(selector) );
		}
```

`/cguidone/jquery/src/selector-native.js:107-116`

```javascript
        // if selector_hasDuplicate is true then run both while loops
		if ( selector_hasDuplicate ) {
			while ( (elem = results[i++]) ) {
			    // if elem is exactly equal to the array results[i]
			    // then j = duplicates.push( i )
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
```

`/cguidone/jquery/src/selector-native.js:126-137`

```javascript
        // if nodeType is false then proceed to while loop
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
	    // if nodeType is true test if nodeType is exactly equal to 1 or 9 or 11 then
	    // returns elem.textContent
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			return elem.textContent;
		// if nodeType is true test if nodeType is exacly equal to 3 or 4 then
		// returns elem.nodeValue
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
```