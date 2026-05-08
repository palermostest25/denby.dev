const about = document.getElementById("about")
const button = document.getElementById("button")
let clicked = 0

button.addEventListener("click", function() {
    if (clicked == 1) {
        about.innerText = "changed"
        clicked = 0
    } else {
        about.innerText = "hello"
        clicked = 1
    }
    
})

