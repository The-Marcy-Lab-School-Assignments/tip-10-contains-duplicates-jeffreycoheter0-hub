/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  //write your code here
  const obj = {} // stores the numbers in an object
  for (let i = 0; i < nums.length; i++) { //loops through each item length in nums
    let num = nums[i]; // var to read each number 
    if (num in obj) { // checks if a number is in the obj
      obj[num]++; // you add the key "num" and value "keeps
      // adding the value up by one if there multiple 
      // copies of the same number" to the object "obj"
      return true; // if there is more than one "same" number, return true
    } else {
      obj[num] = 1; // adds the key "num" and value "1" inside the object
    }
  }
  return false; // if there is only one number, return false
};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true