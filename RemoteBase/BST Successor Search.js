// Given a node
// Find: in order successor (smallest key greater than the node key)

// Case 1: If the given node doesn't have right child
//  Find the answer on it's parent
//  - Go up until find a parent node whose key is greater than the given node
//  

// Case 2: If the given node have right child
//  - Find minimum(child.right)

// Time complexity: O(depth)
// Space complexity: O(1)

// what is brute force solution?

// Bruteforce Solution:
// node
// binarySearch(node.val + k)
// Time complexity will be O((N - M)*log(n)), where N is the answer, M is the key of the given node, n is the size of BST
  
// O(n)
  
BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
    function findMin(node) {
      while (node.left != null) { // !node.left will return true if it's null, node.left !== null, !'' -> true, !null -> true
        node = node.left;
      }
      return node;
    }
  
    if (!inputNode.right) { // just to be safer, it's equal to inputNode.right !== null
      return findMin(inputNode.right).key;
    } else {
      let { key } = inputNode; // key = inputNode.key; => {key} = inputNode; 
      while (inputNode.key <= key) {
        inputNode = inputNode.parent;
      }
      return inputNode.key;
    }
}