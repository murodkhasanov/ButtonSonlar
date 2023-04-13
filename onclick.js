let but1 = document.querySelector(".but1")
let but2 = document.querySelector(".but1")
let text = document.querySelector(".num")
let but3 = document.querySelector(".but3")
let but4 = document.querySelector(".but4")

let count = 0;

function tes() {
    count++
    text.textContent = count;
    text.style.color = "black"
    if(text.textContent < 0) {
        text.style.color = "red"
    } else if (text.textContent > 9) {
        text.style.color = "blue"
    }
}

function nite() {
    count--
    text.textContent = count
    text.style.color = "black"
    if(text.textContent < 0) {
        text.style.color = "red"
    } else if (text.textContent > 9) {
        text.style.color = "blue"
    }
}

function inc() {
    count++
    res = count += 1

    text.textContent = res
}

function dec() {
    count--
    res = count -= 1
    text.textContent = res
}