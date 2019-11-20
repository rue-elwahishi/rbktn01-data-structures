var Stack = function() {
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (value === undefined){ 
      return;
    }
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if (counter === 0){
      return;
    } 
    --counter;
    var popped = storage[counter];
    var newStorage = {};
    for (var key  in storage){
     if(key !== counter){
      newStorage[key] = storage[key];
     }
    }
    storage = newStorage;
    return popped;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
