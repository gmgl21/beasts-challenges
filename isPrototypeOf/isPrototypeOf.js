//Function signature:
//isPrototypeOf(prototypeObj, object)

// Parameters:
//   prototypeObj. Required. An object prototype.
//   object. Required. Another object whose prototype chain is to be checked.

// Return Value:
//   Returns a boolean indicating whether the calling object lies in the prototype chain of the specified object.

// Errors thrown:
//   Throw a TypeError if prototypeObj is undefined or null.

// Description:
//   The isPrototypeOf() method allows you to check whether or not an object exists within another object's prototype chain.

// If object has prototype in its prototype chain, return true.
// If object is not an object or when prototype does not appear in the prototype chain of the object, return false.
(function(){
  function isPrototypeOf(prototypeObj, object) {
    var protoChainObj = Object.getPrototypeOf(object);
    if (prototypeObj === null || prototypeObj === undefined) {
      throw new TypeError(prototypeObj + 'is null or undefined.');
    }
    if (protoChainObj === null || protoChainObj === undefined) {
      return false;
    }
    if (prototypeObj === protoChainObj) {
      return true;
    } else {
      return isPrototypeOf(prototypeObj, protoChainObj);
    }
  }
  window.isPrototypeOf = isPrototypeOf;
}) ();
