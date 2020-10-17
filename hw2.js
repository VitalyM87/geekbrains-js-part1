function conditionFirst() {
    let a = +prompt('Введите значение переменной А', '1');
    let b = +prompt('Введите значение переменной B', '1');
    if (a > 0 && b > 0) {
      let c = (a - b);
      alert('A и B положительные, их разность равна ' + c);
    } else {
      if (a < 0 && b < 0) {
        c = (a * b);
        alert('A и B отрицательные, их произведение равно ' + c);
      } else {
        c = (a + b);
        alert('A и B c разными знаками, их сумма равна ' + c);
      }
    }
  }
  
  
  function hw2ex4() {
    let a = Math.round(Math.random() * 100);
    if (a > 15) {
      hw2ex4();
    } else {
      alert(`Сгенерирована переменная А со значением ${a}`);
      switch (a) {
        case 0:
          alert('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 1:
          alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 2:
          alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 3:
          alert('3 4 5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 4:
          alert('4 5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 5:
          alert('5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 6:
          alert('6 7 8 9 10 11 12 13 14 15');
          break;
        case 7:
          alert('7 8 9 10 11 12 13 14 15');
          break;
        case 8:
          alert('8 9 10 11 12 13 14 15');
          break;
        case 9:
          alert('9 10 11 12 13 14 15');
          break;
        case 10:
          alert('10 11 12 13 14 15');
          break;
        case 11:
          alert('11 12 13 14 15');
          break;
        case 12:
          alert('12 13 14 15');
          break;
        case 13:
          alert('13 14 15');
          break;
        case 14:
          alert('14 15');
          break;
        case 15:
          alert('15');
          break;
      }
    }
  }
  
  function hw2ex5and6() {
    let a = +prompt('Введите значение переменной А', '1');
    let b = +prompt('Введите значение переменной B', '1');
    let mathOperation = prompt('Введите символ математической операции, которую хотите совершить с этими числами: +, -, * или /');
    let result = 0;
    switch (mathOperation) {
      case '+':
        function sum(a, b) {
          return (a + b);
        };
        result = sum(a, b);
        alert(`Сумма чисел ${result}`);
        break;
      case '-':
        function dif(a, b) {
          return (a - b);
        };
        result = dif(a, b);
        alert(`Разность чисел ${result}`);
        break;
      case '*':
        function mult(a, b) {
          return (a * b);
        };
        result = mult(a, b);
        alert(`Произведение чисел ${result}`);
        break;
      case '/':
        function div(a, b) {
          return (a / b);
        };
        result = div(a, b);
        alert(`Частное чисел ${result}`);
        break;
      default:
        alert('Что-то пошло не так');
    }
  }
  
  function hw2ex7() {
    let a = 0;
    let b = null;
  
    switch (a == b) {
      case (true):
        alert('case true');
        break;
      case (false):
        alert('case false');
        break;
      default:
        alert('default');
    }
  }
  
  function hw2ex8() {
  
    function power(val, pow) {
      if (pow == 1) {
        return val;
      } else {
        return val * power(val, pow - 1);
      }
    }
  
    alert(power(6, 3));
  }
  