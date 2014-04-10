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
 * Test to make sure all doors in Hallway are closed at start.
 * Door #  | open(1)/closed(-1)
 *      0  | -1
 *      1  | -1
 *      2  | -1
 *      3  | -1
 *      4  | -1
 *      5  | -1
 *      6  | -1
 *      7  | -1
 *      8  | -1
 *      9  | -1
*/
 
assert(hallway);
 
assert(hallway.doors);

// Test length of array doors.
assert.equal(hallway.doors.length, 10, 'Error hallway is not equal to length specified.');

// Test to make sure every door is closed at the start.
for (var a = 0; a < hallway.doors.length; a++) {
    assert.equal(hallway.doors[a], -1, 'Error on door ' + a);
}

/**
 * First test to make sure all doors in Hallway are open.
 * Door #  | open(1)/closed(-1)
 *      0  | 1
 *      1  | 1
 *      2  | 1
 *      3  | 1
 *      4  | 1
 *      5  | 1
 *      6  | 1
 *      7  | 1
 *      8  | 1
 *      9  | 1
*/

assert(hallway.firsttest);

assert.equal(hallway.firsttest(0), 1);

// Test to makes sure all doors are open after first pass.
for (var a = 0; a < hallway.doors.length; a++) {
    assert.equal(hallway.firsttest(a), 1, 'Error on door ' + a);
}

/**
 * Second test to close every other door in the Hallway.
 * Door #  | open(1)/closed(-1)
 *      0  | 1
 *      1  | -1
 *      2  | 1
 *      3  | -1
 *      4  | 1
 *      5  | -1
 *      6  | 1
 *      7  | -1
 *      8  | 1
 *      9  | -1
*/

assert(hallway.secondtest);

assert.equal(hallway.secondtest(0), 1);

// Test to make sure all doors are set correctly after second test.
var b = -1;
for (var a = 0; a < hallway.doors.length; a++) {
    var b=-b;
    assert.equal(hallway.secondtest(a), b);    
}

/**
 * Third test walk down the hallway and examine every third door,
 * if the door is open, close it. If it is closed, open it.
 * Door #  | open(1)/closed(-1)
 *      0  | 1
 *      1  | -1
 *      2  | was 1 now -1
 *      3  | -1
 *      4  | 1
 *      5  | was -1 now 1
 *      6  | 1
 *      7  | -1
 *      8  | was 1 now -1
 *      9  | -1
*/

assert(hallway.thirdtest);

assert.equal(hallway.thirdtest(0), 1);
assert.equal(hallway.thirdtest(1), -1);
assert.equal(hallway.thirdtest(2), -1);
assert.equal(hallway.thirdtest(3), -1);
assert.equal(hallway.thirdtest(4), 1);
// assert.equal(hallway.thirdtest(5), 1);
