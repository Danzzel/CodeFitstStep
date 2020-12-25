const block = document.querySelector('.block')
const happy = document.querySelector('.happy')
const sad = document.querySelector('.sad')

var input = document.querySelector('.input')
var inputBtn = document.querySelector('.inputBtn')
var yourText = document.querySelector('.yourText')

var hasHappy = block.classList.contains ('happy')
// var hasSad = block.classList.contains ('sad')
 function changeSmile(){

    if (hasHappy) {
        block.classList.remove ('happy')
        block.classList.add ('sad')  
    }
    else  {
        block.classList.remove ('sad')
        block.classList.add ('happy')
    }

}

block.addEventListener('click', changeSmile)


function castomText () {
    yourText.textContent = input.value
    input.value = ''
}
inputBtn.addEventListener('click',castomText)

yourText.addEventListener('mouseenter', function(){
    this.style.color = 'red';
})
yourText.addEventListener('mouseleave', function(){
    this.style.color = 'black';
})

block.addEventListener('mouseenter',function(){
    this.style.backgroundImage = 'url(../img/imgExperiments/HappySmiley.png'
})
block.addEventListener('mouseleave',function(){
    this.style.backgroundImage = 'url(../img/imgExperiments/sadSmile.png'
})

var p = document.querySelectorAll('p')


for (var i=0; i<p.length; i++) {
p[i].addEventListener('click', function(event) {
    event.target.style.color = event.target.style.color == 'green'
    ?'red'
   
    :'green'

})
}