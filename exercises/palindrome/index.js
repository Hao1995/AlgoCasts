// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// //===By Myself
// function palindrome(str) {
//     const strArr = str.split('');
//     const len = strArr.length;
//     var flag = true;
//     for (var i = 0; i < len / 2; i++) {
//         if (strArr[i] != strArr[len-i-1]){
//             flag = false;
//         }
//     }
//     return flag;
// }

// //===Official-1
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

//===Official-2
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    }); 
}


module.exports = palindrome;
