/*
* Added where to find information about author and script
* https://github.com/GerHobbelt
* https://raw.github.com/GerHobbelt/d3/master/d3.latest.js
* Needs information on what the code does
* Only copied a section of the code more can be found at the link above
*/

!function() {
    
  // Added: Variable d3 is version 3.4.1    
  var d3 = {
    version: "3.4.1"
  };
  
  // Added: Uses Date.Now functions in an if statement, returns +new Date()
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  
  // Added: Creates an Array for Variable d3_arrayslice
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  
  // Added: Variable d3_document is created
  var d3_document = document, d3_documentElement = d3_document.documentElement, d3_window = window;
  
  // Added: Start testing script
  try {
    d3_array(d3_documentElement.childNodes)[0].nodeType;
  }
  
  // Added: More testing for array created earlier
  catch (e) {
    d3_array = function(list) {
      var i = list.length, array = new Array(i);
      while (i--) array[i] = list[i];
      return array;
    };
  }
  
  // Added: More testing
  try {
    d3_document.createElement("div").style.setProperty("opacity", 0, "");
  } 
  
  catch (error) {
      
    var d3_element_prototype = d3_window.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
    
    d3_element_prototype.setAttribute = function(name, value) {
      d3_element_setAttribute.call(this, name, value + "");
    };
    
    d3_element_prototype.setAttributeNS = function(space, local, value) {
      d3_element_setAttributeNS.call(this, space, local, value + "");
    };
    
    d3_style_prototype.setProperty = function(name, value, priority) {
      d3_style_setProperty.call(this, name, value + "", priority);
    };
  }
  
  d3.ascending = function(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  };
  
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  
  d3.min = function(array, f) {
      
    var i = -1, n = array.length, a, b;
    
    if (arguments.length === 1) {
      while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } 
    
    else {
      while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  
  d3.max = function(array, f) {
      
    var i = -1, n = array.length, a, b;
    
    if (arguments.length === 1) {
      while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } 
    
    else {
      while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  
  d3.extent = function(array, f) {
      
    var i = -1, n = array.length, a, b, c;
    
    if (arguments.length === 1) {
      while (++i < n && !((a = c = array[i]) != null && a <= a)) a = c = undefined;
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    
    else {
      while (++i < n && !((a = c = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  
  d3.sum = function(array, f) {
      
    var s = 0, n = array.length, a, i = -1;
    
    if (arguments.length === 1) {
      while (++i < n) if (!isNaN(a = +array[i])) s += a;
    } 
    
    else {
      while (++i < n) if (!isNaN(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  
  function d3_number(x) {
    return x != null && !isNaN(x);
  }
  
  d3.mean = function(array, f) {
      
    var n = array.length, a, m = 0, i = -1, j = 0;
    
    if (arguments.length === 1) {
      while (++i < n) if (d3_number(a = array[i])) m += (a - m) / ++j;
    } 
    
    else {
      while (++i < n) if (d3_number(a = f.call(array, array[i], i))) m += (a - m) / ++j;
    }
    return j ? m : undefined;
  };
  
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  
  d3.median = function(array, f) {
    if (arguments.length > 1) array = array.map(f);
    array = array.filter(d3_number);
    return array.length ? d3.quantile(array.sort(d3.ascending), .5) : undefined;
  };
  
  d3.bisector = function(f) {
    return {
      
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (f.call(a, a[mid], mid) < x) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (x < f.call(a, a[mid], mid)) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  };
  
  var d3_bisector = d3.bisector(function(d) {
    return d;
  });
  
  d3.bisectLeft = d3_bisector.left;
  d3.bisect = d3.bisectRight = d3_bisector.right;
  
  d3.shuffle = function(array) {
    
    var m = array.length, t, i;
    
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m], array[m] = array[i], array[i] = t;
    }
    return array;
  };
  
  d3.permute = function(array, indexes) {
    
    var i = indexes.length, permutes = new Array(i);
    
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };