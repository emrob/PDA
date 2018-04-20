var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal);
  })

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(8, calculator.runningTotal);
  })

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(2, calculator.runningTotal);
  })

  it('can take in large numbers with multiple number clicks', function(){
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(6);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(300000, calculator.runningTotal);
  })

  it('can use multiple operators', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(2.5, calculator.runningTotal);
  })

  it('can clear', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
      calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

  it('can clear mid calculation', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
  })



});
