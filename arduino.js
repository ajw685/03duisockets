var arduino = require('duino'),
    board = new arduino.Board({
    	device: "/dev/ttyUSB0",
    	debug: true
    });



var led = new arduino.Led({
  board: board,
  pin: 13
});

function arduinoBlink() {
led.blink();
}

function arduinoRead() {
	arduino.analogRead(04);
}

exports.arduinoBlink = arduinoBlink;

