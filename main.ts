basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    maqueen.servoRun(maqueen.Servos.S1, 0)
    basic.pause(100)
    maqueen.servoRun(maqueen.Servos.S1, 180)
    basic.pause(100)
})
