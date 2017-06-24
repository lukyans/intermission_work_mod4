const assert = require('chai').assert
const add = require('../node-sandbox/add')

describe('add functionality', function() {
  context('add function', function(){
    it('it can add two numbers', function(){
      assert.equal(add(7,8), 15)
    })
  })
})