// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// == by myself
class Queue {
    constructor() {
        this.queue = [];
    }
    add(num) {
        this.queue.push(num);
    }
    remove() {
        const result = this.queue[0];
        this.queue = this.queue.splice(1);
        return result;
    }
}

module.exports = Queue;
