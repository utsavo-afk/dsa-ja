class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

export default class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
  // O(1)
  push(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  // O(1)
  pop() {
    if (!this.length) return undefined
    let temp
    if (this.length === 1) {
      temp = this.head
      this.head = null
      this.tail = null
    } else {
      temp = this.tail
      this.tail = temp.prev
      this.tail.next = null
      temp.prev = null
    }
    this.length--
    return temp
  }
  // O(1)
  shift() {
    if (!this.length) return undefined
    let temp = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = temp.next
      this.head.prev = null
      temp.prev = null
      temp.next = null
    }
    this.length--
    return temp
  }
  // O(1)
  unshift(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }
  // O(n)
  get(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.head
    if (index === this.length - 1) return this.tail
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }
  // O(n)
  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }
  // O(n)
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined
    if (index === 0) {
      this.unshift(value)
      return true
    }
    if (index === this.length) {
      this.push(value)
      return true
    }
    const newNode = new Node(value)
    let temp, prev
    temp = this.get(index)
    prev = temp.prev
    newNode.next = temp
    newNode.prev = prev
    prev.next = newNode
    temp.prev = newNode

    this.length++
    return true
  }
  // O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let temp = this.get(index)
    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    temp.prev = null
    temp.next = null
    this.length--
    return temp
  }
  // O(n)
  reverse() {
    if (!this.length || this.length === 1) return this
    // switch head and tail
    let temp
    temp = this.head
    this.head = this.tail
    this.tail = temp
    // switch nodes
    let prev = null
    let next = temp.next
    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      temp.prev = next
      prev = temp
      temp = next
    }
    return this
  }
}

const dll = new DoublyLinkedList(1)
dll.push(2)
dll.push(3)
console.log(dll)
