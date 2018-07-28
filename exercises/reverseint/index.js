// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//===By Myself
function reverseInt(n) {
    if (Math.sign(n) >= 0){
        return parseInt(n.toString().split('').reverse().join(''));
    } else {
        var nStrArray = n.toString().split('');
        var nStrSlice = nStrArray.slice(1, nStrArray.length).reverse().join('');
        return parseInt('-' + nStrSlice);
    }
}

// //===Official-1
// function reverseInt(n) {
//     const reversed =  n.toString().split('').reverse().join('');

//     if( n < 0 ){
//         return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed);
// }

//===Official-2
function reverseInt(n) {
    const reversed =  n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
