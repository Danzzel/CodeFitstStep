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
 


// форма авторизації+registration
// форма авторизації+registration
// форма авторизації+registration
// форма авторизації+registration

// кнопка
// кнопка
// кнопка
var login = document.querySelector('.login')
var closeLogin = document.querySelector('.closeLogin')
var loginForm = document.querySelector('.loginForm')
var $closeReg = document.querySelector('.closeReg')
var regForm = document.querySelector('.regForm')

var login1 = document.querySelector('.login1')

closeLogin.onclick = function offLoginForm() {
    loginForm.style.display = 'none'    
}
$closeReg.onclick = function offLoginForm() {
    regForm.style.display = 'none'    
}


login.onclick = function onLoginForm() {
    loginForm.style.display = 'block'    
}
login1.onclick = function onLoginForm() {
    loginForm.style.display = 'block'    
}

// форма
// форма
// форма
// форма

var $loginInput = document.querySelector('.loginInput')
var $passInput = document.querySelector('.passwordInput')
var $logBtn =document.querySelector('#logBtn')
var $logOk = document.querySelector('.logOk')
var $reg = document.querySelector('.reg')
var $registration = document.querySelector('#registration')
var $regPass = document.querySelector('#regPass')
var $regLog =document.querySelector('#regLog')
var $regName = document.querySelector('#regName')
var $regLastName = document.querySelector('#regLastName')
var $regBirthday = document.querySelector('#regBirthday')
var $regBtn = document.querySelector('#regBtn')




$regBirthday.value = ''


const logPerson = [
    {login: 'admin', pass:'admin', id:1 },
   
]
const personsInfo =[
    {name:'Денис', lastName:'Мельник', age:27, id:1}
]




// var age = Math.trunc((date-ddd)/ (24 * 3600 * 365.25 * 1000))
 var length = logPerson.length


$regBtn.addEventListener('click', function(){
    let regLog = $regLog.value
    let regpas =$regPass.value
    let regName = $regName.value
    let regLastName = $regLastName.value
    let regRePass =(document.querySelector('#regRePass').value)
     
    let birthday = $regBirthday.value
    let birthday$ = new Date (birthday)
    let date = new Date()

    let age = Math.trunc((date-birthday$)/ (24 * 3600 * 365.25 * 1000))

length = logPerson.length
  
    var logPass ={
        login: regLog,
        pass:regpas ,
        id: length+1,
    }

    var person ={
        name: regName,
        lastName:regLastName ,
        age:age ,
        id: length+1
    }

    let isReg = false

for( let i=0; i<length; i++){
     let Log = logPerson[i].login
     
    if(regLog.length < 6 ){
        alert('Логін повинен бути не менше 6 символів')
        break
    }
    if(regpas.length < 6 ){
        alert('Пароль повинен бути не менше 6 символів')
        break
    }
    if(regName ==''|| regLastName =='' || birthday==''){
        alert('Всі поля повинні бути заповнені')
        break
    }
    if(regpas !== regRePass){
        alert('Пароль не співпадає')
        break
    }
    
    if( regLog == Log ){
       
    //    isReg = true
       console.log('Такий користувач зареєстрований!')
       break
       }
       isReg = true
    }
   
       if(isReg){
           logPerson.push(logPass)
           personsInfo.push(person)
           $registration.style.display = 'none'
       }
   }

    
   
)

  
   

loginForm.style.left = loginForm.style.right
$reg.addEventListener('click', function(){
    loginForm.style.display = 'none'
    $registration.style.display = 'block'
    
})




$logBtn.addEventListener('click', function() {
    
    length = logPerson.length
var log = $loginInput.value
var password = $passInput.value
 for(let i =0; i< length; i++){
    var name = logPerson[i].login
    var pass = logPerson[i].pass

    
        if(name == log && pass == password){
         console.log(personsInfo[i])
        //  persId =logPerson.id
        //  goInfo()
         console.log('ok')
         break
     }
     if( name == log && pass !== password){
         console.log('не вірний пароль')
         break
     }
     if(name!==log){
         console.log('Такого користувача не існує')
     }
    //  return i
    // function goInfo () {
    // $logText.innerHTML = 'name: '+ personsInfo[i].name + '<br>' +
    //  'Last Name: '+ personsInfo[i].lastName
// }
 }
})
