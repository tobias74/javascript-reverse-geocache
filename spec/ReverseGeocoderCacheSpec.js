'use strict';


define(['src/ReverseGeocoderCache'],function(ReverseGeocoderCache){
  var reverseGeocoderCache;
  
  beforeEach(function() {
    reverseGeocoderCache = new ReverseGeocoderCache();

  });

  it("it should be able to hello world in heree", function() {
    expect(0).toEqual(0);

    //expect(reverseGeocoderCache.sayHello()).toEqual('hello');
    
    //demonstrates use of custom matcher
  });
  
  it("22222it should be able to hello world in heree", function() {
    expect(0).toEqual(0);

    expect(reverseGeocoderCache.sayHello()).toEqual('hello');
    
    //demonstrates use of custom matcher
  });
  
  
});

