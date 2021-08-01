"use strict";

// const numList = [1, 2, 3, 4, 5, 6, 7, 8];

// const ul = document.getElementById("list");

// for (let i = 1; i <= numList.length; i++) {
//   if(i % 2 === 0){
//     const li = document.createElement("li");
//   li.textContent = `No.${numList[i-1]}`;
//   ul.appendChild(li);
//   }
  
// }

const numList = [1, 2, 3, 4, 5, 6, 7, 8];

const evenList = numList.filter((num) => num % 2 == 0).map((even) => 'No.' + even);

console.log(evenList);

// for (const num of evenList) {
//   const li = document.createElement('li');
//   li.textContent = num;
//   ul.appendChild(li);
// }