
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var BinarySearchTree = function(value) {
	var bst = {};
	bst.value = value;
	bst.left = null;
	bst.right = null;
	extend(bst, bstMethods);
	return bst;
};

var bstMethods = {};

bstMethods.insert = function(value){
	if(value > this.value){
        if(this.right === null){
         	this.right = BinarySearchTree(value);
        } else {
        	this.right.insert(value)
        }
	} else if(value < this.value){
		if(this.left === null){
        	this.left = BinarySearchTree(value);
        } else {
        	this.left.insert(value)
        }
	} 
}

	/* root = root || this;

    if(!!root.right.value && value < root.right.value && root.right.value.left !== undefined){
    	root.left = BinarySearchTree(value);
    } else if (value > root.right.value && root.right.value.right !== undefined) {
        root.right = BinarySearchTree(value);
    } else  if(value < root.left.value && root.left.value.left !== undefined){
    	root.left = BinarySearchTree(value);
    } else if (value > root.left.value && root.left.value.right !== undefined) {
        root.right = BinarySearchTree(value);
    } else {  
    	if(value > root.value){
    		root.insert(value, root.right)
    	} else if(value < root.value){
    		root.insert(value, root.left)
    	}
    }
    */
	


bstMethods.depthFirstLog = function(cb){
	cb(this.value)
	if(this.left !== null){
		this.left.depthFirstLog(cb)
	}
	if(this.right !== null){
		this.right.depthFirstLog(cb)
	} 
}

bstMethods.contains = function(value){
	var flag = false;
	this.depthFirstLog(function(val){
		if(value === val){
			flag = true;
		}
	});
	return flag;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
