class HashTable {
    constructor(size) {
        this.data = new Array(size);
        [['grapes', 100000]]
    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    // set()
}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes')