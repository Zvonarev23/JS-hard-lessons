'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

let randomNumber = function (min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

let gameLaunch = function (randNumber, y) {

  function bot() {
      const question = prompt("Угадай число от 1 до 100");
      
      if (question === null) {
          alert("Игра окончена");

      } else if (y > 0 && question < randNumber) {
          y--
          confirm("Загаданое число больше, осталось попыток" + " " + y)
          bot()
          
      } else if (y > 0 && question > randNumber) {
          y--
          confirm("Загаданое число меньше, осталось попыток" + " " + y)
          bot()

      } else if (question == randNumber) {
          let guess = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          
          if (guess === true) {
            gameLaunch(randomNumber(), 10)
            bot()
          } else {
            alert("Игра окончена")
          }
          
      } else if (y == 0 ) {
          let attemptsOver = confirm("Попытки закончились, хотите сыграть еще?")
          
          if (attemptsOver === true) {
            gameLaunch(randomNumber(), 10)
            bot()
          } else {
            alert("Игра окончена")
          }
          
      } else if (!isNumber(question)) {
          alert("Введи число!");
          bot()
      }
  }
  
  bot()
}

gameLaunch(randomNumber(), 10)
