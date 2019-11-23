 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = [];
  if(Array.isArray(this._storage.get(index))){
      arr = [...this._storage.get(index)];
  } 
  arr.push([k, v])
  this._storage.set(index, arr);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var res = this._storage.get(index);
  var res2;
  res.forEach(function(element, i){
     if(element[0] === k){
     	res2 = element[1];
     }
  });
  return res2;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(element, i, storage){
        if(index === i){
        	storage[i] = [];
        }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


