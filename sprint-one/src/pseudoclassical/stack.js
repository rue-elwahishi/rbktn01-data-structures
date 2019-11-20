var Stack = function() {
 this.counter = 0;
 this.storage = {};

};

Stack.prototype.push = function(value){
 if (value === undefined){ 
      return;
    }
    this.storage[this.counter] = value;
    this.counter++;
 
}
 Stack.prototype.pop =function(){
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
 Stack.prototype.size = function(){
 	 return this.counter;
 }



