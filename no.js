const ipcRenderer = require('electron').ipcRenderer;

window.onload = () => {
    ipcRenderer.on("uuid", (event, data) => {
        document.getElementById("code").innerHTML = data;
    })
}

function startShare () {
    ipcRenderer.send("start-share", {});
    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "flex";
}

function stopShare () {
    ipcRenderer.send("stop-share", {});
    document.getElementById("stop").style.display = "none";
    document.getElementById("start").style.display = "flex";
}
