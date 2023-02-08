const INITIAL_VELOCITY= .025
const VELOCITY_INC= 0.000001

export default class Ball {
    constructor(ballElm) {
        this.ballElm = ballElm
        this.reset()
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--x"))
    }
    set x(value) {
        return this.ballElm.style.setProperty("--x", value)
    }
    
    get y() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--y"))
    }
    set y(value) {
        return this.ballElm.style.setProperty("--y", value)
    }
    
    rect() {
        return this.ballElm.getBoundingClientRect()
    }


    reset() { 
        this.x = 50
        this.y = 50
        this.direction = {x: 0, y: 0}


        while( Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading)}
            
        }
        console.log('heading '+this.heading)
        
        console.log(this.direction)
        this.velocity = INITIAL_VELOCITY
        
    }
    
    
    update(delta) {
        this.x += this.direction.x * delta * this.velocity
        this.y += this.direction.y * delta * this.velocity

        this.velocity += VELOCITY_INC * delta

        const rect = this.rect()

        if(rect.bottom >= window.innerHeight || rect.top <= 0) this.direction.y *= -1
        if(rect.right >= window.innerWidth || rect.left <= 0) this.direction.x *= -1
    }

    





}

function randomNumberBetween(min, max) {
    return Math.random() * (max-min) + min
}

