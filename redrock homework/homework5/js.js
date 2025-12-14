//创建了一个对象人类
const person = {
    name: '小明',
    age: 18,
    address: {
        city: 'ChongQing',
        area: 'RedRock'
    }
}
//输出一个属性
const name1 = person.name;
console.log(name1);
//解构赋值
const { name, age, ...otherInformation } = person;
//console.log(name);
console.log(otherInformation);
//计算n！
//循环
function culculate_n(n) {
    let answer = 1;
    for (let i = 2; i <= n; i++) {
        answer = answer * i;
    }
    return answer;
}
//递归
function culculate_n2(n) {
    if (n <= 1) {
        return1;
    }
    else {
        return n * culculate_n2(n - 1)l;
    }
}
