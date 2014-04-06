var assert = require('assert'),
    hallway = require('./hallway.js');
    
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
    
/**
 * First test to make sure all doors in Hallway are closed
 * Door #  | open(1)/closed(-1)
 *      1  | -1
 *      2  | -1
 *      3  | -1
 *      4  | -1
 *      5  | -1
 *      6  | -1
 *      7  | -1
 *      8  | -1
 *      9  | -1
 *      10 | -1
*/
 
assert(hallway);
 
assert(hallway.doors);

// Test length of array doors.
assert.equal(hallway.doors.length, 10, 'Error hallway is not equal to length specified.');

// Test to make sure every door is closed at the start.
for (var a = 0; a < hallway.doors.length; a++) {
assert.equal(hallway.doors[a], -1, 'Error on door ' + a);
}

// var a=1;
// assert.equal(hallway.open(a), 1, "Error on door");