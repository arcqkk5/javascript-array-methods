'use sctrict';

//Array methods
const currentsies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['CNY', 'Chinese yuan'],
]);

const transactions = [300, 250, -500, 5000, -850, -180, 50, 1400, -350, -120];
///////////////////////////////////////////////////////////////////////////////

//1 slice(), splice()
let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
let letters2 = ['b', 'c', 'd', 'e', 'f', 'g'];
console.log(letters.slice(1));
console.log(letters.slice(1, 4)); // от и до вырезать
console.log(letters.slice(-1)); // последний элемент
console.log(letters.slice(-3, -1)); // последние 2 элемента
// const lettersCopy = letters.slice()
// const lettersCopy2 = [...letters]

// console.log(letters.splice(1)); // изменяет массив (то есть - вырезает как и slice, но прежний массив становиться другим)
// вторым параметром принимает кол-во элементов, которых мы отим удалить
console.log(letters);
//2 reverse()
console.log(letters.reverse()); // изменяет исходный массив

//3 concat()
console.log(letters.concat(letters2));

//4 join()
console.log(letters.join(', '));

console.log(letters);
console.log(letters2);

//// forEach
for (const transaction of transactions) {
  if (transaction > 0) {
    console.log(`${transaction} was deposited`);
  } else {
    console.log(`${Math.abs(transaction)} was withdrew`);
  }
}

transactions.forEach(function (transaction, index, array) {
  if (transaction > 0) {
    console.log(`Transaction ${index} : ${transaction} was deposited`);
  } else {
    console.log(`Transaction ${index} : ${Math.abs(transaction)} was withdrew`);
  }
});

///forEach c Map and Set

const uniqueCurrentsies = new Set(['1', '3', '3', '4', '12', '15']);
uniqueCurrentsies.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
  console.log(set);
});

currentsies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

///map(), filter() and reduce()
