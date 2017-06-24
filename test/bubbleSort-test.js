const assert = require('chai').assert
const bubbleSort = require('../node-sandbox/bubbleSort')

describe('bubbleSort functionality', function() {
    it('it can sort five numbers', function(){
      assert.isFunction(bubbleSort)
      assert.equal(bubbleSort([2, 1, 5, 4, 3]), [1, 2, 3, 4, 5])
    })
})
