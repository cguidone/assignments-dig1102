module.exports = {
    closed : -1,
    opened : 1,
    
    doors : [ 1 ],
    
    toggle : function (door) {
        if ( door == -1 ) return +1;
        if ( door == +1 ) return -1;
    },
};