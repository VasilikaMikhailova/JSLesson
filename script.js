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
// let elem = document.getElementById("elem");

// document.addEventListener("mousemove", function (event) {
//   elem.innerHTML = event.clientX + " : " + event.clientY;
//   console.log(event.type);
// });
// let elem = document.querySelector("#elem");

// elem.addEventListener("click", func);
// elem.addEventListener("dblclick", func);

// function func(event) {
//   if (event.type == "click") {
//     elem.style.color = "red";
//   } else {
//     elem.style.color = "green";
//   }
// }
// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function (event) {
//   console.log(event.target); // выведет наш абзац
//   console.log(this); // выведет наш див
// });

// let elems = document.querySelectorAll("ul");
// //console.log(elem);
// for (let elem of elems) {
//   elem.addEventListener("click", function (event) {
//     //console.log(event.target.textContent); // выведет наш абзац
//     if (event.target.tagName == "LI") {
//       event.target.textContent = event.target.textContent + "!";
//     } else {
//       let newLi = document.createElement("li");
//       newLi.appendChild(document.createTextNode("newText"));
//       document.querySelector("ul").appendChild(newLi);
//     }
//   });
// }
// let elem = document.querySelector("input");
// let p = document.querySelector("p");
// elem.addEventListener("keypress", function (event) {
//   //console.log(elem.textContent);
//   if (event.key == "Enter") {
//     p.textContent = elem.value;
//   }
// });
// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function (event) {
//   // if (event.ctrlKey) {
//   //   console.log("нажат Ctrl");
//   // }

//   if (event.altKey) {
//     //console.log("нажат Alt");
//     elem.style.color = "red";
//   }

// if (event.shiftKey) {
//   console.log("нажат Shift");
// }
// });
// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Вы не можете перейти по этой ссылке!");
// });
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");

// elem1.addEventListener("click", function () {
//   console.log("зеленый");
// });
// elem2.addEventListener("click", function () {
//   console.log("голубой");
// });
// elem3.addEventListener("click", function () {
//   console.log("красный");
// });
// let div = document.querySelector("div");

// div.addEventListener("click", function (event) {
//   if (event.target.matches("div")) {
//     console.log("клик именно по диву");
//   }
//   if (event.target.matches("ul")) {
//     let newLi = document.createElement("li");
//     newLi.appendChild(document.createTextNode("newText"));
//     document.querySelector("ul").appendChild(newLi);
//     console.log("клик именно по списку");
//   }
//   if (event.target.matches("li")) {
//     event.target.textContent = "!";
//     console.log("клик именно по элементу списка");
//   }
// });
// let parent = document.querySelector("#parent");
// let button = document.querySelector("button");
// let block = document.querySelector("#block");

// button.addEventListener("click", function () {
//   block.classList.add("active");
//   event.stopImmediatePropagation();
// });

// parent.addEventListener("click", function () {
//   block.classList.remove("active");
// });

// elem1.addEventListener(
//   "click",
//   function () {
//     console.log("зеленый - погружение");
//   },
//   true
// );
// elem1.addEventListener(
//   "click",
//   function () {
//     console.log("зеленый - всплытие");
//   },
//   false
// );

// elem2.addEventListener(
//   "click",
//   function () {
//     console.log("голубой - погружение");
//   },
//   true
// );
// elem2.addEventListener(
//   "click",
//   function () {
//     console.log("голубой - всплытие");
//   },
//   false
// );

// elem3.addEventListener(
//   "click",
//   function () {
//     console.log("красный - погружение");
//   },
//   true
// );
// elem3.addEventListener(
//   "click",
//   function () {
//     console.log("красный- всплытие");
//   },
//   false
// );

// let button = document.querySelector("button");
// let list = document.querySelector("ul");
// let items = list.querySelectorAll("li");

// function handler() {
//   this.innerHTML = this.innerHTML + "!";
// }

// for (let item of items) {
//   item.addEventListener("click", handler);
// }

// button.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerHTML = "item";

//   item.addEventListener("click", handler);

//   list.appendChild(item);
// });

// list.addEventListener("click", function (event) {
//   let li = event.target.closest("li");

//   if (li) {
//     li.innerHTML = li.innerHTML + "!";
//   }
// });

// button.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerHTML = "item";
//   list.appendChild(item);
// });

// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", parent);

// function parent() {
//   console.log(this.value); // выведет ссылку на наш инпут
//   let self = this;
//   function child() {
//     console.log(self.value); // выведет undefined
//   }
//   child();
// }

//console.log(typeof elem.value);

// function func() {
//   let self = Number(this.value);
//   function square() {
//     return self * self;
//   }
//   alert(square());
//   //square();
// }
// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", func);
// let elem = document.getElementById("elem");

// function func(name, surname) {
//   console.log(this.value + ", " + name + " " + surname);
// }

// func = func.bind(elem);
// func("John", "Smit");
// func("Eric", "Luis");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
// let timerId;
// start.addEventListener("click", function () {
//   let i = 100;
//   timerId = setInterval(function () {
//     console.log(--i);

//     if (i == 90) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// });
// // Останавливаем таймер:
// stop.addEventListener("click", function () {
//   clearInterval(timerId);
// });

// let timerId;

// start.addEventListener("click", function func() {
//   timerId = setInterval(function () {
//     let date = new Date();
//     console.log(date.getMinutes() + " " + date.getSeconds());
//   }, 1000);
//   this.removeEventListener("click", func);
// });

// stop.addEventListener("click", function () {
//   clearInterval(timerId);
// });

// let elem = document.querySelector("#elem");

// let timerId = setInterval(function () {
//   elem.value = Number(elem.value) - 1;
//   if (elem.value == "7") {
//     clearInterval(timerId);
//   }
// }, 1000);

// elem.addEventListener("click", function () {
//   let self = this;
//   setInterval(function () {
//     self.value = Number(self.value) + 1;
//   }, 1000);
// });

// elem.addEventListener("click", function () {
//   setInterval(() => (this.value = Number(elem.value) + 1), 1000);
// });

// elem.addEventListener("click", function () {
//   setInterval(
//     (function (self) {
//       return function () {
//         self.value = Number(self.value) + 1;
//       };
//     })(this),
//     1000
//   );
// });

// elem.addEventListener("click", function () {
//   setInterval((function () {})(this), 1000);
// });
// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function () {
//   setInterval(
//     function (self) {
//       console.log(self.value);
//     },
//     1000,
//     this
//   );
// });
// elem.addEventListener("click", function () {
//   setInterval(
//     function (self) {
//       self.value--;
//     },
//     1000,
//     this
//   );
// });

// let elem = document.querySelector("#elem");
// //let p = document.querySelector("p");
// elem.addEventListener("click", function () {
//   let timerId = setInterval(
//     function () {
//       console.log(Number(elem.value) * Number(elem.value));
//       elem.value = Number(elem.value) * Number(elem.value);

//       // if (p.textContent == "0") {
//       //   clearInterval(timerId);
//       // }
//     },
//     1000,
//     this
//   );
// });

// let p = document.querySelector("p");

// setTimeout(function () {
//   p.textContent = "Hey!";
// }, 3000);
// let parent = document.querySelector("#parent");

// let p = document.createElement("p");
// p.textContent = "!";

// p.addEventListener("click", function () {
//   console.log(this.textContent);
// });

// parent.appendChild(p);

// let parent = document.querySelector("#parent");

// for (let i = 1; i <= 9; i++) {
//   let li = document.createElement("li");
//   li.textContent = i;

//   parent.appendChild(li);
// }.

// let parent = document.querySelector("#parent");
// let p = document.querySelector("p");

// for (let i = 1; i <= 5; i++) {
//   let input = document.createElement("input");
//   input.textContent = "!";

//   // Навешиваем обработчик клика:
//   input.addEventListener("blur", function () {
//     p.textContent = p.textContent + input.value;
//   });

//   parent.appendChild(input);
// }

// let parent = document.querySelector("#parent");
// let button = document.querySelector("button");

// //console.log(parent);

// button.addEventListener("click", function () {
//   parent.lastElementChild.remove();
// });

// let parent = document.querySelector("#elem");
// let liFinish = document.createElement("li");
// liFinish.innerHTML = "finish";
// let liStart = document.createElement("li");
// liStart.innerHTML = "start";
// parent.append(liFinish);
// parent.prepend(liStart);
// let parent = document.querySelector("#parent");
// let elem = document.querySelector("#elem");
// let lis = document.querySelectorAll("li");

// let newElem = document.createElement("li");

// newElem.innerHTML = "new";

// parent.insertBefore(newElem, elem);

// for (let li1 of lis) {
//   li1.addEventListener("click", function () {
//     li1.textContent = li1.textContent + "!";
//   });
// }

// let p = document.createElement("p");
// p.innerHTML = "!";

// let target = document.querySelector("#target");
// target.insertAdjacentElement("beforeBegin", p);

// let p = document.createElement("p");
// p.innerHTML = "!!!";

// let target = document.querySelector("#elem");
// target.insertAdjacentElement("afterEnd", p);

// let target = document.querySelector("#elem");
// target.insertAdjacentHTML(
//   "afterBegin",
//   '<div class="www"><p>text</p> <p>text</p><input></div>'
// );

// let parent = document.querySelector("#parent");
// let elem = parent.querySelector(".elem");

// let clone = elem.cloneNode(true);
// parent.appendChild(clone);

// let parent = document.querySelector("#parent");

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   let p = document.createElement("p");
//   p.textContent = elem;

//   parent.appendChild(p);
//   p.addEventListener("click", function () {
//     p.textContent = p.textContent + "!";
//   });
// }

// let parent = document.querySelector("#elem");

// let arr = ["hghg", 2, "xc21", 4, 5];

// for (let elem of arr) {
//   let li = document.createElement("li");
//   li.textContent = elem;

//   parent.appendChild(li);
//   li.addEventListener("click", function func() {
//     li.textContent = li.textContent + "!";
//     this.removeEventListener("click", func);
//   });
// }

// let table = document.querySelector("#table");
// let inp1 = document.querySelector("#trr");
// let inp2 = document.querySelector("#tdd");
// let button = document.querySelector("button");
// let k = 2;

// function func() {
//   for (let i = 0; i < Number(inp1.value); i++) {
//     let tr = document.createElement("tr");

//     for (let i = 0; i < Number(inp2.value); i++) {
//       let td = document.createElement("td");
//       td.textContent = k;
//       k += 2;
//       tr.appendChild(td);
//     }

//     table.appendChild(tr);
//   }
// }

// button.addEventListener("click", func);

// let table = document.querySelector("#table");
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];

// for (let subArr of arr) {
//   let tr = document.createElement("tr");
//   for (let elem of subArr) {
//     let td = document.createElement("td");
//     td.textContent = elem * elem;
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// let users = [
//   {
//     name: "name1",
//     surname: "surname1",
//     patronymic: "patronymic1",
//   },
//   {
//     name: "name2",
//     surname: "surname2",
//     patronymic: "patronymic2",
//   },
//   {
//     name: "name3",
//     surname: "surname3",
//     patronymic: "patronymic3",
//   },
// ];

// let table = document.getElementById("table");

// for (let user of users) {
//   let tr = document.createElement("tr");

//   let td1 = document.createElement("td");
//   td1.textContent = user.name;
//   tr.appendChild(td1);

//   let td2 = document.createElement("td");
//   td2.textContent = user.surname;
//   tr.appendChild(td2);

//   let td3 = document.createElement("td");
//   td3.textContent = user.patronymic;
//   tr.appendChild(td3);

//   table.appendChild(tr);
// }

// let employees = [
//   { name: "employee1", age: 30, salary: 400 },
//   { name: "employee2", age: 31, salary: 500 },
//   { name: "employee3", age: 32, salary: 600 },
// ];

// for (let employee of employees) {
//   let tr = document.createElement("tr");

//   let td1 = document.createElement("td");
//   td1.textContent = employee.name;
//   tr.appendChild(td1);

//   let td2 = document.createElement("td");
//   td2.textContent = employee.age;
//   tr.appendChild(td2);

//   td2.addEventListener("click", function () {
//     td2.textContent = Number(td2.textContent) + 1;
//   });

//   let td3 = document.createElement("td");
//   td3.textContent = employee.salary;
//   tr.appendChild(td3);
//   td3.addEventListener("click", function () {
//     td3.textContent = Number(td3.textContent) * 1.1;
//   });

//   table.appendChild(tr);
// }

// let table = document.querySelector("#table");
// let button = document.querySelector("button");

// let k = 2;

// button.addEventListener("click", function () {
//   let tr = document.createElement("tr");
//   for (let i = 1; i < k + 1; i++) {
//     let td = document.createElement("td");
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);

//   let trs = document.querySelectorAll("#table tr");
//   for (let tr of trs) {
//     let td = document.createElement("td");
//     tr.appendChild(td);
//   }
//   k++;
// });

// let parent = document.querySelector("#parent");

// for (let i = 1; i <= 9; i++) {
//   let p = document.createElement("p");
//   p.textContent = i;

//   p.addEventListener("click", function () {
//     this.remove();
//   });

//   parent.appendChild(p);
// }

// let parent = document.querySelector("#parent");
// let lis = document.querySelectorAll("li");
// let button = document.querySelector("#button");

// button.addEventListener("click", function () {
//   let newLi = document.createElement("li");
//   newLi.textContent = "x";
//   parent.appendChild(newLi);
//   newLi.addEventListener("click", function () {
//     this.remove();
//   });
// });
// for (let li of lis) {
//   li.addEventListener("click", function () {
//     this.remove();
//   });
// }

// let elem = document.querySelector("#elem");
// let remove = document.querySelector("#remove");

// remove.addEventListener("click", function (event) {
//   elem.remove();
//   event.preventDefault();
// });

// let elems = document.querySelectorAll("#parent li");

// for (let elem of elems) {
//   let remove = document.createElement("a");
//   remove.href = "";
//   remove.textContent = "remove";
//   elem.appendChild(remove);

//   remove.addEventListener("click", function (event) {
//     elem.remove();
//     event.preventDefault();
//   });
// }

// let table = document.querySelector("#table");
// let trs = document.querySelectorAll("tr");

// for (let tr of trs) {
//   let td = document.createElement("td");
//   let remove = document.createElement("a");
//   td.innerHTML = remove;
//   tr.appendChild(td);

//   remove.href = "";
//   remove.textContent = "remove";
//   td.appendChild(remove);
//   remove.addEventListener("click", function (event) {
//     tr.remove();
//     event.preventDefault();
//   });
// }
// let elem = document.querySelector("#elem");
// let input = document.querySelector("#input");
// input.value = elem.textContent;
// input.addEventListener("keypress", function () {
//   elem.textContent = this.value;
// });

// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function () {
//   let input = document.createElement("input");
//   input.value = elem.textContent;

//   input.addEventListener("blur", function () {
//     elem.textContent = this.value;
//     this.remove();
//   });

//   elem.parentElement.appendChild(input);
// });

// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function () {
//   let input = document.createElement("input");
//   input.value = elem.textContent;

//   elem.appendChild(input);
// });
// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function func() {
//   let input = document.createElement("input");
//   input.value = elem.textContent;

//   elem.textContent = "";
//   elem.appendChild(input);

//   input.addEventListener("blur", function () {
//     elem.textContent = this.value;
//     elem.addEventListener("click", func); // повесим событие обратно
//   });

//   elem.removeEventListener("click", func);
// });

// let elem = document.querySelector("#elem");

// elem.addEventListener("click", function func() {
//   let input = document.createElement("input");
//   input.value = elem.textContent;
//   elem.textContent = "";
//   elem.appendChild(input);

//   input.addEventListener("blur", function () {
//     elem.textContent = this.value;
//     elem.addEventListener("click", func);
//   });
//   elem.removeEventListener("click", func);
// });

// let elems = document.querySelectorAll("#parent p");

// for (let elem of elems) {
//   let remove = document.createElement("a");
//   remove.href = "";
//   remove.textContent = "remove";
//   elem.appendChild(remove);

//   remove.addEventListener("click", function (event) {
//     elem.remove();
//     event.preventDefault();
//   });
// }

// let elems = document.querySelectorAll("#parent li");

// for (let elem of elems) {
//   let remove = document.createElement("a");
//   remove.textContent = "remove";
//   remove.href = "";
//   elem.appendChild(remove);

//   remove.addEventListener("click", function (event) {
//     elem.remove();
//     event.preventDefault();
//   });
// }

// let trs = document.querySelectorAll("tr");

// for (let tr of trs) {
//   let td = document.createElement("td");
//   tr.appendChild(td);
//   let remove = document.createElement("a");
//   remove.textContent = "remove";
//   remove.href = "";
//   td.appendChild(remove);

//   remove.addEventListener("click", function (event) {
//     tr.remove();
//     event.preventDefault();
//   });
// }
