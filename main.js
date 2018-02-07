const { app, BrowserWindow } = require("electron");
var wwww  = require('./1002.OFE-API/configuracion/www');

app.on("ready", () => {
  let mainWindow = new BrowserWindow({ show: false })
  mainWindow.loadURL(`file://${__dirname}/1002.OFE-PROD/PROD_ANGULAR/dist/index.html`);
  //comentar la siguiente linea para no mostar herramientas de desarrollo
  //mainWindow.webContents.openDevTools();
  mainWindow.once("ready-to-show", () => { 
    mainWindow.maximize();
    mainWindow.show() }); 
  mainWindow.setMenu(null);
});

app.on("window-all-closed", () => { app.quit() })