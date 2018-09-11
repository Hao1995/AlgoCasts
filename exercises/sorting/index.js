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

// // Myself
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let indexofMin = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[indexofMin]) {
//                 indexofMin = j; 
//             }
//         }
//         const lesser = arr[indexofMin];
//         arr[indexofMin] = arr[i];
//         arr[i] = lesser;
//     }
//     return arr;
// }

// Official
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexofMin = i;
     
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[indexofMin]) {
                indexofMin = j; 
            }
        }

        if (indexofMin !== i) {
            let lesser = arr[indexofMin];
            arr[indexofMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

// Myself
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let divIdx = Math.ceil(arr.length/2);

    return merge(mergeSort(arr.slice(0, divIdx)), mergeSort(arr.slice(divIdx, arr.length)))
}

// Official
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

// // Myself
// function merge(left, right) {
//     let arr = []
//     while(left.length > 0 || right.length > 0) {
//         if (left.length > 0 && right.length > 0) {
//             if (left[0] < right[0]) {
//                 arr.push(left.shift());
//             } else {
//                 arr.push(right.shift());
//             }
//         } else if (left.length > 0) {
//             arr.push(left.shift());
//         } else if (right.length > 0) {
//             arr.push(right.shift());
//         }
//     }
//     return arr;
// }

// Official
function merge(left, right) {
    const results = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
