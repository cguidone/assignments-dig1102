`/cguidone/jquery/serialize.js:15-41`

```javascript
// - Function buildParams is sent the arguments prefix, obj, traditional and add.
function buildParams( prefix, obj, traditional, add ) {
    // - Variable name is created.
	var name;
	
    // - If boolean statement to see if jQuery is an array sent the argument obj. If true continue, if false continue to else if.
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		// - Function inside a function. jQuery.each is passed the arguments obj and function (i, v).
		// - Function is passed the arguments i and v.
		jQuery.each( obj, function( i, v ) {
		    // - If boolean statement, if traditional or function rbracket.test(prefix) is true then run function add(prefix, v).
		    // - If false then continue to else statement.
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				// - Function buildParams is sent the arguments prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional and add.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
    		// - Function buildParams is sent the arguments prefix + "[" + name + "]", obj[ name ], traditional, and add.
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
```

`/cguidone/jquery/serialize.js:45-76`

```javascript
// - jQuery.param is equal to a function which is sent the arguments a and traditional.
jQuery.param = function( a, traditional ) {
    // - Variable prefix is created.
	var prefix,
	    // - Variable s is set to an array.
		s = [],
		// - add is equal to a function which is sent the arguments key and value
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
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};
```

`/cguidone/jquery/serialize.js:78-108`

```javascript
jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});
```
