
function digitPerkalianMinimum(angka) {

    var faktor = []
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            faktor.push(String(i) + angka / i)
        }
    }
    
    var digitMin = faktor[0].length
    for(var i=0; i<faktor.length; i++){
        if(faktor[i].length < digitMin){
            digitMin = faktor[i].length
        }
    }

    return digitMin
}



// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2