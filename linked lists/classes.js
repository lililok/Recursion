export class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    getSize() {
        return this.size
    }

    getHead() {
        return this.head
    }

    getTail() {
        return this.tail
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            return
        }

        let curr = this.head

        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }

        return curr
    }

    pop() {
        let curr = this.head

        while (curr.next !== this.tail) {
            curr = curr.next;
        }

        this.tail = curr;
        this.tail.next = null;
        this.size--;
    }

    contains(value) {
        let curr = this.head

        while (curr) {
            if (curr.value === value) return true;
            curr = curr.next;
        }
        return false;
    }

    find(value) {
        let curr = this.head
        let i = 0;

        while (curr) {
            if (curr.value === value) return i;
            curr = curr.next;
            i++;
        }
        return null;
    }

    toString() {
        let curr = this.head

        let string = ""

        while (curr) {
            string += `(${curr.value}) -> `
            curr = curr.next;
        }

        string += "null";
        return string;
    }
}

export class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

