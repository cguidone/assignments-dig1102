module.exports = {
    
    OPENED : +1,
    CLOSED : -1,
    
    doors  : [],
    
    init   : function(length) {
        for (var door=0; door < length; door++) {
        this.doors[door] = this.CLOSED;
        }
        return this;
    },
    
    toggle : function(door) {
        if (door == this.OPENED) return this.CLOSED;
        if (door == this.CLOSED) return this.OPENED;
    },
    
    walk   : function() {
        this.doors[0] = this.toggle(this.doors[0]);
        return this;
    },


};