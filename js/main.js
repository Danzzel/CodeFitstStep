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

var btnGalleryPrev = document.querySelector('.btnGalleryPrev')
var btnGalleryNext = document.querySelector('.btnGalleryNext')
var galeryImg = document.querySelector('.galeryImg')
var i =0

var galery = [
    '../img/Layer20.png',
    '../img/Layer21.png',
    '../img/Layer22.png',
    '../img/good04.png'
    
]
galeryImg.src = galery[1]
length = galery.length

btnGalleryNext.onclick = function () {
    if(i>=length-1){
        i=0
    }
    else{i++}
    
    galeryImg.src = galery[i]
}
btnGalleryPrev.onclick = function () {
    if(i<=0){
    i=2
    }
else {i--}
    
    galeryImg.src = galery[i]
  
} 
 
// var inputImg = document.querySelector('inputImg')
// var inputImgBtn = document.querySelector('inputImgBtn')

// function loadImg() {
//     // var addImg = inputImg.value
//     galery.push(inputImg.value)
// }
// inputBtn.addEventListener('click',loadImg)


var login = document.querySelector('.login')
var closeLogin = document.querySelector('.closeLogin')
var loginForm = document.querySelector('.loginForm')



closeLogin.onclick = function offLoginForm() {
    loginForm.style.display = 'none'    
}

login.onclick = function onLoginForm() {
    loginForm.style.display = 'block'    
}