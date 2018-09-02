// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// My Self
function levelWidth(root) {
    const level = [];
    let counter = 0;
    const arr = [root, true];
    while (arr.length) {
        const node = arr.shift();
        if (node === true) {
            level.push(counter);
            counter = 0;
            if (arr.length == 0) {
                break;
            } else { 
                arr.push(true);
                continue;
            }
        }
        counter++;
        arr.push(...node.children);
    }
    return level;
}

module.exports = levelWidth;
