class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval ( () => {
      this.currentTime += 1
      callback();
    },1000)
  }
  getMinutes() {
   return Math.floor(this.currentTime/60);
  }
  getSeconds() {
  return this.currentTime % 60 ;
    
  }
  twoDigitsNumber(number) {
    return ('0' + number).slice(-2)
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    /*let minutes = this.twoDigitsNumber(this.getMinutes())
    let seconds = this.twoDigitsNumber(this.getSeconds())
    return `${minutes}:${seconds}`*/ //OR 

    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
