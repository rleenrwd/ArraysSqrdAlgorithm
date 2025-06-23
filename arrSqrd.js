
/* 
Write a function called same, which accepts two arrays. The function should return true 
if every value in the first array has it's corresponding value squared in the second array. 
The frequency of values must be the same as well. 
*/


/* **************  HERE IS A GREAT APPROACH TO SOLVING THIS PROBLEM WITH A TIME COMPLEXITY OF O(n) *******
This approach is more efficient, scalable and common in technical interviews for problems involving comparisons or frequencies or content. It performs excellent with large data.
*/

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    // Intialize two empty objects to store the frequency count of each value in arr1/arr2
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for (let val of arr1) {
        // For each value in arr1, add it to frequencyCounter1 or increment its count if its already in FC1.
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        // For each value in arr2, add it to frequencyCounter2 or increment its count if its already in FC2.
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        // If the square of FC1's key doesn't exist in FC2, return false
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // If the count of the squared key in FC2 is not equal to the count of key in FC1, return false
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1,2,3,4], [1,4,9,16]));
console.log(same([1,2,3,4], [1,4,9]));