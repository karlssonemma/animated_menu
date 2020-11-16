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

let isTrue = true;
console.log(isTrue);

function moveNav() {

    let navContainer = document.querySelector('.head__container');
    let nav = document.querySelector('.head__nav');
    let navLinks = document.querySelectorAll('.head__nav a');
    let logo = document.querySelector('.head__logo');
    

    // TO ONLY BE RUN IF SCREEN-WIDTH IS MORE THAN 1000px
    if (window.screen.width > 1000 || window.screen.width === 1000) {
    
        if (window.scrollY > 0 && isTrue == true) {
            
            
            // logo.style.animation = 'logoMove 2s cubic-bezier(.11,.49,0,1.72) forwards .5s';


            // --------------------------------------save
            
            // navLinks.forEach( (link, index) => {
            //     link.classList.add('nav-animation');
            // });

            // setTimeout( () => {
            //     nav.classList.add('move-nav');
            //     console.log('hej');
                
            // }, 1000);

            // navLinks.forEach((link, index) => {
            //     link.classList.add('link-fade');
            //     // link.style.animationDelay = `${index / 4 + 1.5}s`;
            // });

            // --------------------------------------save

             // --------------------------------------save2
            
                // navContainer.classList.add('header-up');
                

            // funkar med navContainer med
                // let headUp = document.querySelector('.header-up');
                // headUp.addEventListener('animationend', () => {
                //     nav.classList.add('move-nav');
                //     nav.classList.add('open');
                //     navContainer.classList.remove('header-up');
                // });
            
                // isTrue = !isTrue;
                // console.log(isTrue);
            
            // --------------------------------------save2


            // --------------------------------------TRY3
            



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
            

            // --------------------------------------TRY3
     
    
        } else if (window.scrollY < 1 && isTrue == false) {
            // logo.classList.remove('move-logo');

            // logo.style.opacity = 1;
            // logo.style.animation = 'logoMoveBack 1s cubic-bezier(.11,.49,0,1.72) forwards';

        
            // navLinks.forEach(link => {
            //     link.classList.remove('open');
            // })
            
            // let links = document.querySelectorAll('.nav-link');


            // --------------------------------------TRY3

            nav.classList.replace('in-v', 'out-v');
            logo.classList.replace('logo-in-v', 'logo-out-v');

            let outV = document.querySelector('.logo-out-v');
            outV.addEventListener('animationend', () => {
                nav.classList.replace('out-v', 'in-h');
                logo.classList.replace('logo-out-v', 'in-h');
            });

            isTrue = !isTrue;
            console.log(isTrue);


            // --------------------------------------TRY3



             // --------------------------------------save2

            // nav.classList.remove('open');

            // let lastLink = document.querySelector('.nav-link:last-child');
            

            // lastLink.addEventListener('transitionend', () => {
            //     nav.classList.remove('move-nav');
                
                
            //     console.log('works fine');
            // });

           

            // isTrue = !isTrue;
            // console.log(isTrue);
             // --------------------------------------save2

            // links.forEach(link => {
            //     link.addEventListener('transitionend', () => {
            //         nav.classList.remove('move-nav');
            //         navContainer.classList.add('header-down');
            //     })
            // })

            // let headDown = document.querySelector('.header-down');
            // console.log(headDown);
            // headDown.addEventListener('animationend', () => {
            //     navContainer.classList.remove('header-down');
            // })



            // --------------------------------------save
            // navLinks.forEach((link, index) => {
                
                
            //     link.style.opacity = 1;
               
            //     link.style.animation = 'none';
            //     link.style.animation = '';
            //     link.classList.remove('link-fade');
    
        
                
                // link.style.animationDelay = `${2 - index }s`;
                // link.classList.add('link-fade-out');

                // let linkAnimation = document.querySelector('.link-fade-out');

                
            // });

            
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
