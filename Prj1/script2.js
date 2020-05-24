console.log(typeof('q' + false));
console.log('http://vk.com/catalog/' + 5);

// - to Number

// 1)
console.log(typeof(Number('5'))) 

// 2)
console.log(typeof(5 + + '5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt('Hello?', '');

// 0, '', null, undefined, NaN = false

// Всё остальное = true


// 1.!

let swithcer = null;

if(swithcer) {
    console.log('Working...');
} else {
    console.log("Its not a working!");
}

// 2.!

console.log(typeof(Boolean('5'))); // Превращает переданные данные в Булево значение 

// 3.!

console.log(typeof(!!'5')); // Тоже превращает переданные данные в Булево значение 