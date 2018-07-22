// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//===By Myself
// function reverse(str) {
//     var splitStrArr = str.split("");
//     var reverseStrArr = [];
//     for (i=0; i<splitStrArr.length; i++)   {
//         reverseStrArr[splitStrArr.length-i] = splitStrArr[i];
//     }

//     var reverseStr = reverseStrArr.join("");
//     return reverseStr
// }

//===Official-1
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

//===Official-2
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// //===Official-3
// function reverse(str) {
//     let reversed = '';
//     for (let character of str){
//         reversed = character + reversed;
//     }

//     return reversed;
// }

//===Official-4
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
