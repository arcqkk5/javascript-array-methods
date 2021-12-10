'use strict';

//TASK2
/**********
Вернемся к исследованию кошек Женей и Юлей. На этот раз они хотят преобразовать возраст кошек 
в человеческий возраст и вычислить средний возраст кошек в своем исследовании.
Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) 
и выполняет следующие действия по порядку:

1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, 
человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
2. Исключает всех кошек младше 18 человеческих лет.
3. Возвращает средний человеческий возраст для всех взрослых кошек. 

Вызовите функцию для обоих наборов тестовых данных.
Тестовые данные:
1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2] 
2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]
***********/

const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const verifyCats = function (catsJane, catsJulia) {
  const shallowCatsJane = [...catsJane];
  const shallowCatsJulia = [...catsJulia];
  shallowCatsJane.splice(0, 1);
  shallowCatsJane.splice(-1, 1);
  const allCats = [...shallowCatsJane, ...shallowCatsJulia];
  allCats.forEach(function (age, index) {
    let ageCats =
      age >= 2
        ? `Кошка №${index + 1} взрослая, ей ${age} лет.`
        : `Кошка №${index + 1} ещё котёнок`;
    console.log(ageCats);
  });
};

verifyCats(catsJane, catsJulia);

const catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
// const getAverageHumanAge = function (ageCatAll) {
//   const ageHuman = ageCatAll.map((age) => (age <= 2 ? age * 10 : age * 7));
//   const filterHumanAge = ageHuman.filter((age) => age >= 18);
//   const reduceHumanAge = filterHumanAge.reduce(
//     (acc, item, index, fha) =>
//       index == Object.keys(fha).length - 1
//         ? (acc + item) / (index + 1)
//         : acc + item,
//     0
//   );
//   console.log(reduceHumanAge);
// };

const getAverageHumanAge = (ageCatAll) => {
  const ageHuman = ageCatAll
    .map((age) => (age <= 2 ? age * 10 : age * 7))
    .filter((age) => age >= 18)
    .reduce(
      (acc, item, index, fha) =>
        index == Object.keys(fha).length - 1
          ? (acc + item) / (index + 1)
          : acc + item,
      0
    );
  console.log(ageHuman);
};

getAverageHumanAge(catAges);
