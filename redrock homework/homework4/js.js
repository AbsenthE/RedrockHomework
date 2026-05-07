//lv0，创建一个对象
const twoElephants = {
    name: "Billy",
    age: 100,
    isAlive: true,
};

//lv1表单

//复制对象
const copy1 = { ...twoElephants };
const copy2 = { ...twoElephants };
//数组
let arr = [];
arr.push(twoElephants, copy1, copy2);
//输出
console.table(arr);




