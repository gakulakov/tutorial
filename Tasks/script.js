let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите текущую дату в формате YYYY-MM-DD", "2020-24.05");
let mustExpenses = prompt("Введите обязательную статью расходов в этом месяце.");
let howMany = prompt("Во сколько вам это обойдётся?");


let appDate = {
    budget: money,
    date: time,
    expenses: {
        mustExpenses: howMany
    },
    optionalExpenses: '',
    income: [],
    savings: false
};

alert('Ваш бюджет на день, за исключением обязательных расходов, состовляет: ' + (appDate.budget - appDate.expenses.mustExpenses) / 30 + 'руб');

