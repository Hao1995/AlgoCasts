// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// === by myself 
function vowels(str) {
    const vowelChars = ['a', 'e', 'i', 'o', 'u'];
    const chars = str.toLowerCase().split('');
    let vowelCount = 0;
    chars.forEach(char => {
        vowelChars.forEach(vowel => {
            if (char === vowel) {
                vowelCount++;
            }
        });      
    });

    return vowelCount;
}

module.exports = vowels;
