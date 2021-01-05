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
galeryImg.src = galery[0]
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
    i=length-1
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

var login1 = document.querySelector('.login1')

closeLogin.onclick = function offLoginForm() {
    loginForm.style.display = 'none'    
}


login.onclick = function onLoginForm() {
    loginForm.style.display = 'block'    
}
login1.onclick = function onLoginForm() {
    loginForm.style.display = 'block'    
}

// форма авторизації
// форма авторизації
// форма авторизації
// форма авторизації

var loginInput = document.querySelector('.loginInput')
var passInput = document.querySelector('.passwordInput')
var logBtn =document.querySelector('.inLogin')
var logOk = document.querySelector('.logOk')

var logPerson = [
    {name: 'admin', pass:'admin' }
]
var a= logPerson.name
var log = loginInput.value
var pass = passInput.value

logBtn.addEventListener('click', function() {
   logPerson.find(function(person) {
        // return person.name == 'admin' 
        if( log == a){
            console.log('Ok')
        }
        else {
            console.log('Ne Ok')
        }
    })
        // if (f){
            
        // }
        // else {
        //     console.log('wrong')
        // }
    

        
// logPerson.find (function(){
//    function p(){ logOk.style.display = 'none'}
//   if (logPerson.name == true  && logPerson.pass == true ){
//     logOk.style.display = 'block'
//     loginForm.style.display = 'none'
   
    
//    }
//     else {
//      logOk.style.backgroundImage = 'url(../img/sadSmile.png)' 
//     logOk.style.display = 'block'
//     loginForm.style.display = 'none'
//    function disNone(){
//     logOk.style.display = 'none'
    
//    }
        
// }
// setTimeout(p, 1000)

// })
    

// var log = loginInput.value
// var pass = passInput.value
// var den = [{name: log , pass:pass}]
// logPerson = logPerson.concat(den);
// console.log(logPerson)
loginInput.value =''
passInput.value = ''
})
