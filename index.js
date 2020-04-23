'use strict'

// __________________________________________________________TASK-1_________________________________________


// let list = document.querySelectorAll('.item');
// console.log(`В списке ${list.length} категорий`);
// let title = [...list].map(el => el.children[0].textContent);
// let elements = [...list].map(el => el.children[1]);
// let length = elements.map(el => el.children.length);
// for (let i = 0; i < title.length; i += 1) {
// console.log(`Категория:${title[i]}, Длина:${length[i]}`)};


// __________________________________________________________TASK-2_________________________________________



// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// let list = document.querySelector("#ingredients");
// console.log(list);
// const addToList = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     let item = document.createElement("li");
//     list.append(item);
//     item.textContent = array[i];
//   }
// };
// addToList(ingredients);




// __________________________________________________________TASK-3_________________________________________






// const images = [
//     {
//       url:
//         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];






//   let ul = document.querySelector('#gallery');


//   const addToGallery = function(images) {
//       for (let i = 0; i < images.length; i++) {
//         ul.insertAdjacentHTML('afterbegin', `<li><img src='${images[i].url}' alt= '${images[i].alt}' width='550'></li>`)  
//       }
//   };
//   addToGallery(images);


//   ul.style.listStyle = 'none';

//   ul.style.display = 'flex';
//   ul.style.justifyContent = 'space-arround';




// __________________________________________________________TASK-4_________________________________________

// let counterValue = 0;

// let value = document.querySelector("#value");

// let counter = document.querySelector("#counter");

// let decrementBtn = counter.children[0];

// let incrementBtn = counter.children[2];
// console.log(counterValue, value, counter, decrementBtn);

// const increment = function () {
//   counterValue++;
//   value.textContent = counterValue;
// };
// const decrement = function () {
//   counterValue--;
//   value.textContent = counterValue;
// };

// decrementBtn.addEventListener("click", () => decrement());

// incrementBtn.addEventListener("click", () => increment());




// __________________________________________________________TASK-5_________________________________________



// let input = document.querySelector("#name-input");

// let output = document.querySelector('#name-output');

// input.addEventListener('change', () => {
//     input.value ? output.textContent = input.value : output.textContent = "Незнакомец"
// });






// __________________________________________________________TASK-6_________________________________________



// let input = document.querySelector("#validation-input");
// let symbol = +input.getAttribute("data-length");
// console.log(symbol);
// input.addEventListener("change", () => {
//   if (symbol === input.value.length) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// });


// __________________________________________________________TASK-7_________________________________________


// let input = document.querySelector('#font-size-control');
// let span = document.querySelector("#text");
// input.addEventListener('input', () => {
//     span.style.fontSize = input.value + 'px' })










// __________________________________________________________TASK-8_________________________________________


// let controls = document.querySelector("#controls");

// let boxes = document.querySelector("#boxes");

// let input = document.querySelector("input");

// let btn = document.querySelectorAll("button");





// const mathRandom = function (max) {
//   return Math.floor(Math.random() * Math.floor(max + 1));
// };
// const randomRGB = function () {
//   return `rgb(${mathRandom(255)}, ${mathRandom(255)}, ${mathRandom(255)})`;
// };




// const createBox = function (amount) {
//   let width = 30;
//   let height = 30;
//   for (let index = 0; index < amount; index++) {
//     let div = document.createElement("div");
//     div.style.width = width + "px";
//     div.style.height = height + "px";
//     div.style.backgroundColor = randomRGB();
//     console.log(randomRGB());
//     boxes.append(div);
//     width += 10;
//     height += 10;
//     console.log(width, height);
//   }
// };
// const destroyBoxes = function () {
//   let elements = boxes.querySelectorAll("div");
//   for (const el of elements) {
//     boxes.removeChild(el);
//   }
// };



// btn[0].addEventListener("click", () => createBox(input.value));
// btn[1].addEventListener("click", () => destroyBoxes());







