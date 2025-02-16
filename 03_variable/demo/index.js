// 字符串变量
const username = '张张';
console.log(username); // 张张

// 数字变量（不区分 int 和 float）
const age = 18;
console.log(age); // 18

if (age >= 18) { // true
  console.log('1');
} else {
  console.log('2');
}

// 遍历数组
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 遍历对象
const obj = {
  name: '张张',
  age: 18
};

for (let key in obj) {
  console.log(key, obj[key]);
}


// 函数

// 函数声明
function add(a, b) {
  return a + b;
}
// 函数调用
add(1, 2); // 3

// 异步函数

// 通过 then 方法处理异步结果
// catch 方法处理异常

// fetch 方法是浏览器提供的一个用于发起网络请求的方法（node中也可以使用）
fetch(`https://api.github.com/search/users?q=node`)
  .then((res) => res.json())
  .then(({ items = [] }) => {
    console.log('items', items);
  });
