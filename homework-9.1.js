module.exports = {
    
        OPENED : +1,
        CLOSED : -1,
    
        doors  : [-1,-1,-1,-1,-1],
        
        toggle : function(door) {
            if (door == this.OPENED) return this.CLOSED;
            if (door == this.CLOSED) return this.OPENED;
        },
        
        walk : function(pass) {
/**        
        if (pass == 0) {
        for (var door = 0; door < this.doors.length; door ++) {
           this.doors[door] = this.toggle(this.doors[door]);
        }}
        if (pass == 1) {
        for (var door = 1; door < this.doors.length; door += 2) {
           this.doors[door] = this.toggle(this.doors[door]);
        }}
        if (pass == 2) {
        for (var door = 2; door < this.doors.length; door += 3) {
           this.doors[door] = this.toggle(this.doors[door]);
        }}
        if (pass == 3) {
        for (var door = 3; door < this.doors.length; door += 4) {
           this.doors[door] = this.toggle(this.doors[door]);
        }}
        if (pass == 4) {
        for (var door = 4; door < this.doors.length; door += 5) {
           this.doors[door] = this.toggle(this.doors[door]);
        }}
*/ 
        for (var door = pass; door < this.doors.length; door+=(pass+1) ) {
           this.doors[door] = this.toggle( this.doors[door] );
        }
           return this.doors;
         
        },

};