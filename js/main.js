const block = document.querySelector('.block')
const happy = document.querySelector('.happy')
const sad = document.querySelector('.sad')

var hasHappy = block.classList.contains ('happy')
// var hasSad = block.classList.contains ('sad')
$(block).on('click', function(){

    if (hasHappy) {
        block.classList.remove ('happy')
        block.classList.add ('sad')  
    }
    else  {
        block.classList.remove ('sad')
        block.classList.add ('happy')
    }

})
