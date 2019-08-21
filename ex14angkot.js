

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
            if (rute.indexOf(arrPenumpang[i][1]) === -1 || rute.indexOf(arrPenumpang[i][2]) === -1) {
                obj.bayar = "rute tidak ada"
            } else if (arrPenumpang[i][1] === arrPenumpang[i][2] ) {
                obj.bayar = "keberangkatan dan tujuan tidak tepat"
            } else {
                awal = rute.indexOf(arrPenumpang[i][1])
                akhir = rute.indexOf(arrPenumpang[i][2])
                if (awal > akhir) {
                    obj.bayar = "keberangkatan dan tujuan tidak tepat"
                } else {
                    obj.bayar = (akhir - awal) * 2000
                }
            }
        }
        result.push(obj)
    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]