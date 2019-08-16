function cariModus(arr) {

    var count = 0
    var max = 0
    var modus = 0
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                count++
                if (count > max) {
                    max = count;
                    modus = arr[i]
                }
            }
        }
    }

    var sameNumber = 1
    for (var x = 1; x < arr.length; x++) {
        if (arr[0] === arr[x]) {
            sameNumber++
        }
    } 
  
    if (modus === 0) {
        return -1;
    } else if (sameNumber === arr.length) {
        return -1
    } else {
        return modus
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
