const { app, BrowserWindow } = require("electron");
var wwww  = require('./1002.OFE-API/configuracion/www');

app.on("ready", () => {
  let mainWindow = new BrowserWindow({ height: 800, width: 800, show: false })
  mainWindow.loadURL(`file://${__dirname}/1002.OFE-PROD/PROD_ANGULAR/dist_test/index.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.once("ready-to-show", () => { mainWindow.show() }); 
});

app.on("window-all-closed", () => { app.quit() })