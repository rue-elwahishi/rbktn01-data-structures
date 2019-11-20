var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var Queue = function() {
	var someInstance = {};
	someInstance.storage = {};
	someInstance.counter = 0;
	extend(someInstance, queueMethods);
	return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
    if(value === undefined){
      return;
    }
    this.storage[this.counter] = value;
    this.counter++;
};

queueMethods.dequeue = function() {
    if (this.counter === 0){
      return;
    } 
    var dequeued = this.storage[0];
    var newStorage = {};
    for(var key in this.storage){
      if(key > 0){
        newStorage[key - 1] = this.storage[key];
      }
    }
    --this.counter;
    this.storage = newStorage;
    return dequeued;
};

queueMethods.size = function() {
return this.counter;
};



