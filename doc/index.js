is_auto_dark = true;

fetch('https://api.github.com/repos/stapxs/stapxs-web-api/commits')
    .then(response => response.json())
    .then(data => {
        document.getElementById("history-wait").style.display = "none"
        document.getElementById("history-body").style.textAlign = "left"

        for (let i = 0; i < data.length; i++) {
            const msg = data[i]["commit"]["message"].split("\n")
            if (msg.length >= 1 && data[i]["commit"]["message"].indexOf('| BCUI |') > 0) {
                const inn = String.raw`<div class="history-dot"><div></div></div><header>{1}</header>`
                const his = String.raw`<a>{1}</a><br>`
                let str = '<div>' + inn.replace("{1}", data[i]["commit"]["author"]["date"])
                for (let i = 1; i < msg.length; i++) {
                    if(msg[i].indexOf('| BCUI |') > 0) {
                        str += his.replace("{1}", msg[i].replace(' BCUI |', ''))
                    }
                }
                document.getElementById("history-body").insertAdjacentHTML("beforeend", str + "</div>")
            }
        }
    })
    .catch(function (e) {
        document.getElementById("history-load").style.animation = "none"
        document.getElementById("history-err").innerText = "加载失败：" + e
    })