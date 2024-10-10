// 1. 函数声明练习
// 编写一个函数 greet，接受一个参数 name，输出 "Hello, [name]!"，如果未提供参数，则输出 "Hello, World!"。
//
function greet(name) {
    if (name === null || name === undefined) {
        console.log('Hello, World!');
        return;
    }
    console.log('Hello, ' + name + '!');
}
greet('Kitty');
greet();

function greet1(name = 'World') {
    console.log(`Hello, ${name}!`);
}



// 2. 函数表达式练习
// 使用函数表达式创建一个函数 add，接收两个参数并返回它们的和。
//

// 3. 箭头函数练习
// 使用箭头函数创建一个函数 multiply，接收两个参数并返回它们的乘积。
//

// 4. 构造函数练习
// 编写一个构造函数 Person，接受 name 和 age 两个参数，并定义一个方法 greet，可以输出 "Hello, my name is [name] and I am [age] years old."。
//

// 5. 立即执行函数表达式 (IIFE) 练习
// 编写一个立即执行函数表达式 (IIFE)，计算两个数字的和并输出结果。
//

// 6. 对象方法练习
// 创建一个对象 calculator，它有两个方法：
//
// add(a, b)：返回两个数字的和
// subtract(a, b)：返回两个数字的差

// 7. 生成器函数练习
// 编写一个生成器函数 counter，每次调用时返回递增的整数，从 1 开始。
//

// 8. 生成器与 yield 练习
// 编写一个生成器函数 range，接收两个参数 start 和 end，并生成从 start 到 end（包含）的数字。
//

// 9. 箭头函数与 this 练习
// 创建一个对象 timer，它有一个方法 start，使用箭头函数在 1 秒后输出 "Timer done"。
//

// 10. 对象方法与普通函数的 this 练习
// 创建一个对象 user，它有一个属性 name，以及一个方法 sayHello，该方法使用普通函数在 1 秒后输出 "Hello, [name]!"。