// const menuIcon = document.querySelector('menuIcon');
// const mobContainerActive = document.querySelector('sendBtn');



// mobContainerActive.onclick = function () {
//     menuIcon.classList.toggle('menuIconActive');
// };
const sitebarToggleBtn = document.querySelector('.menu_icon_wrapper');
const menuIcon = document.querySelector('.menuIcon');
const mobNavigationActive = document.querySelector('.mobNavigation')

sitebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menuIconActive');
    mobNavigationActive.classList.toggle('mobNavigationActive');
};
