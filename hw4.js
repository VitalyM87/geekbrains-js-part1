

function hw4ex0(){ //пример из методички


   var car = {
      make: "Audi",
      model: "A5",
      year: 2015,
      color: "red",
      passengers: 2,
      power: 225,
      odometer: 0,
      engineIsStarted: false,
      startEngine: function() {
         this.engineIsStarted = true;
      },
      stopEngine: function() {
         this.engineIsStarted = false;
      },
      haveRoadTrip: function(distance) {
         if (this.engineIsStarted) {
           this.odometer += distance;
         } else {
           alert("Сначала запустите двигатель!");
         }
      }
   };

}

function hw4ex1(){

   console.log('Ответ задача 1');
        
   var max = 999;
   var digit = {
     number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
     units: 0,
     tens: 0,
     hundreds: 0,
   };
   if (digit.number <= 9){
     digit.units = digit.number;
   } else if (digit.number <= 999){
     digit.units = Math.floor(digit.number % 10);
     digit.tens = Math.floor(digit.number / 10 % 10);
     digit.hundreds = Math.floor(digit.number / 100 % 10);
   }else {
       digit.number = 0;
       console.log('Вы ввели число за диапазоном 0 - 999');
   }
   console.log(digit);

}

function hw4ex2() {

   let teeOne = {
      name: `Иммуностимулирующий`,
      price: 150,
      weight: 300,
   }
   let teeTwo = {
      name: `Антистрессовый`,
      price: 250,
      weight: 350,
   }
   let teeThree = {
      name: `Антиоксидант`,
      price: 350,
      weight: 350,
   }
   let teeFour = {
      name: `Сердце Байкала`,
      price: 450,
      weight: 400,
   }

   let basketPrice = (teeOne['price'] + teeTwo['price'] + teeThree['price'] + teeFour['price']);

   alert(`В корзине ${teeOne.name}, ${teeTwo.name}, ${teeThree.name}, ${teeFour.name}. Соимость: ${basketPrice}`);

}