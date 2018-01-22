const electron = require('electron')
const path = require('path')
const url = require('url')

let win

//Url of viewer.html
const urlViewer = url.format({
    pathname: path.join(__dirname, 'viewer.html'),
    protocol: 'file:',
    slashes: true
});

//Url of help.html
const urlHelp = url.format({
    pathname: path.join(__dirname, 'help.html'),
    protocol: 'file:',
    slashes: true
})

//Generate url to a forge model
function getUrl(filePath) {
    fileUrl = 'file://' + filePath.replace(/\\/g, "/");
    console.log(fileUrl);
    return urlViewer + "#" + encodeURI(fileUrl)
}

//create main window
function createWindow() {
    win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //Disable web security policy 
            //in order to fetch model file via file protocol
            webSecurity: false
        },
        icon: __dirname + '/assets/icon.ico'
    });
    //Build main menu for window
    win.setMenu(new electron.Menu.buildFromTemplate([{
        label: "File",
        submenu: [{
                label: "Open Model",
                click: () => {
                    let filePaths = electron.dialog.showOpenDialog(win, {
                        title: "Select SVF or F2D file",
                        filters: [
                            { name: "Forge Viewer Model", extensions: ['svf', 'f2d'] }
                        ]
                    });
                    if (filePaths && filePaths[0]) {
                        win.loadURL(getUrl(filePaths[0]));
                    }
                }
            },
            {
                label: "Reload Model",
                click: () => {
                    win.reload();
                }
            },
            {
                label: "Close Model",
                click: () => {
                    console.log(urlHelp);
                    win.loadURL(urlHelp);
                }
            },
            {
                label: "Quit",
                click: () => {
                    electron.app.quit();
                }
            }
        ]
    }, {
        label: "Develper",
        submenu: [{
            label: "Open Developing Tools",
            click: () => {
                win.webContents.openDevTools()
            }
        }]
    }, {
        label: "About",
        submenu: [{
            label: "SVF Viewer by Nova"
        }, {
            label: "Blog",
            click: () => {
                electron.shell.openExternal("http://novashang.com");
            }
        }, {
            label: "Github Repo",
            click: () => {
                electron.shell.openExternal("https://github.com/NovaShang/svf-viewer");
            }
        }]
    }]));
    //handle command line args
    if (process.argv[1]) {
        console.log(getUrl(process.argv[1]));
        win.loadURL(getUrl(process.argv[1]));
    } else {
        win.loadURL(urlHelp)
    }

    win.on('closed', () => {
        win = null;
    })
}

electron.app.on('ready', createWindow)

electron.app.on('window-all-closed', () => {
    electron.app.quit()
})