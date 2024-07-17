describe('test my isFromGauteng function' , function(){
    it("it should return true " , function(){
        assert.equal(isFromGauteng ('DG 34 HR GP'), true);
        assert.equal(isFromGauteng ('dg 34 hr gp'), false)

        // assert.deepEqual([2,2],[2,2]);
    });

    it("it should return false " , function(){
        assert.equal(isFromGauteng ('LCM  234 NW'), false);
        assert.equal(isFromGauteng ('KLM 544 MP'), false)

        // assert.deepEqual([2,2],[2,2]);
    });
});
console.log(isFromGauteng ("CY 12 HJ GP"));