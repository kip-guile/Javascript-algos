Lookup, push, pop for arrays is O(1)
- push could potentially become O(n) because JS might assign a smaller space for the array
Shift and unshift for arrays is O(n)
Splices are O(n)
inserts and deletes are O(n)

Javascript uses dynamic arrays, instead of static arrays.

1. Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

2. Implement a function void reverse(char\* str) in C or C++ which reverses a null- terminated string.

3. Given two strings, write a method to decide if one is a permutation of the other.

4. Write a method to replace all spaces in a string with'%20'. You may assume that the string has sufficient space at the end of the string to hold the additional characters, and that you are given the "true" length of the string. (Note: if imple- menting in Java, please use a character array so that you can perform this opera- tion in place.)
   EXAMPLE
   Input: "Mr John Smith Output: "Mr%20Dohn%20Smith"

5. Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the orig- inal string, your method should return the original string.

6. Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

7. Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

8. Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s i and s2, write code to check if s2 is a rotation of si using only one call to isSubstring (e.g.,"waterbottle"is a rota- tion of"erbottlewat").

9. Reverse a string.
