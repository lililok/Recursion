export class Hashmap {
    constructor() {
        this.capacity = 16
        this.bucket = Array(this.capacity).fill(null).map(() => []);
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return Math.abs(hashCode % this.capacity);
    }

    set(key, value) {
        const hashCode = this.hash(key)

        for (let i = 0; i < this.bucket[hashCode].length; i++) {
            if (this.bucket[hashCode][i][0] === key) {
                this.bucket[hashCode][i][1] = value;
                return;
            }
        }

        this.bucket[hashCode].push([key, value]);
    }

    get(key) {
        const hashCode = this.hash(key)

        for (let i = 0; i < this.bucket[hashCode].length; i++) {
            if (this.bucket[hashCode][i][0] === key) {
                return this.bucket[hashCode][i][1];
            }  
        }
        return null;
    }

    has(key) {
        const hashCode = this.hash(key)

        for (let i = 0; i < this.bucket[hashCode].length; i++) {
            if (this.bucket[hashCode][i][0] === key) {
                return true;
            }  
        }
        return false;

    }

    remove(key) {
        if (this.has(key) === true) {
            const hashCode = this.hash(key)

            for (let i = 0; i < this.bucket[hashCode].length; i++) {
                if (this.bucket[hashCode][i][0] === key) {
                    this.bucket[hashCode].splice(i, 1);
                    return true;
                }  
            }
        }

        return false;
    }

    length() {
        let count = 0

        for (let i = 0; i < this.bucket.length; i++) {
            count += this.bucket[i].length;
        }

        return count
    }

    clear() {
        this.capacity = 16
        this.bucket = Array(this.capacity).fill(null).map(() => []);
    }

    keys() {
        const keysArr = []

        for (let i = 0; i < this.bucket.length; i++) {
            for (let j = 0; j < this.bucket[i].length; j++) {
                keysArr.push(this.bucket[i][j][0]);
            }
        }
        return keysArr;
    }

    values() {
        const valuesArr = []

        for (let i = 0; i < this.bucket.length; i++) {
            for (let j = 0; j < this.bucket[i].length; j++) {
                valuesArr.push(this.bucket[i][j][1]);
            }
        }
        return valuesArr;
    }

    entries() {
        const entriesArr = []

        for (let i = 0; i < this.bucket.length; i++) {
            for (let j = 0; j < this.bucket[i].length; j++) {
                entriesArr.push([this.bucket[i][j][0], this.bucket[i][j][1]]);
            }
        }
        return entriesArr;
    }
}