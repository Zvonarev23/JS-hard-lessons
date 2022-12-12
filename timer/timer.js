'use strict';

let firstTimer = document.getElementById('firstTimer')
let secondTimer = document.getElementById('secondTimer')
let weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
let secondDeclination = ['секунда', 'секунд', 'секунды']
let minutesDeclination = ['минута', 'минут', 'минуты']
let hoursDeclination = ['час', 'часов', 'часа']

let checkNumber = function(num) {
    if (num < 10) {
      return '0' + num

    } else {
		  return num
	  }
}

let declinationOfNumber = function(num, array) {
  num = num % 60;
  
  let sum = num % 10;

  if (num > 10 && num < 20) {
     return array[1];
  }

  if (sum > 1 && sum < 5) {
     return array[2];
  }

  if (sum == 1) {
     return array[0];
  }

  return array[1];
}

setInterval(function() {
  let date = new Date();
	secondTimer.textContent = (checkNumber(date.getDate()) + '.' + checkNumber(date.getMonth() + 1) + '.' + date.getFullYear() + ' - ' + checkNumber(date.getHours()) + ':' + checkNumber(date.getMinutes()) + ':' + checkNumber(date.getSeconds()));
}, 1000);

setInterval(function() {
  let date = new Date();
	firstTimer.innerHTML = ('Сегодня ' + declinationOfNumber(date.getDay(), weekDays) + ', ' + date.getDate() + ' ' + declinationOfNumber(date.getMonth(), months) + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' ' + declinationOfNumber(date.getHours(), hoursDeclination) + ' ' + date.getMinutes() + ' ' + declinationOfNumber(date.getMinutes(), minutesDeclination) + ' ' + date.getSeconds() + ' ' + declinationOfNumber(date.getSeconds(), secondDeclination));
}, 1000);