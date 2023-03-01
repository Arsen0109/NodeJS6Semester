/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 *  If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) {return 0}
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target){return i}
    }    
    for (let i = 0; i < nums.length - 1; i++){
        if (target > nums[i] && target < nums[i+1]){return i+1}
    }
    return nums.length

};

console.log(searchInsert([1,3,5,6], 6))
console.log()

/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1]
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target){
            result[0] = i
            break
            }
    }
    for (let i = nums.length - 1; i >= 0; i--){
        if (nums[i] === target){
            result[1] = i
            break
            }
    }
    return result
};

console.log(searchRange([5,7,7,8,8,10]))
console.log()

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        let el = nums[i];
        for (let j = i+1; j < nums.length; j++){
            if (el + nums[j] === target){return [i, j]}
        }
    }
};
console.log(twoSum([2,7,11,15], 9))
console.log()

/*
Task

There are five kinds of programmers in the world:

    1. The programmer was happy, so he coding.
2. When programmer coding, he is happy.
3. Programmer is coding, but he is not happy.
4. Programmer has no job of coding, he is happy.
5. no coding and no happy

Given a string nickname. It's the nickname of a programmer. Please determine which kind of programmer it belongs to. The result should be a number, 1,2,3,4 or 5.

You don't know the rules? Sorry, it's a puzzle ;-)
Examples

For `nickname="Happy coding", the output should be 1.

For nickname="coding happy", the output should be 2.

For nickname="coding everyday", the output should be 3.

For nickname="happy programmer", the output should be 4.

For nickname="unhappy codewarrior", the output should be 5.

Happy Coding ^_^
*/

function programmerType(nickname) {
    nickname = nickname.toLowerCase();
    let words = nickname.split(' ');

    switch (true) {
        case words.includes("happy") && words.includes("coding"):
            return words.indexOf("coding") < words.indexOf("happy") ? 2 : 1;
        case words.includes("coding"):
            return 3;
        case words.includes("happy"):
            return 4;
        default:
            return 5;
    }
}


console.log(programmerType("Happy coding")); // 1
console.log(programmerType("coding happy")); // 2
console.log(programmerType("coding everyday")); // 3
console.log(programmerType("happy programmer")); // 4
console.log(programmerType("unhappy codewarrior")); // 5
console.log()

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
    Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
    const letters = word.toLowerCase().split('');
    return letters.map((letter, index) => {
        return letters.indexOf(letter) === letters.lastIndexOf(letter) ? '(' : ')';
    }).join('');
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("
console.log()

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

    The tests contain some very huge arrays, so think about performance.*/

    function findUniq(arr) {
        const counts = {};
        arr.forEach(num => {
            if (num in counts) {
                counts[num]++;
            } else {
                counts[num] = 1;
            }
        });
    
        for (const num in counts) if (counts[num] === 1) return Number(num);
    }
    
    console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
    console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // 0.55