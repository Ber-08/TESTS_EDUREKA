// //! qn_4

// let x = "Edureka Learning Center";
// let split = x.split("");
// console.log(split);
// let reverse = split.reverse();
// console.log(reverse);
// let join = reverse.join("");
// console.log(join);

// //! qn_5
// const dt1 = new Date("june 20 2019");
// const dt2 = new Date("june 14 2019");
// let time = dt1.getTime() - dt2.getTime();
// let date = dt1.getDate() - dt2.getDate();
// console.log(time);
// console.log(date);

// //! qn_6
// let arr = [6, 8, 10, 12, 18];

// // a)
// const y = arr.reduce((acc, cur) => {
//   const total = acc + cur;
//   return total;
// }, 0);
// console.log(y);

// // b)
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// //! qn_7
// // a)
// let obj = {
//   id: "1",
//   name: "Test User",
//   age: "25",
//   profession: "Developer",
// };

// let key = Object.keys(obj);
// console.log(key);
// let value = Object.values(obj);
// console.log(value);

// let arrayNew = Object.entries(obj);
// console.log(arrayNew);

// // b)
// let arr1 = Object.assign({}, value);
// console.log(arr1);

// //! qn_8
// let btn = document.createElement("button");
// btn.innerHTML = "Hit me";
// btn.style.backgroundColor = "blue";
// document.querySelector(".qn_8").appendChild(btn);

// let heading = document.createElement("h1");
// heading.innerText = "Hello World!";
// document.querySelector(".qn_8").appendChild(heading);

// let p = document.createElement("p");
// p.innerText = "Welcome to Edureka";
// document.querySelector(".qn_8").appendChild(p);

//! qn_10

const fs = require("fs");

let data = "<h1>This is my first FS  module</h1>";
fs.writeFile("app.html", data, "utf-8", (err) => {
  console.log("successfully created");
});
