describe('test my getDay function' , function(){
    it("it should return Monday " , function(){
        assert.equal(getDay ('2024-06-03'), 'Monday')
        

        // assert.deepEqual([2,2],[2,2]);
    });

    it("it should return Friday " , function(){
        assert.equal(getDay ('2010-09-24'), 'Friday')

        // assert.deepEqual([2,2],[2,2]);
    });

});
console.log(getDay ("2023-02-15"));