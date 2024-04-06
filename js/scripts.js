const adultOrChild = (name, age) => {
  if (age >= 18) {
    console.log('Hola ' + name + ', eres mayor de edad.');
  } else {
    console.log('Hola ' + name + ', eres menor de edad.');
  }
};

const higherTwoNums = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1);
  } else if (num1 < num2) {
    console.log(num2);
  }
};

const negativePositiveCero = num1 => {
  if (num1 < 0) {
    console.log('Es negativo.');
  } else if (num1 > 0) {
    console.log('Es positivo');
  } else {
    console.log('Es cero.');
  }
};

const threeNotes = (note1, note2, note3) => {
  const mean = (note1 + note2 + note3) / 3;
  if (mean >= 0 && mean < 5) {
    console.log('Suspenso');
  } else if (mean >= 5 && mean < 9) {
    console.log('Aprobado');
  } else if (mean >= 8) {
    console.log('Matrícula de honor');
  }
};

const higherThreeNums = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
};

const divisibleByThreeFive = num1 => {
  if (num1 % 3 === 0 && num1 % 5 === 0) {
    console.log('Es divisible por 3 y por 5.');
  } else if (num1 % 5 === 0) {
    console.log('Es divisible por 5.');
  } else if (num1 % 3 === 0) {
    console.log('Es divisible por 3.');
  } else {
    console.log(num1);
  }
};

const oddOrEven = num1 => {
  if (num1 % 2 === 0) {
    console.log('Es un número par.');
  } else {
    console.log('Es un número impar.');
  }
};

const leapYear = year => {
  if (year % 4 === 0 && !year % 100 === 0) {
    console.log('Es un año bisiesto.');
  } else {
    console.log('No es un año bisiesto.');
  }
};

const addValues = (val1, val2) => {
  if (typeof val1 === 'string') {
    val1 = Number(val1);
  } else if (typeof val2 === 'string') {
    val2 = Number(val2);
  }

  const add = val1 + val2;
  console.log(add);
};

adultOrChild('Perico', 24);

higherTwoNums(29, 12);

negativePositiveCero(33);

threeNotes(9, 9, 10);

higherThreeNums(43, 10, 98);

divisibleByThreeFive(30);

oddOrEven(4);

leapYear(2020);

addValues(8, '10');