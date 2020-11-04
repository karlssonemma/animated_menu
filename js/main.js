window.addEventListener('onscroll', () => {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        let nav = document.querySelector('.head__nav');
        nav.classList.add('move-nav');

        console.log(3)
    }
})
