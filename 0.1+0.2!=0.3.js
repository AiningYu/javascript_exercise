//1. 转换成整数计算
function caulculator(a, b) {
    let factor = Math.pow(10, Math.max(decimalcount(a), decimalcount(b)));
    return (a*factor+b*factor)/factor;
}

function decimalcount(a) {
    let str = a.toString();
    if (str.includes('.') ) {
        return str.split('.')[1].length;
    }
    return 0;
}

console.log(0.1+0.2);
console.log(caulculator(0.1, 0.2));

//2.使用第三方库 Decimal.js
const Decimal = require('decimal.js');
let a = new Decimal(0.1);
let b = new Decimal(0.2);
console.log(a.plus(b).toString());