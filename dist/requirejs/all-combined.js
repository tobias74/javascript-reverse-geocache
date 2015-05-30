define('src/Messages',[],function(){
  return {
    getHello: function(){
      return 'Hello World';
    }
  };
});


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





define('src/caches/SimpleCache',[],function(){
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

define('src/regeca-main',['require','./Messages','./caches/SimpleCache'],function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./Messages');

    var SimpleCache = require('./caches/SimpleCache');

    console.log(messages.getHello());
});
// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: './src'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['src/regeca-main']);

define("main", function(){});

