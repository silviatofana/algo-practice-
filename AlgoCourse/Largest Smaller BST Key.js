*********************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/


// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  // your code goes here
  //9
  //5
  
 //step 1:  traverse from the left most side of the tree
// step 2: visit every nodes 
 //step 3: if we encounter a number that is less than 17
  /* 
  function findInOrderSuccessor(inputNode):
    if (inputNode.right != null):
        # return the node with minimum key in the right subtree
        return findMinKeyWithinTree(inputNode.right)

    ancestor = inputNode.parent
    child = inputNode

    # travel up using the parent pointer until you see
    # a node which is the left child of its parent. The parent
    # of such a node is successorNode.
    while (ancestor != null AND child == ancestor.right):
        child = ancestor
        ancestor = child.parent

    return ancestor

function findMinKeyWithinTree(inputNode):
    while (inputNode.left != null):
        inputNode = inputNode.left

    return inputNode
   
    */
  /* 
  Time Complexity: we scan the tree once from the root to the leaves and do a constant number of actions for each node. If the tree is balanced the complexity is 0(log(N)). Otherwise, it could be up to 0(N).
  Space complexity : throughout the entire algorithm we used only a constant amount of space, hence the space complexity is 0(1) */
  
  let node = this.root;
  let result = -1;
  while (node) {
    if (num>node.key) {
      result = node.key;
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return result;

}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(17);

console.log("Largest smaller number is " + result);
