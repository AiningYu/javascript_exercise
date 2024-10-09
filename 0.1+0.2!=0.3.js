//转换成整数计算
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