# 📊 Array Squared Frequency Checker – same() Function
## 📌 Why I Built This
I created this algorithm to practice solving problems that involve comparing two datasets with specific relationships between their values. This exercise reinforces key computer science concepts like frequency counters, hash maps, and Big O notation. It also mirrors real-world problems where you need to verify conditions across collections of data.

## 📖 Problem Statement
Write a function called same, which accepts two arrays.
The function should return true if every value in the first array has its corresponding value squared in the second array. The frequency of values must also match.

✅ same([1, 2, 3], [1, 4, 9]) → true
❌ same([1, 2, 3], [1, 9]) → false
❌ same([1, 2, 1], [4, 4, 1]) → false (frequencies don’t match)

## 🧠 Approach & Time Complexity
This solution uses a frequency counter pattern to reduce time complexity from O(n²) to O(n).

## 🪄 Steps:
Check if arrays are the same length.

Create frequency counters for both arrays.

Loop through the first frequency counter:

Ensure the square of each key exists in the second counter.

Ensure the frequency matches.

Return true only if all checks pass.

## ⏱️ Time Complexity:
O(n) – Linear time

## 🧮 Space Complexity:
O(n) – For the two frequency objects

## 🧪 Example Test Cases

same([1, 2, 3, 4], [1, 4, 9, 16])    // true

same([1, 2, 3, 4], [1, 4, 9])        // false (length mismatch)

same([2, 2, 3], [4, 4, 9])           // true

same([1, 2, 1], [4, 1, 4])           // false (frequency mismatch)

## 🧠 What I Learned
The frequency counter pattern is a powerful technique for solving comparison problems in O(n) time.

Hash maps (plain objects in JS) allow constant-time lookups.

Writing concise, readable code is essential for technical interviews.

Validating both value relationships and frequency counts is a common interview pitfall—both are necessary!
