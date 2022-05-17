"use strict";

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let answerOne = prompt("Введите обязательную статью расходов в этом месяце(товары,что нужно купить точно)");
let answerTwo = +prompt("Во сколько обойдется?");
let appData = {
    userMoney: money,
    timeData: time,
    expenses: {
        anwser: answerOne +":"+ answerTwo
    },
    optionalExpenses : {},
    income : [],
    savings : false
};
alert("Ваш бюджет на один день:" + answerTwo/30 + " рублей");