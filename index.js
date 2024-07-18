
let obj = {}

function iPhone3(ASIN, color, display, camera, bluetooth){
    this.ASIN = ASIN,
    this.color = color,
    this.display =display,
    this.camera =camera,
    this.bluetooth = bluetooth

    this.dial = ()=>{
        return "tring.. tring..."
    }
    this.sendMessage =()=>{
        return "Sending message..."
    }
    this.cameraClick = ()=>{
        return "Camera clicked"
    }
    this.connectBluetooth =()=>{
        return "Bluetooth connected successfully..."
    }
} 

iPhone3.call(obj,1,"OLED","50px","Active")
console.log(obj)