const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js')
    },
    frame: false,  // Ascunde bara de titlu pentru a oferi aspectul unui gadget
    transparent: true,  // Design transparent, similar cu un widget
    resizable: true,  // O fereastră fixă, pentru aspectul de widget
  });

  mainWindow.loadFile('index.html');
  mainWindow.webContents.openDevTools();

}

app.whenReady().then(() => {
    console.log("Aplicația a pornit");
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
