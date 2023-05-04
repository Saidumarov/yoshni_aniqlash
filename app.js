
let form = document.querySelector("form");
let text1 = document.querySelector("#text1");
let yosh = document.getElementById("sana");

function ok() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    restform();
  })
  let text = document.querySelector("#text");
  let yoshj = document.getElementById("sana").value;
  let yil = new Date().getFullYear();

  let age = yil - yoshj;
  text.textContent = "Siz " + age;

  if (document.querySelector("input").value < 1000) {
    text1.innerHTML = "yilsiz"
  } else if (document.querySelector("input").value > 1000) {
    text1.innerHTML = "yoshsiz"
  } else if (document.querySelector("input").value = String) {
    text1.innerHTML = "ya'ni noto'gri ma'lumot kiritdingiz"
  }
}


const restform = () => {
  yosh.value = "";
}

