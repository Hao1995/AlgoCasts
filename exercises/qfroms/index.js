// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

//=== By Myself
// class Queue {
//     constructor() {
//         this.queueA = new Stack();
//         this.queueB = new Stack();
//     }
//     add(record) {
//         this.queueA.push(record);
//     }
//     remove() {
//         while(this.queueA.peek()) {
//             this.queueB.push(this.queueA.pop());
//         }
        
//         const value = this.queueB.pop();
        
//         while(this.queueB.peek()) {
//             this.queueA.push(this.queueB.pop());
//         }

//         return value
//     }
//     peek() {
//         while(this.queueA.peek()) {
//             this.queueB.push(this.queueA.pop());
//         }

//         const value = this.queueB.peek();
        
//         while(this.queueB.peek()) {
//             this.queueA.push(this.queueB.pop());
//         }

//         return value;
//     }
// }

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
}

module.exports = Queue;
