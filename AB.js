var date = new Date()
var time = date.getHours()
console.log(time)
// 00 - 11 : Morning
// 12 - 17 : Afternoon
// 17 - 21 : Evening
// 21 - 24 : Night
var text = '✨ Get Some Rest Carson 💤'
if (time <= 11) text = '☕ Good Morning Carson ☀️'
else if (time <= 17) text = '📌 Good Afternoon Carson 📚'
else if (time <= 21) text = '⭐ Good Evening Carson 🌙'
document.getElementById('header').innerHTML = text;

var sayings = [
    `You really don't find too many good people. You really don't. Keep them around.` , 
    `I want my impact to be legendary.`,
    `When you go out, go out with a bang, anything you do.`,
    `Know your gang. Keep the real ones close.`,
    `I'd rather get caught with it than without it.`
]
var random = Math.floor(Math.random() * sayings.length)
console.log(random)
var quote = sayings[random]
console.log(quote)
document.getElementById('srch').placeholder = quote;

var d = date.getDate()
var dayOfWeek = date.getDay()
var typeOfDay = ""
    var evenDay = (d % 2 == 0)
    if (dayOfWeek != 0 && dayOfWeek != 6 && evenDay)
        typeOfDay = "B Day"
    else if (dayOfWeek != 0 && dayOfWeek != 6 && !evenDay)
        typeOfDay = "B Day"
    else
        typeOfDay = "Enjoy the weekend!"
document.getElementById('schoolday').innerHTML = typeOfDay