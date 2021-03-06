// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//=== By Myslef-1
function pyramid(n) {
    for (let row = 1; row <= n; row++) {
        let str = '';
        for (let col = row; col < n; col++) {
            str += ' ';
        }
        if (row > 0) {
            str += '#';
        }
        for (let col = row - 1; col > 0; col--){
            str += '##';
        }
        for (let col = row; col < n; col++) {
            str += ' ';
        }
        console.log(str);
    }
}

// //=== By Myslef-2
// function pyramid(n, row = 1, str = '') {
//     if (n === row - 1) {
//         return;
//     }

//     if (str.length === n * 2 - 1) {
//         console.log(str);
//         return pyramid(n, row + 1);
//     }
//     let strLen = str.length;
//     if (n - row <= strLen && strLen < n + row - 1) {
//         str += '#';
//         pyramid(n, row, str);
//     } else {
//         str += ' ';
//         pyramid(n, row, str);
//     }
// }

// //=== Official -1
// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let column = 0; column < n * 2 - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }

//=== Official -2
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    } 

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;