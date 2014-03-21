var assert = require("assert");

/**
 * Write functions for addition, subtraction, multiplication, and division.
 * Cover positive, negative, and zero cases. Do not generate errors even when
 * dividing by zero. Write assertions for every case.
*/

/**
 * Test plan for addition.
 * 
 *  1st | 2nd | output
 * -----+-----+-------
 *   -1 |  -1 |  -2
 *   -1 |  +0 |  -1
 *   -1 |  +1 |  +0
 *   +0 |  -1 |  -1
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  +1
 *   +1 |  -1 |  +0
 *   +1 |  +0 |  +1
 *   +1 |  +1 |  +2
*/