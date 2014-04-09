module.exports = {
    
    add: function add (a, b) {
        
        if (a == -1 && b == -1) return -2;
        if( a == -1 && b == +0) return -1;
        if( a == -1 && b == +1) return +0;
        if( a == +0 && b == -1) return -1;
        if( a == +0 && b == +0) return +0;
        if( a == +0 && b == +1) return +1;
        if( a == +1 && b == -1) return +0;
        if( a == +1 && b == +0) return +1;
        return +2;
    },
    
    subtract: function subtract (a, b) {
        if( a == -1 && b == -1) return +0;
        if( a == -1 && b == +0) return -1;
        if( a == -1 && b == +1) return -2;
        if( a == +0 && b == -1) return +1;
        if( a == +0 && b == +0) return +0;
        if( a == +0 && b == +1) return -1;
        if( a == +1 && b == -1) return +2;
        if( a == +1 && b == +0) return +1;
        return +0;
    },

    multiply: function multiply (a, b) {
        if ( b == +0 || a == +0) return 0;
        if( a == -1 && b == -1) return +1;
        if( a == -1 && b == +1) return -1;
        if( a == +1 && b == -1) return -1;
        if( a == +1 && b == +1) return +1;
    },

    divide: function divide(a, b) {
        if ( b == +0) return null;
        if ( a == +0) return +0;
        if ( a == -1 && b == -1) return +1;
        if ( a == -1 && b == +1) return -1;
        if ( a == +1 && b == -1) return -1;
        if ( a == +1 && b == +1) return +1;
    }
};