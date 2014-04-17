var assert = require('assert'),
    hallway = require('./homework-9.1.js');
    
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

assert.equal(hallway.doors.length, 5);

assert.equal(hallway.OPENED, 1);
assert.equal(hallway.CLOSED, -1);

assert(hallway.toggle);

assert.equal(hallway.toggle(hallway.OPENED), hallway.CLOSED);
assert.equal(hallway.toggle(hallway.CLOSED), hallway.OPENED);

assert.deepEqual(hallway.doors, [hallway.CLOSED, hallway.CLOSED, hallway.CLOSED, hallway.CLOSED, hallway.CLOSED]);

assert(hallway.walk);

assert.deepEqual(hallway.walk(0), [hallway.OPENED, hallway.OPENED, hallway.OPENED, hallway.OPENED, hallway.OPENED]);

assert.deepEqual(hallway.walk(1), [hallway.OPENED, hallway.CLOSED, hallway.OPENED, hallway.CLOSED, hallway.OPENED]);

assert.deepEqual(hallway.walk(2), [hallway.OPENED, hallway.CLOSED, hallway.CLOSED, hallway.CLOSED, hallway.OPENED]);

assert.deepEqual(hallway.walk(3), [hallway.OPENED, hallway.CLOSED, hallway.CLOSED, hallway.OPENED, hallway.OPENED]);

assert.deepEqual(hallway.walk(4), [hallway.OPENED, hallway.CLOSED, hallway.CLOSED, hallway.OPENED, hallway.CLOSED]);



