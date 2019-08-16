

function changeMe(arr) {

  var no = 0;
  var fullName = '';
  for (var i = 0; i < arr.length; i++) {
    no++;
    fullName = arr[i][0] + ' ' + arr[i][1];

    var person = {};
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];
    if (arr[i][3] === undefined) {
      person.age = 'Invalid Birth Year';
    } else {
      person.age = 2018 - arr[i][3];
    }
    
    console.log(no + '.' + fullName + ':');
    console.log(person);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
