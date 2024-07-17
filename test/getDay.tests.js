describe('test my getDay function' , function(){
    it("it should return weekDays " , function(){
        assert.equal(getDay ('2024-06-03'), 'Monday');
        assert.equal(getDay ('2010-09-24'), 'Friday')

        // assert.deepEqual([2,2],[2,2]);
    });

});
console.log(getDay ("2023-02-15"));