// 1. Создать массив «Список покупок».
// Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.
// Написать несколько функций для работы с таким массивом.
let shoppingList = [
  { name: "bread", amount: 2, isBought: true },
  { name: "milk", amount: 3, isBought: false },
  { name: "cookies", amount: 1, isBought: true },
  { name: "porridge", amount: 4, isBought: false },
  { name: "juice", amount: 3, isBought: false },
  { name: "nutella", amount: 5, isBought: false },
];

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// function sortByIsBought(arr) {
//   arr.sort((a, b) => {
//     return a.isBought - b.isBought;
//   });
//   return arr;
// }
// console.log(sortByIsBought(shoppingList));

// Добавление покупки в список.
// Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// function addItem(arr, item) {
//   let pushed = false;
//   for (let i of arr) {
//     if (item.name === i.name) {
//       i.amount += 1;
//       pushed = true;
//     }
//   }
//   if (!pushed) {
//     arr.push(item);
//   }
//   return arr;
// }
// console.log(addItem(shoppingList, { name: "pineapple" }));
// console.log(addItem(shoppingList, { name: "bread" }));

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
// function buy(arr, product) {
//   for (let i of arr) {
//     if (product.name === i.name) {
//       i.isBought = true;
//     }
//   }
//   return arr;
// }
// console.log(buy(shoppingList, { name: "milk" }));

// 2. Создать массив, описывающий чек в магазине.
// Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
let receipt = [
  { name: "bread", amount: 2, price: 15 },
  { name: "milk", amount: 3, price: 30 },
  { name: "cookies", amount: 1, price: 50 },
  { name: "porridge", amount: 4, price: 30 },
  { name: "juice", amount: 3, price: 35 },
  { name: "nutella", amount: 5, price: 100 },
];

// Распечатка чека на экран;
// function printReceipt(arr) {
//   for (let i of arr) {
//     console.log(`${i.name} ${i.price} x ${i.amount} = ${i.amount * i.price}`);
//   }
// }
// printReceipt(receipt);

// Подсчет общей суммы покупки;
// THIS FUNCTION SHOULD BE UNCOMMENTED IN countAverageCost FUNCTION!!!
function countSum(arr) {
  let result = 0;
  for (let i of arr) {
    result += i.amount * i.price;
  }
  return result;
}
// console.log(countSum(receipt));

// Получение самой дорогой покупки в чеке;
// function getMostExpensive(arr) {
//   let cost = 0,
//     max = 0;
//   for (let i of arr) {
//     cost = i.amount * i.price;
//     if (cost > max) {
//       max = cost;
//     }
//   }
//   return max;
// }
// console.log(getMostExpensive(receipt));

// Подсчет средней стоимости одного товара в чеке.
// function countAverageCost(arr) {
//   let amount = 0;
//   for (let i of arr) {
//     amount += i.amount;
//   }
//   let result = countSum(arr) / amount;
//   return result.toFixed(2);
// }
// console.log(countAverageCost(receipt));

// 3.Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
let styleText = [
  { name: "color", value: "#DC143C" },
  { name: "font-family", value: "Times New Roman" },
  { name: "font-size", value: "60px" },
  { name: "text-align", value: "center" },
  { name: "font-weight", value: "bold" },
];
// function addToPage(arrStyle, text) {
//   let style = "";
//   for (let arrayItem of arrStyle) {
//     style += `${arrayItem.name}: ${arrayItem.value}; `;
//   }
//   document.write(`<p style="${style}">${text}</p>`);
// }
// addToPage(styleText, "Example");

// 4. Создать массив аудиторий академии.
// Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним:
let classrooms = [
  { name: "yellow", seats: 19, faculty: "Front-End Development" },
  { name: "green", seats: 20, faculty: "UI/UX Design" },
  { name: "blue", seats: 17, faculty: "Python" },
  { name: "pink", seats: 15, faculty: "Back-End Development" },
  { name: "magenta", seats: 18, faculty: "UI/UX Design" },
  { name: "violet", seats: 13, faculty: "Back-End Development" },
  { name: "light-blue", seats: 11, faculty: "Front-End Development" },
];

// Вывод на экран всех аудиторий;
// function showClassrooms(arr) {
//   for (let i of arr) {
//     console.log(
//       `Classroom: ${i.name}. ${i.seats} seats. For faculty "${i.faculty}".`
//     );
//   }
// }
// showClassrooms(classrooms);

// Вывод на экран аудиторий для указанного факультета;
// function showClassForFaculty(arr, faculty) {
//   for (let obj of arr) {
//     if (faculty === obj.faculty) {
//       console.log(`Classroom ${obj.name} is suitable for this faculty.`);
//     }
//   }
// }
// showClassForFaculty(classrooms, "Front-End Development");

// Вывод на экран только тех аудиторий, которые подходят для переданной группы.
// Объект-группа состоит из названия, количества студентов и названия факультета;
// function showClassForGroup(arr, group) {
//   for (let obj of arr) {
//     if (obj.seats >= group.number && obj.faculty === group.faculty) {
//       console.log(`Classroom ${obj.name} is suitable for this group.`);
//     }
//   }
// }
// showClassForGroup(classrooms, {
//   name: "group1",
//   number: 19,
//   faculty: "UI/UX Design",
// });

// Функция сортировки аудиторий по количеству мест;
// function sortBySeats(arr) {
//   arr.sort((a, b) => {
//     return a.seats - b.seats;
//   });
//   return arr;
// }
// console.log(sortBySeats(classrooms));

// Функция сортировки аудиторий по названию (по алфавиту).
// function sortByName(arr) {
//   arr.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
//   return arr;
// }
// console.log(sortByName(classrooms));
