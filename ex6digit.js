
function digitPerkalianMinimum(angka) {

    var faktor = []
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            faktor.push(String(i) + angka / i)
        }
    }

    var digit = [];
    for (var j = 0; j < faktor.length; j++) {
        digit.push(faktor[j].length)
    }

    var min = Math.min.apply(Math, digit);
    return min;
}



// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2