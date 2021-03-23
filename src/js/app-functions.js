const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;
const maxResBtn = document.getElementById("btnMaxRes");

btnMinimize.addEventListener("click", () => {
  ipc.send("minimizeApp");
});

function changeMaxResBtn(isMaximizedApp) {
  console.log("Funcion");
  if (isMaximizedApp) {
    maxResBtn.title = "Restore";
    maxResBtn.classList.remove("btnMaxRes");
    maxResBtn.classList.add("btnRes");
    console.log("Restore");
  } else {
    maxResBtn.title = "Maximize";
    maxResBtn.classList.remove("btnRes");
    maxResBtn.classList.add("btnMaxRes");
    console.log("Maximize");
  }
}

maxResBtn.addEventListener("click", () => {
  console.log("evento click");
  ipc.send("maximizeRestoreApp");
});

ipc.on("isMaximized", () => changeMaxResBtn(true));
ipc.on("isRestored", () => changeMaxResBtn(false));

btnClose.addEventListener("click", () => {
  ipc.send("closeApp");
});
