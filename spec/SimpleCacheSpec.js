'use strict';

describe("SimpleCache", function() {
  
  var simpleCache;
  
  beforeEach(function() {
    simpleCache = new ReverseGeocoderCache.Cache.SimpleCache();

    //player = new Player();
    //song = new Song();
  });

  it("should be able to store a value", function() {
    simpleCache.set('myKey','myValue');

    expect(simpleCache.get('myKey')).toEqual('myValue');
    
    //demonstrates use of custom matcher
  });

});





