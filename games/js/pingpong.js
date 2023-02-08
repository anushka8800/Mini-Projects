import Ball from './ball.js'
const body = document.querySelector('body')

const ball = new Ball(document.getElementById("ball"))


let lastTime
function update(time) {
    if (lastTime) {
        const delta = time - lastTime
        console.log('delta '+delta)
        ball.update(delta)
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}

const button = document.createElement('button')
button.innerHTML = 'START'
button.style.setProperty('background', 'salmon')
button.style.setProperty('fontWeight', '800')
body.appendChild(button)

button.addEventListener('click', () => window.requestAnimationFrame(update) )

// window.requestAnimationFrame(update)