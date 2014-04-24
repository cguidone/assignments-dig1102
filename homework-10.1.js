module.exports = {
    
    OPENED : +1,
    CLOSED : -1,
    
    doors  : [],
    
    init   : function() {
        this.doors[0] = -1;
        return this;
    },
    
    toggle : function(door) {
        if (door == this.OPENED) return this.CLOSED;
        if (door == this.CLOSED) return this.OPENED;
    },
    
    walk   : +1,


};