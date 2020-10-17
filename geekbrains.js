function convertTempreture() {
  let celsius = prompt ("Введите значение температуры в градусах Цельсия" , "0");
  alert((9 / 5) * celsius + 32);
}

function nameAdmin() {
  let name = ("Василий");
  let admin = name;
  alert(admin);
}

function typeTest() {
  let anyType = (1000 + "108");
  alert(anyType);
  alert(typeof(anyType));
}
