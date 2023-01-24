class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export default class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length = 1
  }
  // O(1)
  enqueue(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }
  // O(1)
  dequeue() {
    if (!this.length) return undefined
    let temp = this.first
    if (this.length === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = temp.next
      temp.next = null
    }
    this.length--
    return temp
  }
}

const queue = new Queue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
console.log(queue)
