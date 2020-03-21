(function () {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled>coords){
            goToBtn.classList.add('back-to-top-show');
        }
        if (coords>scrolled){
            goToBtn.classList.remove('back-to-top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset>0){
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    let goToBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goToBtn.addEventListener('click', backToTop);
})();




