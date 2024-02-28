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
