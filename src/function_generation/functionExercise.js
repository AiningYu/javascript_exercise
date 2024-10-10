// 1. 函数声明练习
// 编写一个函数 greeting，接受一个参数 name，输出 "Hello, [name]!"，如果未提供参数，则输出 "Hello, World!"。
//
function greeting(name) {
    if (name === null || name === undefined) {
        console.log('Hello, World!');
        return;
    }
    console.log('Hello, ' + name + '!');
}
console.log('first exercise');
greeting('Kitty');
greeting();

function greeting1(name = 'World') {
    console.log(`Hello, ${name}!`);
}

// 2. 函数表达式练习
// 使用函数表达式创建一个函数 add，接收两个参数并返回它们的和。
//
const add = function (number1, number2) {
    console.log(this);
    return number1 + number2;
}
console.log('second exercise');
console.log(add(1,1));
console.log(add());
//NaN
console.log(add(1));
//NaN

// 3. 箭头函数练习
// 使用箭头函数创建一个函数 multiply，接收两个参数并返回它们的乘积。
//
const multiply = (num1, num2) => {
    console.log(this);
    return num1 + num2;
}
console.log('third exercise');
console.log(multiply(1,2));

// 4. 构造函数练习
// 编写一个构造函数 Person，接受 name 和 age 两个参数，并定义一个方法 greet，可以输出 "Hello, my name is [name] and I am [age] years old."。
//
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, my name is ${name} and I am ${age} years old.`;
    };
}
console.log('fourth exercise');
const person1 = new Person('John');
const person2 = new Person('Doe', 25);
console.log(person1.greet());
//Hello, my name is John and I am undefined years old.
console.log(person2.greet());

// 5. 立即执行函数表达式 (IIFE) 练习
// 编写一个立即执行函数表达式 (IIFE)，计算两个数字的和并输出结果。
//
console.log('fifth exercise');
(function (a, b) {
    console.log(a + b);
})(1,2);


// 6. 对象方法练习
// 创建一个对象 calculator，它有两个方法：
//
// add(a, b)：返回两个数字的和
// subtract(a, b)：返回两个数字的差
const calculator = {
    add: function (number1, number2) {
        return number1 + number2;
    },
    substract: function (number1, number2) {
        return number1 - number2;
    }
}
console.log('sixth exercise');
console.log(calculator.add(5));
console.log(calculator.add(5,1));
console.log(calculator.add());
console.log(calculator.substract(5,2));
console.log(calculator.substract(5));
console.log(calculator.substract(1,2));

// 7. 生成器函数练习
// 编写一个生成器函数 counter，每次调用时返回递增的整数，从 1 开始。
//
function* counter() {
    let x = 1;
    while (true) {
        yield x++;
    }
}
const myCounter = counter();
console.log('seventh exercise');
for (let i = 0; i < 10; i++) {
    console.log(myCounter.next());
}

// 8. 生成器与 yield 练习
// 编写一个生成器函数 range，接收两个参数 start 和 end，并生成从 start 到 end（包含）的数字。
//
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
const myRange = range(33, 50);
console.log('eighth exercise');
for (let i = 0; i < 10; i++) {
    console.log(myRange.next());
}

// 9. 箭头函数与 this 练习
// 创建一个对象 timer，它有一个方法 start，使用箭头函数在 1 秒后输出 "Timer done"。
//
const timer = {
    start: () => {
        setTimeout(()=>{console.log('time done')}, 1000);
        setTimeout(()=>{console.log(this)}, 2000);
    }
}
console.log('eighth exercise');
timer.start();

// 10. 对象方法与普通函数的 this 练习
// 创建一个对象 user，它有一个属性 name，以及一个方法 sayHello，该方法使用普通函数在 1 秒后输出 "Hello, [name]!"。
function User (name) {

    this.name = name;

    this.sayHello = function() {
        setTimeout(()=>{console.log(`Hello, ${this.name}!`)}, 1000);
    };
}
console.log('ninth exercise');
const user = new User('Aining');
user.sayHello();