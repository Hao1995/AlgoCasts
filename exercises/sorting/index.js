// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// // Myself
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
//     return arr
// }


// Official
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr
}

// Myself
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexofMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexofMin]) {
                indexofMin = j; 
            }
        }
        const lesser = arr[indexofMin];
        arr[indexofMin] = arr[i];
        arr[i] = lesser;
    }
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
