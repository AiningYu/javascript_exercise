// 示例 1：使用 apply() 借用其他对象的方法
// person2 没有 fullName 方法，但我们借用了 person1 的 fullName 方法，
// 通过 apply 将 this 绑定到 person2，并获取 person2 的 firstName 和 lastName。
const person1 = {
    function1: function() {
        return this.firstname + " " + this.lastname;
    }
}

const person2 = {
    firstname : "John",
    lastname : "Doe",
}

console.log(person1.function1.apply(person2));