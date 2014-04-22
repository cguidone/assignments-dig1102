module.exports = {
    
    OPENED : +1,
    CLOSED : -1,
    
    doors : +1,  
    
    toggle : function(door) {
        if (door == this.OPENED) return this.CLOSED;
        if (door == this.CLOSED) return this.OPENED;
    },
    
    



};