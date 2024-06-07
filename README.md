# COA-TASKFORCE-TAKE-HOME-CHALLENGE
Challenges for COA TASKFORCE 

Projects Overview
This repository contains three parts implemented in JavaScript, html and css :

Gallery Design: A simple gallery webpage designed using HTML and CSS. The gallery displays images with their respective names. When hovering over an image, additional details about the image appear. The gallery is responsive and works seamlessly on both desktop and mobile devices.

String Transformation Challenge: A JavaScript function that transforms a given string based on certain rules. The rules include reversing the string, replacing each character with its ASCII code, or performing both operations in a specific order. The function takes a string as input and returns the transformed string.

Array Manipulation: A JavaScript function that determines if there exists a contiguous subarray within the array that sums up to a target. The function returns true if such a subarray exists, otherwise returns false. The function has an expected time complexity of O(n) and space complexity of O(1).

Gallery Design
Features
Display images with their names.
On hover, additional details about the image appear.
Responsive design for both desktop and mobile devices.
No space between images to maintain tight alignment.
How to Run
Clone the repository to your local machine.
Open the gallery.html file in a web browser to view the gallery.
String Transformation Challenge
Problem Statement
Given a string, transform it based on the following rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.
Implementation
The transformString function takes a string as input and returns the transformed string.
It checks the length of the string and applies the transformation rules accordingly.
The transformation includes reversing the string, replacing characters with ASCII codes, or both.
How to Run
Ensure you have Node.js installed on your machine.
Open a terminal and navigate to the directory containing the JavaScript file (string_transformation.js).
Run the command node string_transformation.js.
Follow the prompts to enter a word and see its transformation.
Array Manipulation
Problem Statement
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

Implementation
The hasContiguousSubarray function takes an array of integers and a target sum as input and returns true if there exists a contiguous subarray that sums up to the target, otherwise returns false.
It uses a sliding window approach to efficiently search for the subarray.
The function has an expected time complexity of O(n) and space complexity of O(1).
How to Run
Ensure you have Node.js installed on your machine.
Open a terminal and navigate to the directory containing the JavaScript file (array_manipulation.js).
Run the command node array_manipulation.js.
Follow the prompts to enter an array of integers and a target sum and see if a contiguous subarray exists.
