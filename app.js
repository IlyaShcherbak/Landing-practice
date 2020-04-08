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

//product tabs
const tabAll = document.getElementById('product-list-all');
const tabPrintTemplate = document.getElementById('product-list-print-template');
const tabWebTemplate = document.getElementById('product-list-web-template');
const tabUserInterface = document.getElementById('product-list-user-interface');
const tabMockUp = document.getElementById('product-list-mock-up');

const img1 = document.getElementById('print-template-1');
const img2 = document.getElementById('print-template-2');
const img3 = document.getElementById('web-template-1');
const img4 = document.getElementById('web-template-2');
const img5 = document.getElementById('user-interface-1');
const img6 = document.getElementById('user-interface-2');
const img7 = document.getElementById('mock-up-1');
const img8 = document.getElementById('mock-up-2');

// const productTabs = [
// //     {tabName: tabAll, tabElements:[img1, img2, img3, img4, img5, img6, img7, img8]},
// //     {tabName: tabPrintTemplate, tabElements:[img1, img2]},
// //     {tabName: tabWebTemplate, tabElements:[img3, img4]},
// //     {tabName: tabUserInterface, tabElements:[img5, img6]},
// //     {tabName: tabMockUp, tabElements:[img7, img8]},
// // // ];

tabAll.onclick = function(){
    img1.style.display = 'block';
    img2.style.display = 'block';
    img3.style.display = 'block';
    img4.style.display = 'block';
    img5.style.display = 'block';
    img6.style.display = 'block';
    img7.style.display = 'block';
    img8.style.display = 'block';
};

tabPrintTemplate.onclick = function(){
    img1.style.display = 'block';
    img2.style.display = 'block';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none';
    img6.style.display = 'none';
    img7.style.display = 'none';
    img8.style.display = 'none';
};
tabWebTemplate.onclick = function(){
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'block';
    img4.style.display = 'block';
    img5.style.display = 'none';
    img6.style.display = 'none';
    img7.style.display = 'none';
    img8.style.display = 'none';
};
tabUserInterface.onclick = function(){
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'block';
    img6.style.display = 'block';
    img7.style.display = 'none';
    img8.style.display = 'none';
};
tabMockUp.onclick = function(){
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none';
    img6.style.display = 'none';
    img7.style.display = 'block';
    img8.style.display = 'block';
};