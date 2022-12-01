'use strict';

// Задание 1

// 1) Создать переменную num со значением 266219

let num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа

// Переводим число в строку и разрезаем на элементы массива
let arr = (String(num).split(''));
console.log(arr);

// Перемножаем элементы в массиве
let res = arr.reduce((acc, rec) => acc * rec);
console.log(res);

// 3) Полученный результат возводим в степень 3, используя 1 оператор

let degree = res ** 3; 

// Выводим в консоль первые 2 цифры полученного числа
let result = Number(String(degree).slice(0, 2)); 

console.log(result);

// Задание 2

// 1) Переменная lang может принимать 2 значения: 'ru' 'en'.

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//  a) через if,
//  b) через switch-case
//  c) через многомерный массив без ифов и switch.

let lang = "ru";

//  a) через if

if (lang == "ru") {
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
} else {
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
}

//  b) через switch-case

switch (lang) {
  case "ru":
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
    break
  case "en":
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
    break
}

//  c) через многомерный массив без ифов и switch.

let array = [];
array['ru'] = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
array['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(array[lang]);

// 2) У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = "Александр";

namePerson === "Артем" ? console.log("Директор") : namePerson === "Александр" ? console.log("Преподаватель") : console.log("Студент");  


// Задание 3

let message = "Какая-то подстава с underfined";

let getString = function(str) {
  if (typeof str === 'string' && str.length <= 30) {
    return str.trim()

  } else if (str.length > 30) {
    return str.trim().substring(0, 29) + "..."

  } else {
    console.log("Тип аргумента не строка") 
  }
}

console.log(getString(message));


// Задание 4 

// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

let numbers = ["21", "53", "167", "425", "14", "88", "637"];

for (let key of numbers) {
  let number = (key)[0];
  
  if (number == 2 || number == 4) {
    console.log(key);
  } 
}

// 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
// — Статья про простые числа - КЛИК
// — Рядом с каждым числом написать оба делителя данного числа

// Например: “Делители этого числа: 1 и n”

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(i, "Делители этого числа: 1 и " + i); // простое число
}


// Сложная домашка 6

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
let element = document.getElementById('week');
let data = new Date();
let todayIndex = (6 + data.getDay()) % 7;

let showDaysOnScreen = function () {
    week.forEach(function (item, i) {
        let newDiv = document.createElement('div');
        element.append(newDiv);
    
        if (i === todayIndex) {
            newDiv.style.fontWeight = 'bold'
            newDiv.textContent = week[i];
        }
    
        if (
            item == 'Суббота' 
            || item == 'Воскресенье'
        ) {
            newDiv.style.fontStyle = 'italic';
            newDiv.textContent = week[i];
        } else {
            newDiv.textContent = week[i];
        }
    });
}

showDaysOnScreen()


