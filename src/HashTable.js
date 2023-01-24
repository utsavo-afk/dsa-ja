// hash tables -> in js these are objects
// dealing with collisions in hash table -> separate chaining, linear probing (open addressing)
// we can have a linkedlist at every one of these addresses to avoid collisions
export default class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size)
  }
  // O(1)
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
    }
    return hash
  }
  // O(1)
  set(key, value) {
    let index = this._hash(key)
    if (!this.dataMap[index]) {
      this.dataMap[index] = []
    }
    this.dataMap[index].push([key, value])
    return this
  }
  // O(n) || O(1)
  get(key) {
    let index = this._hash(key)
    if (this.dataMap[index]) {
      return this.dataMap[index].find(x => x[0] === key)[1]
    }
    return undefined
  }
  keys() {
    return this.dataMap
      .filter(x => x !== undefined)
      .flat()
      .map(x => x[0])
  }
}

const htable = new HashTable()
htable.set('bolts', 100)
htable.set('washers', 400)
htable.set('dryers', 1000)
htable.set('sponges', 300)
console.log(htable.get('washers'))
console.log(htable.keys())
console.log(htable)
