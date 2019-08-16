function angkaPrima(angka) {

    if (angka===1) {
        return false
      } else if(angka === 2){
        return true;
      }else {
        for(var x = 2; x < angka; x++){
          if(angka % x === 0){
            return false;
          }
        }
        return true;  
      }

}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false