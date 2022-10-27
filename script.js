"use strict";
// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

// let elem1 = document.querySelector("#elem1");
// console.log(elem1);
// let elem2 = document.querySelector("#elem2");
// console.log(elem2);

// let elem1 = document.querySelector("#elem1");
// console.log(elem1);
// let elem2 = document.querySelector("#elem2");
// console.log(elem2);
// let elem3 = document.querySelector("#elem3");
// console.log(elem3);

//<p id="elem1">text</p>

// function func() {
//   console.log("Привет!");
// }
// let elem1 = document.querySelector("#elem1");
// elem1.addEventListener("click", func);
// let elem2 = document.querySelector("#elem2");
// elem2.addEventListener("mouseover", func);
// let elem3 = document.querySelector("#elem3");
// elem3.addEventListener("mouseout", func);
// let elem4 = document.querySelector("#elem4");
// elem4.addEventListener("dblclick", func);
// let elem5 = document.querySelector("#elem5");
// elem5.addEventListener("click", func);
// let elem = document.querySelector(".elemet");
// let button = document.querySelector("#button");
// //button.addEventListener("mouseover", func1);
// //button.addEventListener("mouseout", func2);
// button.addEventListener("click", func3);
// button.addEventListener("dblclick", func4);
// function func1() {
//   console.log("Что ты хочешь?");
// }
// function func2() {
//   console.log(elem2.textContent);
// }

// function func3() {
//   elem4 = Number(elem4.textContent) + 10;
//   console.log(elem4);
// }

// function func4() {
//   elem =
//     Number(elem3.textContent) +
//     Number(elem4.textContent) +
//     Number(elem5.textContent);
//   console.log(elem);
// }
// elem =
//   Number(elem3.textContent) +
//   Number(elem4.textContent) +
//   Number(elem5.textContent);
// // console.log(elem);
// let elem3 = document.querySelector("#elem3");
// let elem4 = document.querySelector("#elem4");
// let elem5 = document.querySelector("#elem5");
// let elem = document.querySelector("#elem");
// //console.log(elem);

// let button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   //   elem.textContent =
//   //     Number(elem3.textContent) +
//   //     Number(elem4.textContent) +
//   //     Number(elem5.textContent);
//   elem.textContent += "!";
// }
// //console.log(elem);
// let elem = document.querySelector("#elem");
// let button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   elem.textContent = "<b>elem.textContent</b>";
//   console.log(elem.innerHTML);
// }

//console.log(elem.value);

//let a = document.querySelector("a");
// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// let img1 = document.querySelector("#img1");
// let img2 = document.querySelector("#img2");
// button1.addEventListener("click", func1);
// button2.addEventListener("click", func2);

// function func1() {
//   //elem.textContent = elem.textContent + " (" + img.src + ")";
//   img1.height = "300";
//   img1.width *= 2;
// }
// function func2() {
//   //elem.textContent = elem.textContent + " (" + img.src + ")";
//   img2.height = "300";
//   img2.width *= 2;
// }
// let elem = document.querySelector("#elem");
// let elem1 = document.querySelector("#elem1");
// let button = document.querySelector("#button");
// button.addEventListener("click", func1);
// function func1() {
//   let a = elem.value;
//   let b = elem1.value;

//   elem.value = b;
//   elem1.value = a;
// }
// let elem = document.querySelector("#elem");
// elem.addEventListener("focus", function () {
//   elem.value = "";
// });
// elem.addEventListener("blur", function () {
//   elem.value = Math.pow(elem.value, 2);
// });
// let elem = document.querySelector("#elem");
// let button = document.querySelector("#button");
// button.addEventListener("click", func1);
// function func1() {
//   console.log(elem.classList);
// }
//console.log(document.querySelector("#image").src);
// let elem = document.querySelector("#elem");
// elem.addEventListener("focus", function () {
//   this.value = 1;
// });
// elem.addEventListener("blur", function () {
//   this.value = 2;
// });
// let button = document.querySelector("#btn");
// button.addEventListener("click", function () {
//   //button.textContent = Number(button.textContent) + 1;
//   this.textContent = Number(button.textContent) + 1;
// });
// let elem = document.querySelector(".www");
// let button = document.querySelector("#btn");
//let inputs = document.querySelectorAll("#inputNumber");
//-------------------------
//let input = document.querySelector("#inputNumber");
//for (let input of inputs) {
//input.classList.toggle("ttt");
//   for (let className of classNames) {
//     className.classList.remove("aaa");
//   }

//console.log(input.hasAttribute("class"));
//console.log(classOf);

//let length = input.classList.length;
//console.log(classNames);

//__________________--
// let elem = document.querySelector("#elem");
// let classNames = elem.classList;

// for (let className of classNames) {
//   console.log(className + "<br>");
// }
//}
// button.addEventListener("click", function () {
//   let sum = 0;
//   for (let input of inputs) {
//     sum += Number(input.value);
//     //console.log(sum);
//   }
//   elem.textContent = sum;
//   //console.log(elem.textContent);
// });
//console.log(inputs[0].value);

// function func() {
//   this.textContent = Number(this.textContent) * Number(this.textContent);
// }

// let elems = document.querySelectorAll("p");

// for (let elem of elems) {
//   elem.addEventListener("click", func);
// }
// let divs = document.querySelectorAll("div");

// for (let div of divs) {
//   div.addEventListener("click", function () {
//     this.textContent++;
//   });
// }
// let a = document.querySelector("a");
// a.addEventListener("click", func);

// function func() {
//   a.textContent = a.textContent + "(" + a.href + ")";
//   this.removeEventListener("click", func);
// }
// let button = document.querySelector("#btn");
// button.addEventListener("click", func);

// function func() {
//   //button.textContent = Number(button.textContent) + 1;

//   if (this.textContent < 10) {
//     this.textContent = Number(button.textContent) + 1;
//   } else {
//     this.removeEventListener("click", func);
//   }
// }
// let elems = document.querySelectorAll("li");

// for (let elem of elems) {
//   elem.addEventListener("click", function func() {
//     if (Number(elem.textContent) <= 200) {
//       elem.textContent = Number(elem.textContent) + 1;
//       this.removeEventListener("click", func);
//     }

//     //console.log(typeof elem.textContent);
//   });
// }
// let elems = document.querySelectorAll("li");
// let button = document.querySelector("#button");

// for (let elem of elems) {
//   button.addEventListener("click", func);

//   function func() {
//     elem.style.cssFloat = "right";
//   }
// }
// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// let button3 = document.querySelector("#button3");
// let p = document.querySelector("p");
// button1.addEventListener("click", func1);
// function func1() {
//   p.classList.toggle("crossed");
// }
// button2.addEventListener("click", func2);
// function func2() {
//   p.classList.toggle("make-Bold");
// }
// button3.addEventListener("click", func3);
// function func3() {
//   p.classList.toggle("make-Red");
// }
// let parent = document.querySelector("#parent");
// let elems1 = parent.querySelectorAll(".www");
// let elems2 = parent.querySelectorAll(".ggg");

// console.log(elems1, elems2);
// let elem = document.querySelector("#elem");
// for (let node of elem.childNodes) {
//   if (node.nodeType == 1) {
//     console.log(node.innerHTML);
//   } else if (node.nodeType == 3) {
//     console.log(node.textContent);
//   } else if (node.nodeType == 8) {
//     console.log(node.data);
//   }
// }

// let inp = document.querySelector("#inp");

// inp.addEventListener("blur", function () {
//   let digits = inp.value.split(",");
//   //console.log(typeof digits);
//   let length = 0;
//   for (let key in digits) {
//     if (digits.hasOwnProperty(key)) {
//       length++;
//     }
//   }
//   //console.log(typeof length);
//   let sum = 0;

//   for (let digit of digits) {
//     sum += Number(digit);
//   }

//   console.log(sum / length);
// });
// let elem = document.querySelector("#elem");
// let elem2 = document.querySelector("#ggg");
// console.log(elem2);
// elem.addEventListener("blur", function () {
//   elem2.textContent = elem.value;
// });

// let snf = document.querySelector("#SNF");
// let surname = document.querySelector("#surname");
// let userName = document.querySelector("#name");
// let userFather = document.querySelector("#father");
// snf.addEventListener("blur", function () {
//   let fullname = snf.value.split(" ");
//   surname.value = fullname[0];
//   userName.value = fullname[1];
//   userFather.value = fullname[2];
// });
// let input = document.querySelector("#input");
// let button = document.querySelector("#button");
// console.log(input.disabled);
//button.addEventListener("click", pass_gen);
// function pass_gen() {
//   let chrs = "abdehkmnpswxzABDEFGHKMNPQRSTWXZ1234567890";
//   var str = "";
//   for (var i = 0; i < 8; i++) {
//     var pos = Math.floor(Math.random() * chrs.length);
//     str += chrs.substring(pos, pos + 1);
//   }
//   //console.log(str);
//   input.value = str;
// }
// button.addEventListener("click", function () {
//   input.disabled = false;
// // });
// let elem = document.querySelector("#elem");

// let button = document.querySelector("#button");

// button.addEventListener("click", function () {
//   elem.checked = !elem.checked;
// });
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector("#button");
// let p = document.querySelector("#ggg");
// button.addEventListener("click", function () {
//   for (let radio of radios) {
//     if (radio.checked) {
//       p.textContent = radio.value;
//     }
//   }
// });

// let abzac = document.querySelector("#abzac");
// let elem = document.querySelector("#elem");
// elem.addEventListener("input", function () {
//   let sumOfLetters = this.value.split("").length;
//   if (sumOfLetters >= 5) {
//     console.log("5 сиволов");
//   }
//   //console.log(sumOfLetters);
// });
// let elem = document.querySelector("#elem");
// let button = document.querySelector("#button");

// button.addEventListener("click", function () {
//   elem.focus();
// });
// select.addEventListener("change", function () {
//   //console.log(this.value);
//   if (this.value <= 5) {
//     console.log("Work day");
//   } else {
//     console.log("Week-end");
//   }
// });
// let select = document.querySelector("#select");
// let button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   select.value = "один";
// });
// select.selectedIndex = 2;
// console.log(select.selectedIndex);

//let select = document.querySelector("#select");
// select.addEventListener("change", function () {
//   //console.log(this.value);
//let date = new Date();
//   //console.log(date.getDay());
//   for (let i = 1; i < 8; i++) {
//     if ((this.value === String(i)) & (this.value == date.getDay())) {
//       this.hasAttribute("selected");
//     }
//   }

// if (this.value <= 5) {
//   console.log("Work day");
// } else {
//   console.log("Week-end");
// }
// });
// for (let option of select) {
//   //console.log(option.value);
//   if (option.value == date.getDay()) {
//     option.selected = true;
//   }
// }

//console.log(document.querySelectorAll("#select option"));

// let select = document.querySelector("#select");
// let date = new Date();
// let option = select[date.getDay() - 1];
// option.selected = true;
// let textarea = document.querySelector("textarea");
// let div = document.querySelector("div");

// textarea.addEventListener("blur", function () {
//   //console.log(div.textContent);
//   div.textContent = textarea.value;
// });

// let checkbox = document.querySelector("#checkbox");

// let button = document.querySelector("#button");
// console.log();
// let button = document.querySelectorAll('#button');
// let div = document.querySelectorAll('#div');

// btn.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		div.value = '111';
// 	} else {
// 		div.value = '222';
// 	}
// });
// let elem = document.querySelector("#elem");
// console.log(elem.checked);
// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function (event) {
//   console.log(event);
// });
// let checkbox = document.querySelector("input");
// let button = document.querySelector("button");
// let div = document.querySelector("div");
// //console.log(div.textContent);
// button.addEventListener("click", function () {
//   if (checkbox.checked) {
//     div.textContent = "111";
//   } else {
//     div.textContent = "222";
//   }
// });
