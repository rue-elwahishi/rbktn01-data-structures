class Stack {


  constructor() {
  	this.storage = {};
  	this.counter = 0;

  }
  push(value){
  	 if (value === undefined){ 
      return;
    }
    this.storage[this.counter] = value;
    this.counter++;
 
	}
 
  pop(){
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
 size(){
 	 return this.counter;
 }

}
