const allJumbleWords = document.getElementsByClassName("jumble")
const letters = '$BCD%FGHI&KLMN0PQRST!VWXYZ'


for(var i=0; i < allJumbleWords.length; i++){

    allJumbleWords[i].setAttribute('data-value', allJumbleWords[i].innerText)
    // console.log(allJumbleWords[i].dataset.value)
    allJumbleWords[i].addEventListener('mouseover', jumbleWord)
 }


function jumbleWord(e){

    let iterations = -2

    const interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split("")
        .map( (letter, index) => {
            if(index < iterations) return e.target.dataset.value[index]
            
            return letters[Math.floor(Math.random()*26)]
        })
        
        
        .join("")

        if(iterations >= e.target.dataset.value.length) clearInterval(interval)
        iterations+=1/3

    }, 30)
    
}


