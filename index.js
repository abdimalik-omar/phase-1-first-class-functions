// Task 1: receivesAFunction
function receivesAFunction(callback) {
    callback();
  }
  
  // Task 2: returnsANamedFunction
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction;
  }
  
  // Task 3: returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  