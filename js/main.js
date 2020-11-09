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
    
    // TO ONLY BE RUN IF SCREEN-WIDTH IS MORE THAN 1000px
    if (window.screen.width > 1000 || window.screen.width === 1000) {
    
        if (window.scrollY > 1) {
            nav.classList.add('move-nav');
            logo.classList.add('move-logo');
            logo.style.animation = 'logoFade .5s cubic-bezier(.11,.49,0,1.72) forwards .5s'
    
            navLinks.forEach((link, index) => {
                link.style.opacity = 0;
                link.style.animation = `linkFade 1s cubic-bezier(.11,.49,0,1.72) ${index / 4 + 1.5}s forwards`
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


let images = document.getElementsByClassName('grid__img');

for (const img of images) {
    img.addEventListener('click', (e) => {
        // img.style.gridColumn = '1 / span 2';
        img.classList.toggle('big-img');
        console.log(e);

        // img.style.animation = `picFade 1s forwards`

    })
}


function navHover(e) {
    let link = e.target.children;
    link.style.width = 10 + 'px';
};


let links = document.getElementsByClassName('nav-link')
for (const link of links) {
    link.addEventListener('mouseover', navHover)
}

for (const link of links) {
    
}