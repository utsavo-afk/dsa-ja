class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export default class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
  // O(1)
  push(value) {
    const newNode = new Node(value)
    // push onto null pointing list
    if (this.length === 0) {
      this.head = newNode
      this.tail = this.head
    }
    // n items in list
    else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  // O(n)
  pop() {
    // null list
    if (!this.length) return undefined
    // 1 item in list
    let temp, prev
    temp = this.head
    prev = this.head
    while (temp.next) {
      prev = temp
      temp = temp.next
    }
    this.tail = prev
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }
  // O(1)
  unshift(value) {
    const newNode = new Node(value)
    // null pointing list
    if (!this.length) {
      this.head = newNode
      this.tail = this.head
    }
    // n items in list
    else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  // O(1)
  shift() {
    if (!this.length) return undefined
    let temp
    temp = this.head
    // 1 item in list
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    // n items in list
    else {
      this.head = temp.next
      temp.next = null
    }
    this.length--
    return temp
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
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let temp, prev
    prev = this.get(index - 1)
    temp = prev.next
    prev.next = temp.next
    temp.next = null
    this.length--
    return temp
  }
  // O(n)
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) {
      this.unshift(value)
      return true
    }
    if (index === this.length) {
      this.push(value)
      return true
    }
    let newNode = new Node(value)
    let prev = this.get(index - 1)
    newNode.next = prev.next
    prev.next = newNode
    this.length++
    return true
  }
  // O(n)
  reverse() {
    if (!this.length) return undefined
    if (this.length === 1) return this
    // switch head and tail
    let temp
    temp = this.head
    this.head = this.tail
    this.tail = temp
    // reverse nodes
    let prev, next
    prev = null
    next = temp.next
    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return this
  }
}

const ll = new LinkedList(2)
console.log(ll)
