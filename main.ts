function right () {
	
}
function back () {
	
}
function front () {
	
}
function left () {
	
}
function stop () {
	
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "f") {
        pins.servoWritePin(AnalogPin.P0, 110)
        pins.servoWritePin(AnalogPin.P8, 70)
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "b") {
        pins.servoWritePin(AnalogPin.P0, 70)
        pins.servoWritePin(AnalogPin.P8, 110)
        basic.showArrow(ArrowNames.South)
    } else if (receivedString == "l") {
        pins.servoWritePin(AnalogPin.P8, 0)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showArrow(ArrowNames.West)
    } else if (receivedString == "r") {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P8, 90)
        basic.showArrow(ArrowNames.East)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Diamond)
basic.pause(200)
basic.showIcon(IconNames.SmallDiamond)
