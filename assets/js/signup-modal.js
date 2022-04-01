
const signupModalOverlay = document.getElementsByClassName('signup-modal-overlay');
const signupModal = document.getElementsByClassName('signup-modal');
const scheduleCallNavBTN = document.getElementsByClassName('schedule-demo-nav');
const scheduleCallMobileNav = document.getElementsByClassName('schedule-demo-mobile-nav');
const closeIconModal = document.getElementsByClassName('close-modal-icon');

function activateSignupModalForm() {
    signupModalOverlay[0].classList.add('activeModalForm');
    signupModal[0].classList.add('activeModalForm');
}
function deactivateSignupModalForm() {
    signupModalOverlay[0].classList.remove('activeModalForm');
    signupModal[0].classList.remove('activeModalForm');
}

signupModalOverlay[0].addEventListener('click', () => {
    deactivateSignupModalForm();
})
scheduleCallNavBTN[0].addEventListener('click', () => {
    activateSignupModalForm();
})
scheduleCallMobileNav[0].addEventListener('click', () => {
    closeMenu();
    activateSignupModalForm();
})
closeIconModal[0].addEventListener('click', () => {
    deactivateSignupModalForm();
})