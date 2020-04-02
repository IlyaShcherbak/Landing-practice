//back to top button
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
            window.scrollBy(0, -70);
            setTimeout(backToTop, 10);
        }
    }

    let goToBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goToBtn.addEventListener('click', backToTop);
})();

//modal window
let modal = document.getElementById('modal-window');
let btn = document.getElementById('learn-more-button');
let close = document.getElementById('modal-close');
const body = document.body;

btn.onclick = function() {
    body.style.overflowY = 'hidden';
    modal.style.display = "block";
};

close.onclick = function() {
    body.style.overflowY = 'auto';
    modal.style.display = "none";
};

let mManagement = document.getElementById('modal-management');
let mBranding = document.getElementById('modal-branding');
let mDesign = document.getElementById('modal-design');
let mAnimation = document.getElementById('modal-animation');

let mManagementText = document.getElementById('modal-management-text');
let mBrandingText = document.getElementById('modal-branding-text');
let mDesignText = document.getElementById('modal-design-text');
let mAnimationText = document.getElementById('modal-animation-text');

mManagement.onclick = function() {
    mManagementText.style.display = 'block';
    mBrandingText.style.display = 'none';
    mDesignText.style.display = 'none';
    mAnimationText.style.display = 'none';
};

mBranding.onclick = function() {
    mManagementText.style.display = 'none';
    mBrandingText.style.display = 'block';
    mDesignText.style.display = 'none';
    mAnimationText.style.display = 'none';
};
mDesign.onclick = function() {
    mManagementText.style.display = 'none';
    mBrandingText.style.display = 'none';
    mDesignText.style.display = 'block';
    mAnimationText.style.display = 'none';
};
mAnimation.onclick = function() {
    mManagementText.style.display = 'none';
    mBrandingText.style.display = 'none';
    mDesignText.style.display = 'none';
    mAnimationText.style.display = 'block';
};