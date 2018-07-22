// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const strArr = str.split('');
    const len = strArr.length;
    var flag = true;
    for (var i = 0; i < len / 2; i++) {
        if (i < len - i && strArr[i] != strArr[len-i-1]){
            flag = false;
        }
    }
    return flag;
}


module.exports = palindrome;
