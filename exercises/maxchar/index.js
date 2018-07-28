// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// //===By Myself
// function maxChar(str) {
//     const chars = {};

//     for (let char of str) {
//         chars[char] = chars[char] + 1 || 1;
//     }

//     var maxIdx = null;
//     var maxValue = 0;
//     for (let idx in chars) {

//         var count = chars[idx];
//         if (!maxIdx) {
//             maxIdx = idx;
//         }
//         if (count > maxValue) {
//             maxIdx = idx;
//             maxValue = count;
//         }
//     }

//     return maxIdx;
// }


module.exports = maxChar;
