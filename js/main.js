let grid = document.querySelector('.grid__container');
let nav = document.querySelector('.head__nav');
let logo = document.querySelector('.head__logo');
let links = document.getElementsByClassName('nav-link');

let isTrue = true;

// ANIMATIONS FOR NAVBAR.
function moveNav() {
    
    // TO ONLY BE RUN IF SCREEN-WIDTH IS MORE THAN 1000px
    if (window.innerWidth >= 1000) {
    
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


// ON HOVER WHEN MENU IS TO THE RIGHT.
for (const link of links) {
    link.addEventListener('mouseover', (e) => {
        if (nav.classList.contains('in-v')) {
            link.classList.toggle('active-v');
        }
    });

    link.addEventListener('mouseout', (e) => {
        if (nav.classList.contains('in-v')) {
            link.classList.toggle('active-v');
        }
    });
};
