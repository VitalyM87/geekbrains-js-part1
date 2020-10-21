
function hw3ex1() {
    let arr = [];
    let num = 1;
  
    function isPrime(num) {
      let i = 2;
      while (i < num) {
        if (num % i === 0) {
          return false;
          break;
        }
        i++;
      }
      return true;
    }
  
    while (num < 100) {
  
      if (isPrime(num)) {
        arr.push(num);
      }
      num++;
    }
  
    alert(arr);
  }
  

  function hw3ex2() {
    let basket = [100, 200, 300, 400];
  
    let result = basket.reduce(function(sum, current) {
      return sum + current
    });
  
    alert(result);
  
    //function countBasketPrice(array) {
    //let arrLength = array.length;
    //let i = 0;
    //let summ = 0;
    //while (i < arrLength) {
    //  summ = summ + array[i];
    //  i++;
    //}
    //return summ;
    //}
  
    //let x = countBasketPrice(basket);
  }