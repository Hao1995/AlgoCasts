// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//     let row = 0;
//     let col = 0;
//     let arr = [];
    
//     //--Init
//     for (let i = 0; i < n; i++) {
//         arr[i] = [];
//     }

//     //--Insert Data
//     let flag = true;
//     let vertical = false;
//     for (let num = 1; num <= n * n; num++){
//         arr[row][col] = num;

//         if (flag) {
//             if (vertical) {
//                 row++;
//                 if (row >= n || arr[row][col]) {
//                     row--;
//                     col--;
//                     flag = false;
//                     vertical = false;
//                 }
//             } else {
//                 col++;
//                 if (col >= n || arr[row][col]) {
//                     col--;
//                     row++;
//                     vertical = true;
//                 }
//             }
//         } else {
//             if (vertical) {
//                 row--;
//                 if (row < 0 || arr[row][col]) {
//                     row++;
//                     col++;
//                     flag = true;
//                     vertical = false;
//                 }
//             } else {
//                 col--;
//                 if (col < 0 || arr[row][col]) {
//                     col++;
//                     row--;
//                     vertical = true;
//                 }
//             }
//         }
//     }

//     return arr; 
// }

// === Official01
function matrix(n) {
    const results = [];
    
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n -1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;
}

module.exports = matrix;
