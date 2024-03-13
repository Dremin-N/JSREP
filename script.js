const getNumber = (max = 11, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

const optimizeNumber = (n) => {
  let str = n + "";
  return str.length === 2 ? str : "0" + str;
};

const data = [];
const colors = [
  "#9C51FFaa",
  "#A2C201aa",
  "#F2A663aa",
  "#002029aa",
  "#BF3F3Faa",
];
let n = Math.floor(getNumber(61, 6) / 6) * 6;

while (n--) {
  data.push(getNumber(100));
}

const box = document.querySelector(".box");
box.innerHTML = `<div class="card"></div>`;
const card = document.querySelector(".card");
for (let val of data) {
  box.innerHTML += `<div class="card" style="background-color: ${
    colors[getNumber(colors.length)]
  }">${optimizeNumber(val)}</div>`;
}
function showTime(day = new Date(2025, 1, 7, 23)) {
  let now = new Date();
  let final = new Date(2025, 1, 7);

  console.log(now, final);

  let d, h, m, s;
  let time = Math.floor((final - now) / 1000);
  m = Math.floor(time / 60);
  s = time - m * 60;
  h = Math.floor(m / 60);
  m -= h * 60;
  d = Math.floor(h / 24);
  h -= d * 24;
  return `${d}д. ${h}ч. ${m}мин. ${s}сек.`;
}

setInterval(function () {
  box.firstElementChild.innerText = `До окончания осталось ${showTime()}`;
}, 1000);

//! Задача 2.1
let rootElement = document.querySelector("#root");
let new_element = document.createElement("p");
console.log(rootElement);
new_element.innerText = "Ура, мой скрипт отработал верно";
rootElement.appendChild(new_element);

//! Задача 2.2 В HTML-документе есть тег <p> c идентификатором title. Напишите скрипт, который создает новый элемент <h2> в переменной new_element с текстовым содержимым Сегодня солнечно, минус 15 и добавляет новый элемент сразу после тега с идентификатором title.

new_element = document.createElement("h2");
let title = document.querySelector("#title");

new_element.innerText = "Сегодня солнечно, минус 15";
console.log(title);
document.body.insertBefore(new_element, title.nextSibling);

//! Задача 2.7 В скрипте объявлен массив values, который состоит из чисел. В HTML-документе есть множество тегов <p> с классом elems. Необходимо дописать скрипт так, чтобы он удалил все теги <p> с классом elems, значение которых входит в массив values

const values = [10, 50, 1000];

let elems = document.querySelectorAll(".elems");

//* Через includes
// elems.forEach((el) => {
//   if (values.includes(Number(el.innerText))) {
//     el.remove();
//   }
// });

//* Через index of

elems.forEach((el) => {
  if (values.indexOf(Number(el.innerText)) !== -1) {
    el.remove();
  }
});

//! Задача 2.8 В HTML-документе заданы два <div> тега с идентификаторами div1 и div2. Напишите скрипт, который позволит перенести содержимое тега с идентификатором div1 в конец тега с идентификатором div2.

let div1 = document.querySelector("#div1");

let contentToMove = div1.innerHTML;
console.log(contentToMove);
div1.nextElementSibling.innerHTML += contentToMove;

//! Задача 2.9 В HTML-документе есть тег <ul> c идентификатором first. Внутри этого тега есть теги <li>. Напишите скрипт, который создает новый тег <li> в переменной new_element и добавляет в элемент <ul> с идентификатором first. После добавления нового элемента выведите в консоль общее количество тегов <li> в теге <ul> с идентификатором first.

let ulElement = document.querySelector("#first");
new_element = document.createElement("li");
new_element.innerText = 4;
ulElement.appendChild(new_element);

//! Задача 2.10 В скрипте объявлена переменная values, которая содержит массив из строк. В HTML-верстке есть два тега <div> с классами div1 и div2. Допишите скрипт так, чтобы все теги <p> из тега с идентификатором div1, значение которого встречается в списке values, переместились в тег с идентификатором div2.

const valuesStr = ["велосипед", "ролики", "лыжи"];

var div1Str = document.getElementById("div1_str");
var div2Str = document.getElementById("div2_str");

var paragraphs = div1Str.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraphText = paragraphs[i].textContent.trim();

  if (valuesStr.includes(paragraphText)) {
    div2Str.appendChild(paragraphs[i]);
    i--;
  }
}

//! Задача 2.11 В скрипте объявлена переменная task, в которой хранится список из строк. В HTML-верстке есть тег <div> с идентификатором root. Допишите скрипт так, чтобы на основе значений списка сформировались теги <p> и добавились в элемент с идентификатором root.

let tasks = [
  "Проверить документы",
  "Отправить начальству",
  "Организовать собрание",
];

for (let val of tasks) {
  let elem = document.createElement("p");
  elem.innerText = val;
  document.querySelector("#pure").appendChild(elem);
}

//! Задача 2.12 Напишите программу, которая считает количество <div>-, <p>- и <h2>-тегов и записывает его в объект tags, как в примере. Выведите сформированный объект в консоль.

const tags = {};
tags["div"] = document.getElementsByTagName("div").length;
tags["p"] = document.querySelectorAll("p").length;
tags["h2"] = document.querySelectorAll("h2").length;
console.log(tags);

//! Задача 2.13 В HTML-документе есть тег <ul> с идентификатором tasks, и внутри него есть несколько тегов <li> с текстом. Напишите скрипт, который позволяет отсортировать элементы <li> в теге <ul> по длине содержимого.

let ulTask = document.querySelector("#tasks");
let liTask = ulTask.querySelectorAll("li");
let listArray = Array.from(liTask);
listArray.sort(function (a, b) {
  return a.innerText.length - b.innerText.length;
});
ulTask.innerHTML = "";

listArray.forEach((el) => {
  ulTask.appendChild(el);
});

let input = document.createElement("input");
input.type = "number";
input.min = "10";
input.max = "150";
input.step = "0.1";
input.name = "weight";

let label = document.createElement("label");
label.innerText = "Выберите вес";

input.id = "wght";
label.setAttribute("for", "wght");

document.body.append(input, label);

if (!input.hasAttribute("placeholder")) {
  input.setAttribute("placeholder", "55.5");
}

if (input.hasAttribute("max")) {
  input.removeAttribute("max");
}

let items = document.querySelectorAll(".item");
let index = 0;
setInterval(function () {
  items[index].classList.add("active");
  for (let i = 0; i < items.length; i++) {
    if (i !== index) {
      items[i].classList.contains("active") &&
        items[i].classList.remove("active");
    }
  }
  index++;
  if (index === items.length) {
    index = 0;
  }
  let colorStart = getColor([100, 200], [50, 200], [200, 256]);
  let colorEnd = getColor([100, 150], [50, 100], [200, 256]);
  items[index].style.backgroundImage = setGradient([colorStart, colorEnd]);
}, 2000);

function getColor(r, g, b) {
  let red = getNumber(...r);
  let green = getNumber(...g);
  let blue = getNumber(...b);
  return `rgb(${red},${green},${blue})`;
}

function setGradient(colors, angle = 120) {
  return `linear-gradient(${angle}deg, ${colors})`;
}

let header = document.querySelector("header");
let footer = document.querySelector("footer");
footer.innerText = new Date().toLocaleDateString();
items[0].parentElement.style.height =
  window.innerHeight - (header.offsetHeight + footer.offsetHeight) + "px";

//! Задча 3.1 В HTML-документе задан тег <div> с идентификатором div_elem. Напишите скрипт, который добавит в стиль данного элемента ширину и высоту по 100 пикселей.

let divElem = document.getElementById("div_elem");

divElem.style.height = 100 + "px";
divElem.style.width = 100 + "px";
divElem.style.border = "1px solid red";

//! ЗАдача 3.2 В HTML-документе задан тег <p> с идентификатором rainbow. Напишите скрипт, который указывает в стиле синий цвет текста (#2980b9).

let pElem = document.getElementById("rainbow");
// pElem.style.color = "blue";

//!   Задача 3.4 В HTML-документе есть тег <p> c идентификатором rainbow. Внутри этого тега указано число. Реализуйте скрипт, который делает преобразование в зависимости от следующих условий:

if (Number(pElem.innerText) > 0 && Number(pElem.innerText) < 10) {
  pElem.style.color = "#c0392b";
} else if (
  parseFloat(pElem.innerText) >= 10 &&
  parseFloat(pElem.innerText) <= 20
) {
  pElem.style.color = "#e17055";
} else {
  pElem.style.color = "#fdcb6e";
}

//! Задача 3.5 В HTML-документе есть тег <div> с идентификатором photo. Внутри этого тега указана ссылка на картинку. Необходимо написать скрипт, который:

let photo = document.getElementById("photo");
let link = photo.querySelector("a").getAttribute("href");
console.log(link);

let imgElem = document.createElement("img");
imgElem.src = link;
imgElem.alt = "logo";
imgElem.style.height = "200px";
imgElem.style.width = "300px";

photo.replaceChild(imgElem, photo.querySelector("a"));

//! Задача 3.6 В HTML-документе задан тег <select> c идентификатором numbers. Напишите скрипт, который добавит внутрь этого тега несколько тегов <option> со значениями от 10 до 550 с шагом 10. Значение у тега <option> должно быть указано внутри и в атрибуте value.

let select = document.querySelector("#numbers");

for (let i = 10; i <= 550; i += 10) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.innerText = i;
  select.appendChild(opt);
}

//! Задача 3.7 В HTML-документе задан тег <select>. В скрипте объявлена переменная countries, в которой указаны некоторые страны. Доработайте скрипт так, чтобы в тег <select> добавились теги <option> по одному на каждую страну из массива countries. В качестве значения тега option укажите название страны, а в качестве атрибута — value первые две буквы страны в нижнем регистре (маленькими буквами).

const countries = [
  "Brazil",
  "USA",
  "England",
  "Russia",
  "India",
  "Germany",
  "Italy",
  "England",
  "Russia",
];
let duplicateCountries = [];

let selectCntry = document.querySelector("#countries");

countries.forEach((el) => {
  if (!duplicateCountries.includes(el)) {
    let opt = document.createElement("option");
    opt.value = el.slice(0, 2).toLowerCase();
    opt.innerText = el;
    selectCntry.appendChild(opt);
  }
  duplicateCountries.push(el);
});

function bodyClick(event) {
  if (event.target === this) {
    return;
  }
  const elem = document.createElement("p");
  elem.innerText = `Click ${event.target.id} ${event.currentTarget.id}`;
  document.querySelector("body").appendChild(elem);
}

document.querySelector("body").addEventListener("click", bodyClick);

menu.onclick = function (event) {
  let href = event.target.getAttribute("href");
  alert(href);
  return false;
};

// function onScroll(event) {
//   const elem = document.createElement("p");
//   elem.innerText = `scroll ${window.scrollY}`;
//   document.querySelector("body").appendChild(elem);
// }

// window.addEventListener("scroll", onScroll);

function onResize(event) {
  const elem = document.createElement("p");
  elem.innerText = `size ${window.innerWidth} ${window.innerHeight}`;
  document.querySelector("body").appendChild(elem);
}

window.addEventListener("resize", onResize);

//! Задача 4.1 В HTML-документе задан тег <button> с идентификатором btn и тег <p> с идентификатором val. Напишите скрипт, который выводит в консоль содержимое тега <p> при клике на кнопку.
// function onClick1(event) {
//   console.log(document.querySelector("#val").innerHTML);
// }

// document.querySelector("#btn").addEventListener("click", onClick1);

//! Задача 4.2 В HTML-документе задан тег <button> с идентификатором btn и тег <input> с идентификатором val. Напишите скрипт, который выводит в консоль значение тега <input> при клике на кнопку.
function onClick1(event) {
  console.log(document.querySelector("#val").value);
}

document.querySelector("#btn").addEventListener("click", onClick1);

//! Задача 4.3 В HTML-документе задан тег <div> c идентификатором square. Он представляет собой синий квадрат. Напишите скрипт, который позволяет сделать <div> прозрачным (opacity: 0) при клике по нему.

// function onClickOpacity(event) {
//   this.style.opacity = 0;
// }

// document.querySelector("#square").addEventListener("click", onClickOpacity);

//! Задача 4.5 В HTML-документе задан тег <button> с идентификатором delete и тег <ul> c идентификатором points и c элементами <li> внутри. Напишите скрипт, который позволяет удалить последний элемент <li> в списке <ul> при нажатии на кнопку.

function onClickDelete(event) {
  let lastChild = document.querySelector("#points");
  lastChild.removeChild(lastChild.lastElementChild);
}

document.querySelector("#delete").addEventListener("click", onClickDelete);

//! Задача 4.6 В HTML-документе задан тег <div> c идентификатором square в виде красного квадрата. У него есть атрибут style с указанными высотой и шириной в 100 пикселей. Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.

function onClickWidthHeight(event) {
  this.style.width = this.offsetWidth * 0.9 + "px";
  this.style.height = this.offsetHeight * 0.9 + "px";
}

document.querySelector("#square").addEventListener("click", onClickWidthHeight);

//! Задача 4.7 В HTML-документе задан тег <button> с классом copy. Напишите скрипт, который позволит при нажатии на кнопку <button> создать ее копию и расположить в конце тега body.

function onClickClone(event) {
  body.appendChild(this.cloneNode(true));
}

document.querySelector(".copy").addEventListener("click", onClickClone);

//* Нажатие на клавишу всплывает окно
// document.addEventListener("keydown", (event) => {
//   const keyName = event.key;
//   alert("Нажата клавиша " + keyName);
// });

//! focus
input1.onblur = function () {
  if (!input1.value.includes("+")) {
    input1.classList.add("invalid");
    error.innerHTML = "Пожалуйста, введите правильный номер телефона";
  }
};

input1.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.innerHTML = "";
  }
};

// input1.onchange = function () {
//   alert("Фокус ушел, инпут изменен");
// };

input1.oninput = function () {
  alert("инпут изменен после каждого символа");
};

//! Задача 4.8 В HTML-документе есть несколько тегов <p>. Внутри них указаны числа. Напишите скрипт, который позволяет при нажатии на любой параграф увеличить его содержимое на единицу.

// const paragraphses = document.querySelectorAll("p");

// paragraphses.forEach(function (paragraph) {
//   paragraph.addEventListener("click", function () {
//     let currentnumber = parseFloat(paragraph.textContent);
//     let newNumber = currentnumber + 1;
//     paragraph.textContent = newNumber;
//   });
// });

//! Задача 4.9 В HTML-документе есть два тега <div> с идентификаторами div1 и div2 с элементами <p> внутри. Напишите скрипт, который перемещает тег <p> из одного тега <div> в другой при клике по этому элементу <p>.

let div_1 = document.querySelector("#div_1");
let div_2 = document.querySelector("#div_2");

div_1.addEventListener("click", function (event) {
  let target = event.target;
  if (target.tagName === "P") {
    div_2.appendChild(target);
  }
});

div_2.addEventListener("click", function (event) {
  let target = event.target;
  if (target.tagName === "P") {
    div_1.appendChild(target);
  }
});
