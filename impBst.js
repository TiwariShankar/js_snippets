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
    var currentVal = currentNode.data;
    
    function traverse(node){
        if(currentVal > node.data){
            if(!node.right){
                node.right = currentNode;
                return;
            }
            else traverse(node.right);
        }else if(currentVal < node.data){
            if(!node.left){
                node.left = currentNode;
                return;
            }
            else traverse(node.left);
        }
    }
    traverse(this.root);
}


var bst = new BST();
bst.add(5);
bst.add(10);
bst.add(1);

console.log('BS1', bst);