const num = 266219;
const stringNum = num.toString();
let total = 1;
for (let step = 0; step < stringNum.length; step++) {
  const digit = stringNum[step]; // Когда step = 0, то переменная digit будет равна 2
  total = digit * total;
}
console.log(total + " произведение всех цифр числа " + num);
const expTotal = total ** 3;
const strExpTotal = expTotal.toString();
console.log(expTotal + " полученное число возведенное в степень 3");
console.log(strExpTotal[0] + strExpTotal[1]);
