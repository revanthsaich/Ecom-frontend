import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 1024,
        frame: true, // Keep the default frame with title bar
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // Load your React app
    win.loadURL('https://ecom-frontend-nine-woad.vercel.app/'); // Adjust this if your dev server runs on a different port

    // Remove the default menu
    Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});