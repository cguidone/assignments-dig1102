module.exports = {
    closed : -1,
    opened : 1,
    
    doors : [ -1, -1, -1, -1, -1 ],
    
    toggle : function (door) {
        if ( door == this.closed ) return this.opened;
        if ( door == this.opened ) return this.closed;
    },
    
    walk : function (pass) {
        for (var door = pass; door < this.doors.length; door+=pass ) {
            this.doors[door] = this.toggle(this.doors[door]);
        }
        return this.doors;
    },
};