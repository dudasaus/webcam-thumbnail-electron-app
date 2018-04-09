const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  let winSettings = {
    width: 400,
    height: 300,
    frame: false,
    x: 64,
    y: 64,
  }
  let win = new BrowserWindow(winSettings);
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));
  win.setAlwaysOnTop(true);
  win.on('close', () => app.quit());
}

app.on('ready', createWindow);
