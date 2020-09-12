input.onButtonPressed(Button.A, function () {
    basic.showNumber(celsius)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    Kelvin = celsius + 273.15
    basic.showNumber(Kelvin)
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.B, function () {
    Fahrenheit = 9 / 5 * celsius + 32
    basic.showNumber(Fahrenheit)
    basic.showIcon(IconNames.Sad)
})
let Fahrenheit = 0
let Kelvin = 0
let celsius = 0
basic.showString("Natalia ")
basic.showString("A01285637")
celsius = input.temperature()
