class Queue {

  constructor() {
  	this.storage = {};
  	this.counter = 0;
  }
  enqueue(value) {
    if(value === undefined){
      	return;
    }
    this.storage[this.counter] = value;
    this.counter++;
};

   dequeue() {
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

   size() {
		return this.counter;
	};

}
