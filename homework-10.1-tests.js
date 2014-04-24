var assert = require('assert'),
    hallway = require('./homework-10.1.js');
    
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
assert(hallway.init);