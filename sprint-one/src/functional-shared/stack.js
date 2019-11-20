
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
	
	var someInstance = {};
	someInstance.storage = {};
	someInstance.counter = 0;
	extend(someInstance, stackMethods)
	return someInstance;
  
};

var stackMethods = {};
stackMethods.push = function(value){
	  if (value === undefined){ 
      return;
    }
    this.storage[this.counter] = value;
    this.counter++;
 
}
 stackMethods.pop =function(){
 	if (this.counter === 0){
      return;
    } 
    --this.counter;
    var popped = this.storage[this.counter];
    var newStorage = {};
    for (var key  in this.storage){
     if(key !== this.counter){
      newStorage[key] = this.storage[key];
     }
    }
    this.storage = newStorage;
    return popped;
 }
 stackMethods.size = function(){
 	 return this.counter;
 }
