// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//=== ByMyself
function chunk(array, size) {
    let arrayLen = array.length;
    let newArray = [];
    for (let i = size; i < arrayLen + size; i += size) {
        let chunkArray = [];
        for (let j = i - size; j < i && j < arrayLen; j++ ){
            chunkArray.push(array[j]);
        }
        newArray.push(chunkArray);
    }
    return newArray;
}

module.exports = chunk;
