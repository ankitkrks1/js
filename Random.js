#!/usr/bin/env node

/**
 * There are two was to generate random no. in Js. 
 *  a. Math.random 
 *  b. crypto.getRandomValue()
 */

var random = Math.random(); // Returns the random no. including 0 and excluding 1. 

console.log(random);


/**
 *  Using Crypto to get the random . 
 */

 // Create a Uint32Array with one element
 const randomBytes = new Uint32Array(1);

 // Fill the array with cryptographically secure random values
 crypto.getRandomValues(randomBytes);

 // Generate a random number within the range
 var  random = randomBytes[0] / (0xFFFFFFFF + 1); // Normalize to [0, 1)

/**
 * Random in a given range 
 *  min -- max 
 */

const randomInRange = (min,max) =>{
 
    return random*(max -min) +min
}

console.log(randomInRange(5,10))