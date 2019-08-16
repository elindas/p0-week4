function highestScore(students) {

    var kelas = [];
    var hasil = {};

    // Menentukan kelas
    for (var i = 0; i < students.length; i++) {
        var namaKelas = students[i].class;
        if (kelas.includes(namaKelas)) {
            continue;
        } else {
            kelas.push(namaKelas);
        }
    }

    // Meranking nilai
    for (var j = 0; j < kelas.length; j++) {
        var objStudents = {};
        var highest = 0;
        for (var k = 0; k < students.length; k++) {
            if (kelas[j] === students[k].class && students[k].score > highest) {
                highest = students[k].score;
                objStudents.name = students[k].name;
                objStudents.score = students[k].score;
            }
            hasil[kelas[j]] = objStudents;
        }
    }
    console.log(" ")
    return hasil;
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}