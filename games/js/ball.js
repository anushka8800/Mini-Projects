export default class Ball {
    constructor(ballElm) {
        this.ballElm = ballElm
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElm.getPropertyValue("--x")))
    }
    set x(value) {
        return this.ballElm.style.setProperty("--x", value)
    }
    
    get y() {
        return parseFloat(getComputedStyle(this.ballElm.getPropertyValue("--y")))
    }
    set y(value) {
        return this.ballElm.style.setProperty("--y", value)
    }
    
    reset

    
    update(delta) {
        this.x = 5
        this.y = 20
    }






}

