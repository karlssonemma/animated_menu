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
    
    // TO ONLY BE RUN IF SCREEN-WIDTH IS MORE THAN 700px
    if (window.screen.width > 700) {
    
        if (window.scrollY > 1) {
            nav.classList.add('move-nav');
            logo.classList.add('move-logo');
            logo.style.animation = 'logoFade 2s cubic-bezier(.11,.49,0,1.72) forwards .5s'
    
            navLinks.forEach((link, index) => {
                link.style.opacity = 0;
                link.style.animation = `linkFade 1s cubic-bezier(.11,.49,0,1.72) ${index / 2 + 2}s 1 forwards`
            });
    
        } else if (window.scrollY < 1) {
            nav.classList.remove('move-nav');
            logo.classList.remove('move-logo');
            logo.style.animation = '';
    
            navLinks.forEach((link, index) => {
                link.style.opacity = 1;
                link.style.animation = '';
            });
        };

    };
};

window.addEventListener('scroll', moveNav);

