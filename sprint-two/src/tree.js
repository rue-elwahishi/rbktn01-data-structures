var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  
  newTree.children = [];  


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
         this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	if(this.value === target){
		return true;
	} else {
		for(var key in this.children){
        if (this.children[key].contains(target)){
        	return true;
        }

		}

	}
	return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


