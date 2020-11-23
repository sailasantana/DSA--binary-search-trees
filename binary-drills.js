  
'use strict';

const BinarySearchTree = require('./BinarySearchTree');

/* ============ 1. Draw a BST ========== */

//https://www.figma.com/file/H381or7CF5HzJGqpwkbBI6/Binary-Search-Trees?node-id=0%3A1

/* ============ 2. Removed Node ========== */

//Show how the above trees would look
// like if you deleted the root of each tree.
 

//https://www.figma.com/file/H381or7CF5HzJGqpwkbBI6/Binary-Search-Trees?node-id=0%3A1


/* ============ 3.Create BST Class ========== */

//see binary-class.js

//Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. 
//Compare your result with the result from the 1st exercise.
function numberTree() {
    const BST = new BinarySearchTree();

    BST.insert("3", "3");
    BST.insert("1", "1");
    BST.insert("4", "4");
    BST.insert("6", "6");
    BST.insert("9", "9");
    BST.insert("2", "2");
    BST.insert("5", "5");
    BST.insert("7", "7");

    return BST;
}

// console.log(numberTree()); ?



//Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. 
//Compare your result with the result from the 1st exercise.

function letterTree() {
    const BST = new BinarySearchTree();

    BST.insert('E', 'E');
    BST.insert('A', 'A');
    BST.insert('S', 'S');
    BST.insert('Y', 'Y');
    BST.insert('Q', 'Q');
    BST.insert('U', 'U');
    BST.insert('E', 'E');
    BST.insert('S', 'S');
    BST.insert('T', 'T');
    BST.insert('I', 'I');
    BST.insert('O', 'O');
    BST.insert('N', 'N');

    return BST;
}

// console.log(letterTree());



/* ============ 4. What does this function do? ========== */

//*explain before you run*

//if there are no values in the tree, return 0. 
//if there are values in the left and right branches, add them together for the sum. 

//runtime : O(log(n)) or O(n)  depending on if the tree is skewed or balanced.



function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

/* ============ 5. Height of BST ========== */

//Write an algorithm to find the height of a binary search tree. 
//What is the time complexity of your algorithm?

//runtime : O(log(n)) or O(n)  depending on if the tree is skewed or balanced.


function findHeight(tree) {
    if (!tree) {
        return 0;
    }

    if (!tree.left && !tree.right) {
        return 1;
    }

    let height = 0;

    if (tree.right) {
        let rightHeight = 1 + findHeight(tree.right);

        if (rightHeight > height) {
            height = rightHeight;
        }
    }
    
    if (tree.left) {
        let leftHeight = 1 + findHeight(tree.left);
        
        if (leftHeight > height) {
            height = leftHeight;
        }
    }
    return height;
}

//console.log(findHeight(letterTree()));
//console.log(findHeight(numberTree()));

/* ============6. Check if BST ========== */

//Write an algorithm to check whether an arbitrary binary tree is a binary search tree,
// assuming the tree does not contain duplicates.


//runtime : O(log(n)) or O(n)  depending on if the tree is skewed or balanced.


function checkBST(tree) {
    if (!tree) {
        return false;
    }

    if (tree.right) {
        if (tree.right.key > tree.key) {
            checkBST(tree.right);
        }
        else {
            return false;
        }
    }

    if (tree.left) {
        if (tree.left.key < tree.key) {
            checkBST(tree.left);
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(checkBST(numberTree()));
console.log(checkBST(letterTree()));


 

