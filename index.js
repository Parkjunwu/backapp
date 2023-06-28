// const {app, BrowserWindow, ipcMain} = require('electron')
const {app, BrowserWindow, ipcMain} = require('electron')
// const path = require('path')
// const {v4: uuidv4} = require('uuid');
// const screenShot = require('screenshot-desktop');
// const robot = require('robotjs');
// const express = require('express');
// const http = require('http');
// const socket = require('socket.io');
// const log = require('electron-log');
require('./server.js');

// const socket = require('socket.io-client')('http://218.146.20.177');
// let interval;
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    
    win.removeMenu();
    win.loadFile('display.html');

    // const apps = express();
    // const httpServer = http.createServer(apps);
    // const io = socket(http);

    // // apps.use(express.static(__dirname))

    // apps.get('/view', (req, res) => {
    //     res.sendFile(__dirname + '/display.html');
    // });

    // io.on('connection', (socket)=> {

        

    //     socket.on("join-message", (roomId) => {
    //         socket.join(roomId);
    //         console.log("User joined in a room : " + roomId);
    //     });
        
    //     socket.on("admin-login", (roomId) => {
    //         socket.join(roomId);
    //         socket.broadcast.to(roomId).emit("admin-login", roomId);
    //     });
        
    //     socket.on("admin-logout", (roomId) => {
    //         socket.join(roomId);
    //         socket.broadcast.to(roomId).emit("admin-logout", roomId);
    //     });

    //     socket.on("screen-data", function(data) {
    //         log.info("screen-data : ")
    //         data = JSON.parse(data);
    //         var room = data.room;
    //         var imgStr = data.image;
    //         socket.broadcast.to(room).emit('screen-data', imgStr);
    //     });

    //     // socket.on('screen-data', function(message){
    //     //     // $("img").attr("src", "data:image/png;base64," + message);
    //     //     // ipcMain.on("screen-data", (event, args) => {
    //     //     //     clearInterval(interval);
    //     //     // });
    //     //     win.webContents.send("screen-data",message)
    //     // })

    //     socket.on("mouse-move", function(data) {
    //         var room = JSON.parse(data).room;
    //         socket.broadcast.to(room).emit("mouse-move", data);
    //     });

    //     socket.on("mouse-click", function(data) {
    //         var room = JSON.parse(data).room;
    //         socket.broadcast.to(room).emit("mouse-click", data);
    //     });

    //     // socket.on("mouse-enter", function(data) {
    //     //     var room = JSON.parse(data).room;
    //     //     socket.broadcast.to(room).emit("mouse-enter", data);
    //     // });

    //     // socket.on("mouse-leave", function(data) {
    //     //     var room = JSON.parse(data).room;
    //     //     socket.broadcast.to(room).emit("mouse-leave", data);
    //     // });
        
    //     socket.on("drag-start", function(data) {
    //         var room = JSON.parse(data).room;
    //         socket.broadcast.to(room).emit("drag-start", data);
    //     });

    //     socket.on("drag-over", function(data) {
    //         var room = JSON.parse(data).room;
    //         socket.broadcast.to(room).emit("drag-over", data);
    //     });

    //     socket.on("drag-leave", function(data) {
    //         var room = JSON.parse(data).room;
    //         socket.broadcast.to(room).emit("drag-leave", data);
    //     });

    //     socket.on("scroll", function(data) {
    //         var room = JSON.parse(data).room;
    //         socket.broadcast.to(room).emit("scroll", data);
    //     });

    //     socket.on("type", function(data) {
    //         var room = JSON.parse(data).room;
    //         socket.broadcast.to(room).emit("type", data);
    //     });
    // });

    // var server_port = 80;
    // httpServer.listen(server_port, () => {
    //     console.log("Started on : "+ server_port);
    // });

}

app.whenReady().then(createWindow);

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// ipcMain.on("start-share", (event, args) => {
//     const uuid = uuidv4();
//     socket.emit("join-message", uuid);
//     event.reply("uuid", uuid);
//     interval = setInterval(() => {
//         screenShot().then((img) => {
//             const imgStr = new Buffer(img).toString('base64');
//             const obj = {};
//             obj.room = uuid;
//             obj.image = imgStr;
//             socket.emit("screen-data", JSON.stringify(obj));
//         })
//     }, 100);
// });

// ipcMain.on("stop-share", (event, args) => {
//     clearInterval(interval);
// });

ipcMain.on("screen-data", (event, args) => {
    // clearInterval(interval);
});
