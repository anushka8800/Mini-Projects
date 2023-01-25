import Ball from './ball.js'

const ball = new Ball(document.getElementById("ball"))


let lastTime
function update(time) {
    if (lastTime) {
        const delta = time - lastTime
        console.log(delta)
    }
    
    lastTime = time
    // window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)