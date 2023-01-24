// trees
// binary tree -> can only have left and right child
// full binary tree -> every node points to 2 or 0 nodes
// perfect binray tree -> every line is filled with child nodes
// complete binary tree -> most compact for a given number of nodes
// node without children is a leaf
// left <-- parent node --> >right

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // best O(log n) worst O(n)
  insert(value) {
    const newNode = new Node(value)
    // null tree
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let temp = this.root
    // tree has nodes
    while (true) {
      // no duplicate nodes
      if (newNode.value === temp.value) return undefined
      if (newNode.value < temp.value) {
        // go left
        if (temp.left === null) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      } else {
        if (temp.right === null) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  // best O(log n) worst O(n)
  contains(value) {
    if (this.root === null) return false
    let temp = this.root
    while (temp) {
      if (value === temp.value) return true
      if (value < temp.value) {
        temp = temp.left
      } else {
        temp = temp.right
      }
    }
    return false
  }
}

const bst = new BinarySearchTree()
bst.insert(47)
bst.insert(21)
bst.insert(76)
console.log(bst.contains(47))
console.log(bst)
