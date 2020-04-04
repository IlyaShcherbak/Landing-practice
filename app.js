//back to top button
const goToBtn = document.querySelector('.back-to-top');
(function () {
    function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;

        if (scrolled > coords){
            goToBtn.classList.add('back-to-top-show');
        }
        if (coords > scrolled){
            goToBtn.classList.remove('back-to-top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0){
            window.scrollBy(0, -70);
            setTimeout(backToTop, 10);
        }
    }

    window.addEventListener('scroll', trackScroll);
    goToBtn.addEventListener('click', backToTop);
})();

//modal window
const modal = document.getElementById('modal-window');
const btn = document.getElementById('learn-more-button');
const close = document.getElementById('modal-close');
const body = document.body;

btn.onclick = function() {
    body.style.overflowY = 'hidden';
    modal.style.display = "block";
    goToBtn.style.display = "none";
};
function closeModal(){
    body.style.overflowY = 'auto';
    modal.style.display = "none";
    goToBtn.style.display = "block";
}
close.onclick = closeModal;

modal.onclick = function(event) {
    if (event.target === modal) {
        body.style.overflowY = 'auto';
        modal.style.display = "none";
        goToBtn.style.display = "block";
    }
};



//modal tabs
const mManagement = document.getElementById('modal-management');
const mBranding = document.getElementById('modal-branding');
const mDesign = document.getElementById('modal-design');
const mAnimation = document.getElementById('modal-animation');

const mManagementText = document.getElementById('modal-management-text');
const mBrandingText = document.getElementById('modal-branding-text');
const mDesignText = document.getElementById('modal-design-text');
const mAnimationText = document.getElementById('modal-animation-text');

// function generateTabs() {
//     const tabNames = ['management', 'branding', 'design', 'animation'];
//
//     return tabNames.map((tabName) => ({
//         tabHeader: document.getElementById(`modal-${tabName}`),
//         tabContent: document.getElementById(`modal-${tabName}-text`)
//     }));
// }

// const tabs = generateTabs();

const tabs = [
    {tabHeader: mManagement, tabContent: mManagementText},
    {tabHeader: mBranding, tabContent: mBrandingText},
    {tabHeader: mDesign, tabContent: mDesignText},
    {tabHeader: mAnimation, tabContent: mAnimationText}
];

tabs.forEach(({tabHeader}, tabIndex) => {
    tabHeader.onclick = function() {
        tabs.forEach(({tabContent}, contentIndex) =>
            contentIndex === tabIndex
                ? tabContent.style.display = 'block'
                : tabContent.style.display = 'none'
        )
    };
});
