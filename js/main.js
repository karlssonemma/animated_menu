// window.addEventListener('onscroll', () => {

//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         let nav = document.querySelector('.head__nav');
//         nav.classList.add('move-nav');

//         console.log(3)
//     }
// })

let body = document.querySelector('body');
let grid = document.querySelector('.grid__container');

console.log(grid.getBoundingClientRect());



// window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
// })


function moveNav() {

    let nav = document.querySelector('.head__nav');
    let navLinks = document.querySelectorAll('.head__nav a');
    let logo = document.querySelector('.head__logo');
    

    if (window.scrollY > 121.3125) {
        nav.classList.add('move-nav');
        logo.classList.add('move-logo');

        navLinks.forEach((link, index) => {
            link.style.opacity = 0;
            link.style.animation = `linkFade 1s cubic-bezier(.11,.49,0,1.72) forwards ${index / 2 + .5}s`
     });

    } else if (window.scrollY < 121.3125) {
        nav.classList.remove('move-nav');
        logo.classList.remove('move-logo');

        navLinks.forEach((link, index) => {
            link.style.opacity = 1;
            link.style.animation = '';
        })
    }
};

window.addEventListener('scroll', moveNav);