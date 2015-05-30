'use strict';


describe("ReverseGeocoderCache", function() {
  
  var reverseGeocoderCache;
  
  beforeEach(function() {
    reverseGeocoderCache = new ReverseGeocoderCache();

  });

  it("it should be able to hello world", function() {
    expect(0).toEqual(0);

    expect(reverseGeocoderCache.sayHello()).toEqual('hello');
    
    //demonstrates use of custom matcher
  });

});
