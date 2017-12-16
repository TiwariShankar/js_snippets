//binary search implementation
'use strict';

function BST(){
    this.root = null;    
}

BST.prototype.makeNode = function(val){
    var node = {};
    node.data = val;
    node.left = undefined;
    node.right = undefined;
    return node;
}

BST.prototype.add = function(val){
    var currentNode = this.makeNode(val);
    if(!this.root){
        this.root = currentNode;
    }else{
        this.insertNode(currentNode);
    }
    return this;
}

BST.prototype.insertNode = function(currentNode){
    function traverse(root){
        if(root.data > currentNode.data){
            if(!root.left){
                root.left = currentNode;
            }else{
                traverse(root.left);
            }
            return;
        }else if(root.data < currentNode.data){
            if(!root.right){
                root.right = currentNode;
            }else{
                traverse(root.right);
            }
            return;
        }
    }

    traverse(this.root);
}

BST.prototype.getDepth = function(){
    var maxDepth = 0;
    var node = this.root;

    function traverseNode(node, depth){
       if(!node) return null;
       if(node){
            maxDepth = depth > maxDepth ? depth : maxDepth;
            traverseNode(node.left, depth + 1);
            traverseNode(node.right, depth + 1);
       }
    }

    traverseNode(node, 0); 
    return maxDepth;
}

BST.prototype.countLeaves = function(){
    var node = this.root;
    var count = 0;

    function traverse(node){
        if(!node) return null;
        if((!node.left && !node.right)){
            count += 1;
        }
        else traverse(node.left) + traverse(node.right);
    }

    traverse(node); 
    return count;
}

BST.prototype.findMax = function(){
    function traverse(currentNode){
        if(currentNode === null) return null;
        if(!currentNode.right) return currentNode.data;
        else traverse(currentNode);
    }
    traverse(this.root);
}

BST.prototype.preorder = function(){
    var finalResult = [];
    function traverse(currentNode){
        finalResult.push(currentNode.data);
        if(currentNode.left) {
            traverse(currentNode.left)
        };
        if(currentNode.right){
            traverse(currentNode.right);
        } 
    }
    traverse(this.root);
    return finalResult;
}

BST.prototype.inorder = function(){
    var finalResult = [];
    function traverse(currentNode){
        if(currentNode.left) {
            traverse(currentNode.left)
        }
        finalResult.push(currentNode.data);
        if(currentNode.right){
            traverse(currentNode.right);
        } 
    }
    traverse(this.root);
    return finalResult;
}

BST.prototype.postorder = function(){
    var finalResult = [];
    function traverse(currentNode){
        if(currentNode.left) {
            traverse(currentNode.left)
        }
        if(currentNode.right){
            traverse(currentNode.right);
        }
        finalResult.push(currentNode.data);
    }
    traverse(this.root);
    return finalResult;
}


BST.prototype.invertTree = function(){
    var temp;

    function invert(node){
        if(!node) return;

        temp = node.left;
        node.left = node.right;
        node.right = temp;

        if(node.left) invert(node.left);
        if(node.right) invert(node.right)
    }

    invert(this.root);
    return this.root;
}


var bst = new BST();
bst.add(4);
bst.add(2);
bst.add(1);
bst.add(3);
bst.add(7);
bst.add(6);
bst.add(9);

console.log('Original Tree:', bst);
//console.log('Get Depth:', bst.getDepth());
//console.log('Count Leaves:', bst.countLeaves());
//console.log('Maximum Value:', bst.findMax());
//console.log('Preorder traversal', bst.preorder());
//console.log('Inorder traversal', bst.inorder());
//console.log('Post traversal', bst.postorder());
console.log('\n Invert Tree', bst.invertTree());