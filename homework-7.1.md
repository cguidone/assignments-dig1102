`/cguidone/jquery/serialize.js:15-41`

```javascript
// - Function buildParams is passed the arguments prefix, obj, traditional and add.
function buildParams( prefix, obj, traditional, add ) {
    // Scope var name
	var name;
	
    // - Function jQuery.isArray is passed the arguement obj.
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		// - Function inside a function. jQuery.each is passed the arguments obj and function (i, v).
		// - Function is passed the arguments i and v.
		jQuery.each( obj, function( i, v ) {
		    // - Function rbracket.test is passed arguement prefix.
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				// - Function add passed arguements prefix and v.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				// - Function buildParams is passed the arguments prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional and add.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});
		
	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
    		// - Function buildParams is passed the arguments prefix + "[" + name + "]", obj[ name ], traditional, and add.
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		// - Function add is passed the arguements prefix and obj
		add( prefix, obj );
	}
}
// - Nothing is returned in this function.
```

`/cguidone/jquery/serialize.js:45-76`

```javascript
// - jQuery.param is equal to a function which is passed the arguments a and traditional.
jQuery.param = function( a, traditional ) {
    // - Scope var prefix
	var prefix,

		s = [],
		// - add is equal to a function which is passed the arguments key and value
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		// - Function jQuery.each passed the arguements a and function()
		// - function() is not passed any arguements.
		jQuery.each( a, function() {
		    // Function add is passed the arguements this.name and this.value.
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
		    // - Function buildParams is passed arguements prefix, a[ prefix ], traditional, and add.
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	// - Returns s.join( "&" ).replace( r20, "+" )
	return s.join( "&" ).replace( r20, "+" );
};
```

`/cguidone/jquery/serialize.js:78-108`

```javascript
jQuery.fn.extend({
    // - Function is not passed any arguements
	serialize: function() {
	    // - Returns function jQuery.param which passed the arguement function this.serializedArray()
		return jQuery.param( this.serializeArray() );
	},
	// - Function is not passed any arguements
	serializeArray: function() {
	    // - Return this.map(function(), function is not passed any arguements
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			// - Scope variable elements
			var elements = jQuery.prop( this, "elements" );
			// - Returns elements ? jQuery.makeArray( elements ) : this
			return elements ? jQuery.makeArray( elements ) : this;
		})
		// - Function is not passed any arguements
		.filter(function() {
		    // - Scope variable type
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			// - Returns 
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		// - Function .map passed arguements function (i, elem) which arguements are i and elem
		.map(function( i, elem ) {
		    // - Scope variable val
			var val = jQuery( this ).val();
            // Returns val which is null
			return val == null ?
				null :
				// - Function jQuery.isArray which is passed arguement val
				jQuery.isArray( val ) ?
					// - Function jQuery.map passed arguements val and function (val) which arguement is val
					jQuery.map( val, function( val ) {
					// - Returns { name: elem.name, value: val.replace( rCRLF, "\r\n" ) }
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});
```
