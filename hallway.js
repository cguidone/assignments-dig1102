module.exports = {
    doors : [
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
    ],
    
    openorclose : function openorclose (a) {
        if (a === -1) {
        return 1;
        }
        else {
        return -1;    
        }
    },
    
    firsttest : function firsttest (b) {
        for (var a=0; a < this.doors.length; a++) {
            this.doors[a] = 1;    
        }
        return this.doors[b];
    },
    
    secondtest : function secondtest (b) {
        for (var a=1; a < this.doors.length; a +=2) {
            this.doors[a] = -1;
        }
        return this.doors[b];
    }

};