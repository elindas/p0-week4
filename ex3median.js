
function cariMedian(arr) {

    var indeks = 0
    var median = 0

    if (arr.length % 2 === 0) {
        indeks = arr.length / 2
        return ((arr[indeks - 1] + arr[indeks]) / 2)

    } else {
        indeks = (arr.length - 1) / 2
        return (arr[indeks])
    }

}



// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

