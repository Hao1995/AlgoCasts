// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// //=== by myself
// function anagrams(stringA, stringB) {
//     const charMapA = countChar(stringA.replace(/[^\w]/g,"").toLowerCase());
//     const charMapB = countChar(stringB.replace(/[^\w]/g,"").toLowerCase());

//     if (Object.keys(charMapA).length === Object.keys(charMapB).length){
//         for (let char in charMapA) {
//             if (charMapA[char] !== charMapB[char]){
//                 return false;
//             }
//         }
//         return true;
//     }

//     return false;
// }

// function countChar(str) {
//     const charMap = {};
//     let max = 0;

//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++;
//         }else{
//             charMap[char] = 1;
//         }
//     }

//     return charMap;
// }


// //=== Official-1
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g,"").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

//=== Official-2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}



module.exports = anagrams;
