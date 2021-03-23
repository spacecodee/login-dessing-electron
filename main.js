const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minHeight: 700,
    minWidth: 500,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("src/index.html");
  win.setBackgroundColor("#343B48");

  ipc.on("minimizeApp", () => {
    win.minimize();
  });

  ipc.on("maximizeRestoreApp", () => {
    if (win.isMaximized()) {
      win.restore();
      console.log("Funcion restore de app");
    } else {
      win.maximize();
      console.log("Funcion maximize de app");
    }
  });

  win.on("maximize", () => {
    win.webContents.send("isMaximized");
    console.log("Maximize win");
  });

  win.on("unmaximize", () => {
    win.webContents.send("isRestored");
    console.log("unmaximize win");
  });

  ipc.on("closeApp", () => {
    win.close();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
