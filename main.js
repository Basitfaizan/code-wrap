let menu = document.querySelector('#menuItems');
let nav = document.querySelector('.bar');

nav.addEventListener('click',function(){
  nav.classList.toggle('barActive');
  menu.classList.toggle('active');
});