pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    if (input.lightLevel() <= 50) {
        pins.servoWritePin(AnalogPin.P0, 90)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(2000)
    }
})
