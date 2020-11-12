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

    let navContainer = document.querySelector('.head__container');
    let nav = document.querySelector('.head__nav');
    let navLinks = document.querySelectorAll('.head__nav a');
    let logo = document.querySelector('.head__logo');
    

    // TO ONLY BE RUN IF SCREEN-WIDTH IS MORE THAN 1000px
    if (window.screen.width > 1000 || window.screen.width === 1000) {
    
        if (window.scrollY > 1) {
            
            logo.classList.add('move-logo');
            logo.style.animation = 'logoMove 2s cubic-bezier(.11,.49,0,1.72) forwards .5s';

            


            // --------------------------------------save
            
            navLinks.forEach( (link, index) => {
                link.classList.add('nav-animation');
            });

            setTimeout( () => {
                nav.classList.add('move-nav');
                console.log('hej');
                
            }, 1000);

            navLinks.forEach((link, index) => {
                link.classList.add('link-fade');
                // link.style.animationDelay = `${index / 4 + 1.5}s`;
            });

            // --------------------------------------save

            


            
            
     
    
        } else if (window.scrollY < 1) {
            logo.classList.remove('move-logo');

            logo.style.opacity = 1;
            logo.style.animation = 'logoMoveBack 1s cubic-bezier(.11,.49,0,1.72) forwards';

        
            // --------------------------------------save
            navLinks.forEach((link, index) => {
                
                
                link.style.opacity = 1;
               
                link.style.animation = 'none';
                link.style.animation = '';
                link.classList.remove('link-fade');
    
        
                
                // link.style.animationDelay = `${2 - index }s`;
                link.classList.add('link-fade-out');

                let linkAnimation = document.querySelector('.link-fade-out');

                // linkAnimation.addEventListener('animationend', () => {
                //     nav.classList.remove('move-nav');
                // });

                
            });

            
            // --------------------------------------save 
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
