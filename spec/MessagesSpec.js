

define(['src/Messages'],function(Messages){
  describe('Messages', function(){
    it('should say hello', function(){
      expect(Messages.getHello()).toEqual('Hello World');
    });
  });
});


