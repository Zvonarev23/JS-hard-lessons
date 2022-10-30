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

let Array = [];
Array['ru'] = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
Array['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(Array[lang]);

// 2) У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = "Александр";

namePerson === "Артем" ? console.log("Директор") : namePerson === "Александр" ? console.log("Преподаватель") : console.log("Студент");  

