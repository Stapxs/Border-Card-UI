is_auto_dark = true

function changeColorIn(sender) {
    if(sender.checked) {
        changeColor("dark")
    } else {
        changeColor("light")
    }
}

function toTop() {
    document.documentElement.scrollTop = 0
}

function hiddenContext() {
    const body = document.getElementById("context")
    body.style.minWidth = 0
    body.style.padding = 0
    body.style.width = 0
}