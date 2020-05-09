const BinarySearchTree = require('./BinaryTree')

const BST = new BinarySearchTree

BST.insert(35, 35)
BST.insert(25, 25)
BST.insert(15, 15)
BST.insert(14, 14)
BST.insert(19, 19)
BST.insert(27, 27)
BST.insert(89, 89)
BST.insert(79, 79)
BST.insert(91, 91)
BST.insert(90, 90)

console.log(BST.postorder())
console.log(BST.dfs())
console.log(BST.preorder())

const simpleBST = new BinarySearchTree

simpleBST.insert(8, 8)
simpleBST.insert(6, 6)
simpleBST.insert(5, 5)
simpleBST.insert(7, 7)
simpleBST.insert(10, 10)
simpleBST.insert(9, 9)
simpleBST.insert(11, 11)

console.log(simpleBST.postorder())
console.log(simpleBST.dfs())
console.log(simpleBST.preorder())