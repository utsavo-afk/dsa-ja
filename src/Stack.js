class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
// Lifo
export default class Stack {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }
  push(value) {
    const newNode = new Node(value)
    // empty stack
    if (!this.length) {
      this.top = newNode
    }
    // stack w/items
    else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.length) return undefined
    let temp = this.top
    if (this.length === 1) {
      this.top = null
    } else {
      this.top = temp.next
      temp.next = null
    }
    this.length--
    return temp
  }
}

const stack = new Stack(10)
stack.push(11)
stack.push(12)
let n = stack.pop()
console.log(n)
console.log(stack)
