// Header
let navItem = document.querySelectorAll('.header .container .navbar a');

window.onload = () => {
    let foundActive = false;
    navItem.forEach(element => {
        element.classList.remove('active');
    });
    navItem.forEach(element => {
        if (window.location.pathname.includes(element.getAttribute('href'))) {
            element.classList.add('active');
            foundActive = true;
        }
    });

    if (!foundActive) {
        navItem[0].classList.add('active');
    }
};


let icon = document.querySelector('.header .container .toggle-menu i');
let navbar = document.querySelector('.header .container .navbar');

icon.onclick = function () {
    if (navbar.classList.contains('hidden')){
        navbar.classList.remove('hidden');
        navbar.classList.add('show');
    }else{
        navbar.classList.remove('show');
        navbar.classList.add('hidden');
    }
}

let setValue = document.querySelector('.header .container .cart span');

setValue.innerHTML = localStorage.getItem('totalProducts') || '0';