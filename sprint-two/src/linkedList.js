var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null){
      list.head = node;
      list.tail = node;
    }
    else { 
      list.tail.next = node;
      list.tail = node;

    }

  };

  list.removeHead = function() {
    if(list.head === null){
      return;
    }
    var removed = list.head.value;
    list.head = list.head.next;

    return removed;

   } 


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null){
      list.head = node;
      list.tail = node;
    }
    else { 
      list.tail.next = node;
      list.tail = node;

    }

  };

  list.removeHead = function() {
    if(list.head === null){
      return;
    }
    var removed = list.head.value;
    list.head = list.head.next;

    return removed;

   } 






  list.contains = function(target) {

    var whatever = this.head;
    while(whatever.next !== null){

      if(whatever.value === target || whatever.next.value === target){
        return true;
      }
       whatever = whatever.next;
      }

   return false;
    }
   

  

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



  list.contains = function(target) {

    var whatever = this.head;
    while(whatever.next !== null){

      if(whatever.value === target || whatever.next.value === target){
        return true;
      }
       whatever = whatever.next;
      }

   return false;
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
