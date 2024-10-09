// 1. 题目: 给定一个包含多个对象的数组 [{name: "apple", price: "1.0"}, {name: "banana", price: "2.5"}]，
// 将每个对象转换为 [{name: "apple", total: 1.0}, {name: "banana", total: 2.5}] 的形式。
// 提示: 你需要将字符串形式的 price 转换为数字形式的 total。
const arr1 = [{name: "apple", price: "1.0"}, {name: "banana", price: "2.5"}];
const exer1 = (arr) => {
    return arr.map((a) => (
    {
        name: a.name,
        total: a.price

    }))
}
console.log(exer1(arr1));


// 2. 题目: 给定一个字符串 str = "hello world"，编写一个函数将每个单词的首字母大写，结果变为 "Hello World"。
// 提示: 可以使用字符串的 split 和 map 方法。
const str = "hello world";
const changeCapital = (str) => {
    if (!str) {
        return str;
    }

    return str.split(' ').map(a=> a.charAt(0).toUpperCase() + a.slice(1)).join(' ');
}
console.log(changeCapital(str));


// 3. 题目: 编写一个函数，输入为一个包含数字的数组，例如 [1, 2, 3, 4, 5]，返回一个新的数组，其中每个数字都加上它在原数组中的索引值，结果应为 [1, 3, 5, 7, 9]。
// 提示: 可以使用数组的 map 方法。
const arr3 = [1, 2, 3, 4, 5];
const addIndex = (arr) => {
    return arr.map((a,i) => {
        return a+i;
    });
}
console.log(addIndex(arr3));

// 4. 题目: 给定一个对象 {a: 1, b: 2, c: 3}，编写一个函数，将这个对象的键和值互换，结果为 {1: "a", 2: "b", 3: "c"}。
// 提示: 使用 Object.keys() 和 reduce 来构建新对象。
const objects1 = {a: 1, b: 2, c: 3};
const switchValuesAndKeys = (objects) => {
    return Object.keys(objects).reduce((acc, key) => {
        acc[objects[key]]=key;
        return acc;
    },{});
}
console.log(switchValuesAndKeys(objects1));

// 题目: 给定两个字符串 str1 = "abc" 和 str2 = "bcd"，编写一个函数找到两个字符串中共有的字符，结果为 "bc"。
// 提示: 使用字符串的 split 和 filter 方法。
const str1 = "abc", str2 = "bcd"
const identicalCharSet = (str1, str2) => {
    return str1.split('').filter((s) => {return str2.includes(s);}).join('');

}
console.log(identicalCharSet(str1,str2));

// 题目: 编写一个函数，输入为一个数组 [1, 2, 3, 4, 5]，返回一个新数组，将原数组中的每个数字平方，结果应为 [1, 4, 9, 16, 25]。
// 提示: 使用数组的 map 方法。
const squared = (arr) => {
    return arr.map(a => {return a*a;});

}
console.log(squared(arr3));
// 题目: 给定一个对象数组 [{name: "apple", quantity: 2}, {name: "banana", quantity: 3}]，编写一个函数计算总的 quantity，结果应为 5。
// 提示: 使用数组的 reduce 方法。
const objectArr = [{name: "apple", quantity: 2}, {name: "banana", quantity: 3}];
const countQuantity = (arr) => {
    return arr.reduce((acc, x) => {return acc += x.quantity}, 0);
}
console.log(countQuantity(objectArr));
// 题目: 给定一个数组 [1, 2, 3, 4, 5, 6]，编写一个函数将其按奇偶分组，奇数在前，偶数在后，结果应为 [1, 3, 5, 2, 4, 6]。
// 提示: 使用数组的 filter 和 concat 方法。
const evenAndOdd = (arr) => {
    return arr.filter(a=> {return a%2 !== 0}).concat(arr.filter(a=> {return a%2 === 0}));
}
console.log(evenAndOdd(arr3));

// 题目: 编写一个函数，输入为一个字符串数组 ["apple", "banana", "cherry"]，返回一个新数组，其中每个字符串都反转，结果应为 ["elppa", "ananab", "yrrehc"]。
// 提示: 使用数组的 map 和字符串的 split、reverse、join 方法。
const strArr = ["apple", "banana", "cherry"];
const reverseStringInArray = (strArr) => {
    return strArr.map(str => {
        return str.split("").reverse().join("");
    });
}
console.log(reverseStringInArray(strArr));

// 题目: 给定一个数字数组 [1, 2, 3, 4, 5] 和一个目标数字 target = 9，编写一个函数找到数组中两个数的组合，使得它们的和等于目标数字，结果返回它们的索引，例如 [3, 4] 对应数字 4 和 5。
// 提示: 使用双重循环或哈希表来解决。
const findCombination = (arr, target) => {
    const map = new Map();
    let res = [];
    arr.forEach((a, i) => {
        if(map.has(a)) {
            res = [map.get(a), i];
        }
        map.set(target-a, i);
    });
    return res;
}
console.log(findCombination(arr3, 9));

