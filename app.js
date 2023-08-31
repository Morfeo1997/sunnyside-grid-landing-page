let menu = document.querySelector("#menu");
let logoMenu = document.querySelector("#menu-logo-1");
let logoMenu2 = document.querySelector("#menu-logo-2");

function change(){
    logoMenu.style.display = 'none';
    logoMenu2.style.display = 'flex';
    menu.style.display = 'flex';
}

function change2(){
    logoMenu.style.display = 'flex';
    logoMenu2.style.display = 'none';
    menu.style.display = 'none';
}