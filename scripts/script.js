let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z",];
let arr_EN = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z",];
let arr_symb = ["!", "@", "#", "$", "%", "?", "-", "+", "=", "~"];

const compareRandom = () => Math.random() - 0.5;

const randomInteger = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
  let arr = [];
  if (document.querySelector("#arr_num").checked) arr = arr.concat(arr_num);
  if (document.querySelector("#arr_en").checked) arr = arr.concat(arr_en);
  if (document.querySelector("#arr_EN").checked) arr = arr.concat(arr_EN);
  if (document.querySelector("#arr_symb").checked) arr = arr.concat(arr_symb);

  arr.sort(compareRandom);

  let password = "";
  let passLenght = document.querySelector("#passLenght").value;

  for (let i = 0; i < passLenght; i++) {
    password += arr[randomInteger(0, arr.length - 1)];
  }
  document.querySelector("#result").textContent = password;
}

let slider = document.getElementById("passLenght");
let output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

pass_start.onclick = function () {
  this.classList.toggle("rotate");
};

document.querySelector("#pass_start").addEventListener("click", generatePassword);

document.querySelector("#passLenght").addEventListener("input", generatePassword);

const select = document.querySelector("select");
const allLang = ["en", "ru"];

select.addEventListener("change", changeURLLanguage);

function copytext(el) {
  var $tmp = $("<textarea>");
  $("body").append($tmp);
  $tmp.val($(el).text()).select();
  document.execCommand("copy");
  $tmp.remove();
}

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;
  document.querySelector("title").innerHTML = langArr["unit"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
