describe('test my isFromBellville function' , function(){
    it("it should return true " , function(){
        assert.equal(isFromBellville ('CY 123'), true);
        assert.equal(isFromBellville ('cy 123'), false)

        // assert.deepEqual([2,2],[2,2]);
    });

    
    it("it should return false " , function(){
        assert.equal(isFromCapeTown('LC  234 GP'), false);
        assert.equal(isFromCapeTown ('123 44 mp'), false)

        // assert.deepEqual([2,2],[2,2]);
    });

});
console.log(isFromBellville ("CY 123"));