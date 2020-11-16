
let body = document.querySelector('body');
let grid = document.querySelector('.grid__container');

console.log(grid.getBoundingClientRect());



let isTrue = true;


function moveNav() {

    let nav = document.querySelector('.head__nav');
    let logo = document.querySelector('.head__logo');
    
    // TO ONLY BE RUN IF SCREEN-WIDTH IS MORE THAN 1000px
    if (window.screen.width > 1000 || window.screen.width === 1000) {
    
        if (window.scrollY > 0 && isTrue) {
        

            if (nav.classList.contains('in-h')) {
                nav.classList.replace('in-h', 'out-h');
                logo.classList.replace('in-h', 'out-h');
            } else {
                nav.classList.add('out-h');
                logo.classList.add('out-h');
            }


            let outH = document.querySelector('.out-h');

            outH.addEventListener('animationend', () => {
                nav.classList.replace('out-h', 'in-v');
                logo.classList.replace('out-h', 'logo-in-v');
            });

            isTrue = !isTrue;
     
    
        } else if (window.scrollY < 1 && !isTrue) {

            nav.classList.replace('in-v', 'out-v');
            logo.classList.replace('logo-in-v', 'logo-out-v');

            let outV = document.querySelector('.logo-out-v');
            outV.addEventListener('animationend', () => {
                nav.classList.replace('out-v', 'in-h');
                logo.classList.replace('logo-out-v', 'in-h');
            });

            isTrue = !isTrue;
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



// LINK ON HOVER ANIMATION

function linkHover(e) {

    if (window.screen.width > 1000 || window.screen.width === 1000) {
        let line = e.target.lastChild;

        line.style.animation = 'navActive .2s ease forwards';
    };
};

function linkHoverOut(e) {

    if (window.screen.width > 1000 || window.screen.width === 1000) {
        let line = e.target.lastChild;

        line.style.animation = 'navNotActive .2s ease forwards';
    };
};



let links = document.getElementsByClassName('nav-link');

    for (const link of links) {
        link.addEventListener('mouseover', linkHover);
        link.addEventListener('mouseout', linkHoverOut);
    }