var assert = require('assert'),
    hallway = require('./homework-10.1.js');
    
/** Program
 * There is a hallway with 100 doors.
 * All doors are closed to start.
 * 1. Walk down the hallway and open every door.
 * 2. Walk down the hallway again and close every other door.
 * 3. Walk down the hallway again and examine every third door,
 * if the door is open, close it. If it is closed, open it.
 * 4. Walk down the hallway again and examine every fourth door,
 * if the door is open close it. If it is closed, open it.
 * What is the state of the hallway at the end?
*/
    
assert(hallway);

assert(hallway.doors);

assert(hallway.OPENED);
assert(hallway.CLOSED);
assert.equal(hallway.OPENED, +1);
assert.equal(hallway.CLOSED, -1);

assert(hallway.toggle);
assert.equal(hallway.toggle(hallway.OPENED), hallway.CLOSED);
assert.equal(hallway.toggle(hallway.CLOSED), hallway.OPENED);

assert.deepEqual(hallway.doors, []);
assert.equal(hallway.init(10), hallway);
assert.equal(hallway.doors.length, 10);

for (var door=0; door < hallway.doors.length; door++) {
assert.equal(hallway.doors[door], hallway.CLOSED);
}

assert(hallway.walk);
assert.equal(hallway.walk(), hallway);

for (var door=0; door < hallway.doors.length; door++) {
assert.equal(hallway.doors[door], hallway.OPENED);
}
