is_auto_dark = true;

function changeColorDoc(sender) {
    var icon = sender.getElementsByTagName('i')[0]
    var classes = icon.getAttribute('class').split(' ')
    if(classes[1] === 'fa-sun-o') {
        changeColor("dark")
        icon.setAttribute('class','fa fa-moon-o')
    } else {
        changeColor("light")
        icon.setAttribute('class','fa fa-sun-o')
    }
}