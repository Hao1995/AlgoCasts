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

module.exports = pyramid;


pyramid(3);