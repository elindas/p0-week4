


function checkAB(str) {
  var a=0
  var b=0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      a = i
    } else if (str[i] === 'b') {
      b = i
    }
  }
  return b - a === 4 || a - b === 4

  // atau dengan cara
  // return /a[\S\s]{3}b/.test(str)
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false