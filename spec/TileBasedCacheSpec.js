'use strict';


define(['src/TileBasedCache','src/caches/SimpleCache'],function(TileBasedCache,SimpleCache){
  describe("TileBasedCache", function() {
    
    var tileBasedCache;
    
    beforeEach(function() {
      tileBasedCache = new TileBasedCache({
        prefix: 'Testing',
        tileSize: 1000,
        cache: new SimpleCache()
      });
  
    });
  
    it("should be able to store a value", function() {
      tileBasedCache.set(47,11,'myValue');
  
      expect(tileBasedCache.get(47,11)).toEqual('myValue');
      expect(tileBasedCache.get(47.00001,10.999999)).toEqual('myValue');
      expect(tileBasedCache.get(48,11)).not.toEqual('myValue');
      expect(tileBasedCache.get(57,11)).not.toEqual('myValue');
      
      //demonstrates use of custom matcher
    });
  
  });
});





