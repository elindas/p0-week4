

function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = []

    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {}

        obj.penumpang = arrPenumpang[i][0],
        obj.naikDari = arrPenumpang[i][1],
        obj.tujuan = arrPenumpang[i][2],
        obj.bayar

        var awal = 0
        var akhir = 0
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                awal = rute.indexOf(rute[j])
            } else if (arrPenumpang[i][2] === rute[j]) {
                akhir = rute.indexOf(rute[j])
            }
        }
        obj.bayar = (akhir - awal) * 2000
        
        result.push(obj)
    }

    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]