function graduates(students) {
  var namaKelas = [];
  var hasil = {};

  // Membuat nama kelas
  for (var i = 0; i < students.length; i++) {
    var kelas = students[i].class;
    if (namaKelas.includes(kelas)) {
      continue;
    } else {
      namaKelas.push(kelas);
    }
  }

  // Membuat object dari namaKelas
  for (var j = 0; j < namaKelas.length; j++) {
    hasil[namaKelas[j]] = [];
  }

  //Mengkategorikan siswa sesuai class dan score
  for (var key in hasil) {
    for (var k = 0; k < students.length; k++) {
      var skor = students[k].score;
      if (skor > 75) {
        if (students[k].class === key) {
          hasil[key].push(students[k]);
        }
      }
    }
  }

  // Menghapus key class
  for (var key in hasil) {
    for (var l = 0; l < hasil[key].length; l++) {
      delete hasil[key][l].class;
    }
  }

  console.log(" ");
  return hasil;
}




// TEST CASE
console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
  graduates([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }

console.log(graduates([])); //{}
