describe('test my greet function' , function(){
    it("it should return 'Hello, vincent' " , function(){
        assert.equal(greet("vincent"), "Hello, vincent");

        // assert.deepEqual([2,2],[2,2]);
    });

});
console.log(greet ("vincent"));
