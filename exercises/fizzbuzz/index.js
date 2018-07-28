// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//=== By Myself
function fizzBuzz(n) {
    let tmp = 1;
    while (tmp <= n) {
        if (tmp% 5 === 0 && tmp% 3 === 0 ) {
            console.log('fizzbuzz');
        }else if (tmp% 3 === 0) {
            console.log('fizz');
        }else if (tmp% 5 === 0) {
            console.log('buzz');
        }else {
            console.log(tmp);
        }
        tmp++;
    }
}

module.exports = fizzBuzz;
