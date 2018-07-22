// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//---By Myself
function reverse(str) {
    var splitStrArr = str.split("");
    var reverseStrArr = [];
    for (i=0; i<splitStrArr.length; i++)   {
        reverseStrArr[splitStrArr.length-i] = splitStrArr[i];
    }

    var reverseStr = reverseStrArr.join("");

    return reverseStr
}

module.exports = reverse;
