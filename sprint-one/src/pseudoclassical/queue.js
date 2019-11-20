var Queue = function() {
 this.storage =  {};
 this.counter = 0;

};
 Queue.prototype.enqueue  = function(value) {
    if(value === undefined){
      return;
    }
    this.storage[this.counter] = value;
    this.counter++;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
return this.counter;
};





