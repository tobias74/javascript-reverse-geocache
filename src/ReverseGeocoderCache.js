
(function(ReverseGeocoderCache){
  var Client = function(options){
    var self = this;
    
    options = options || {};
    this.options = {};
    this.options.tileBasedCache = options.tileBasedCache || {};
    this.options.dataProvider = options.dataProvider || {};
    
    this.sayHello = function(){
      return "hello";
    };
    
    this.get = function(lat,lng,callback){
      if (self.options.tileBasedCache.exists(lat,lng)){
        var data = JSON.parse(self.options.tileBasedCache.get(lat,lng));
        if (data.status == 'OK'){
          callback(data.content);
        }
        else {
          callback(null);
        }
      }
      else {
        self.options.dataProvider.retrieveData(lat, lng, function(data){
          if (data.status === 'OK'){
            self.options.tileBasedCache.set(lat,lng,JSON.stringify(data));
            callback(data.content);      
          }
          else if (data.status === 'DONT_REPEAT'){
            self.options.tileBasedCache.set(lat,lng,JSON.stringify(data));
            callback(null);
          }
          else {
            callback(null);
          }
        });
      }
    };
  
  };

  ReverseGeocoderCache.Client = Client;
  
})(window.ReverseGeocoderCache = window.ReverseGeocoderCache || {});
