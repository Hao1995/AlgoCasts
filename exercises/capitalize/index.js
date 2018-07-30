// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// //=== by myself
// function capitalize(str) {
//     let sliceMap = str.split('');

//     for (let i = 0; i < sliceMap.length; i++) {
//         if (i === 0) {
//             sliceMap[i] = sliceMap[i].toUpperCase();
//         } else if (sliceMap[i-1] === ' ' && sliceMap[i] !== ' ') {
//             sliceMap[i] = sliceMap[i].toUpperCase();
//         }
//     }

//     return sliceMap.join('');
// }

// //=== official-01
// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(' ');
// }

//=== official-02
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if ( str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

module.exports = capitalize;
