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
        for (var door=0; door < this.doors.length; door++)
        this.doors[door] = this.toggle(this.doors[door]);
        return this;
    },


};