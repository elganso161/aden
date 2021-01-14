let burger = document.querySelector('.burger');
let nav = document.querySelector(".nav__list-nav");
let b = document.querySelector('body')

let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");


burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  b1.classList.toggle("burger-active");
  b2.classList.toggle("burger-active");
  b3.classList.toggle("burger-active");
  b.classList.toggle('body-active')
});

// bu.addEventListener('click', f1)

// function f1() {
//   a.style.display = 'block'
//   b.style.position = 'fixed'
// }



