
(function(context){
  var SimpleCache = function(){
    this.cache = {};
  };
  

  SimpleCache.prototype.get = function(key){
    return this.cache[key];
  };
  
  SimpleCache.prototype.set = function(key, value){
    this.cache[key] = value;
  };
  
  context.SimpleCache = SimpleCache;
})(window);





define(function(){
  var cache = {};
  return {
    get: function(key){
      return cache[key];
    },
    set: function(key,value){
      cache[key] = value;
    }
  };
});
