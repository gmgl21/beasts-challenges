(function() {
  function toFixed(value, precision) {
    value = moveDecimal(value, precision)
	  value = Math.round(value);
	  value = moveDecimal(value, -precision);
	  return value;
  }
  function moveDecimal(value, precision){
    if (typeof value === 'number') {
      // If the value is a number convert it to a string.
      value = String(value);
    }
    // Convert string to array
    var numArr = value.split('');
    // Position of the decimal
    var decimalPosition = numArr.indexOf('.');
    // If there is no decimal, put decimal position to numArr.length
    if (decimalPosition === -1) {
      decimalPosition = numArr.length;
    } else {
      //If decimal exists, remove the decimal
      numArr.splice(decimalPosition, 1);
    }
    // Create new decimal position by adding decimalPosition to precision
    var newDecimalPosition = decimalPosition + precision;
    // If newDecimalPosition is greater than numArr.length, add zeros end of the array
    if (newDecimalPosition > numArr.length) {
      while (newDecimalPosition > numArr.length){
        numArr.push('0');
      }
    }
    // If newDecimalPosition is less than 1, add zeros beginning of the array
    if (newDecimalPosition < 1) {
      while (newDecimalPosition < 1) {
        numArr.unshift('0');
        newDecimalPosition++;
      }
    }
    // Add decimal to the new poisition in the array
      numArr.splice(newDecimalPosition, 0, '.');
      return numArr.join('');
  }
  window.toFixed = toFixed;
  window.moveDecimal = moveDecimal;
})();
