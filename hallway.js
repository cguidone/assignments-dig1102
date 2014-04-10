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
    },
    
    thirdtest : function thirdtest (b) {
        for (var a=2; a < this.doors.length; a +=3) {
            if (this.doors[a] == 1) {
                this.doors[a] = -1;
            }
            else {
                this.doors[a] = 1;
            }
        }
        return this.doors[b];
    },

};