let barHolder = document.querySelector(".bar-holder")
let smallBarHolder = document.querySelector(".small-bar-holder")
let outer = document.querySelector(".outer")


// large Bars
let angle = 0;
for (let i = 1; i <= 5; i++) {
    angle = angle + 30;
    let newBars = document.createElement("div")
    newBars.setAttribute("class", "bar-holder")
    newBars.innerHTML = barHolder.innerHTML;
    newBars.style.transform = "rotate(" + angle + "deg)"
    outer.appendChild(newBars)
}

// small bars

let smallAngle = 6;
let minute = 1;

for (let i = 1; i <= 28; i++) {
    minute = minute + 1;
    smallAngle = minute * 6;
    if (minute % 5 != 0) {
        let newSmallBars = document.createElement("div")
        newSmallBars.setAttribute("class", "small-bar-holder")
        newSmallBars.innerHTML = smallBarHolder.innerHTML;
        newSmallBars.style.transform = "rotate(" + smallAngle + "deg)"
        outer.appendChild(newSmallBars)
    }
}

// 
let generateBtn = document.getElementById("generateBtn")
let minHand = document.getElementById("minute-hand-holder")
let hourHand = document.getElementById("hour-hand-holder")

let hourOut = document.getElementById("hourOut")
let MinOut = document.getElementById("minrOut")


function setTime() {

    let min = Math.floor(Math.random() * 60)
    // console.log(min);
    let hour = Math.floor(Math.random() * 12);
    let minAngle = min * 6
    let hourAngle = (hour * 60 + min) * 0.5;

    minHand.style.transform = "rotate(" + minAngle + "deg)"
    hourHand.style.transform = "rotate(" + hourAngle + "deg)"

    if (hour == 0) {
        hourOut.innerText = 12
    } else {
        if (hour < 10) {
            hourOut.innerText = "0" + hour
        } else {
            hourOut.innerText = hour
        }
    }

    if (min < 10) {
        minOut.innerText = "0" + min
    } else {
        minOut.innerText = min
    }
}

generateBtn.addEventListener("click", setTime)

// let min = Math.floor(Math.random()*(60))
// console.log(min);

