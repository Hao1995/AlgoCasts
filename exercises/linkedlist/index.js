// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(idx) {
        if (!this.head) {
            return null;
        }

        let node = this.head
        let counter = 0;
        while (node) {
            if (idx === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        
        return null;
    }

    removeAt(idx) {
        if (!this.head) {
            return;
        }

        if (idx === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(idx - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
        
        return
    }

    //=== Myself
    // insertAt(data, idx) {
    //     let insertNode = new Node(data);
    //     if (!this.head) {
    //         this.head = insertNode;
    //         return;
    //     }

    //     if (idx === 0) {
    //         insertNode.next = this.head;
    //         this.head = insertNode;
    //         return;
    //     }


    //     const previous = this.getAt(idx - 1);
    //     if (!previous || !previous.next) {
    //         let lastNode = this.getLast();
    //         lastNode.next = insertNode;
    //         return;
    //     }

    //     insertNode.next = previous.next;
    //     previous.next = insertNode;
    //     return;
    // }

    //=== Officail
    insertAt(data, idx) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (idx === 0) {
            this.head = new Node(data, this.head);
            return;
        }


        const previous = this.getAt(idx - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
        return;
    }
}

module.exports = { Node, LinkedList };
