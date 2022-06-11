var globalVariable = "GLOBAL";
var otherGlobalVariable = "OTHER GLOBAL";

function fooFunction() {
  var globalVariable = "A local variable!"
  return globalVariable;
}

function otherFooFunction() {
  otherGlobalVariable = "An another local variable!";
  return otherGlobalVariable;
}

console.log(globalVariable);
console.log(otherGlobalVariable);
console.log(fooFunction());
console.log(otherFooFunction());
console.log(otherGlobalVariable);
