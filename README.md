![SVF Viewer](https://raw.githubusercontent.com/NovaShang/svf-viewer/master/assets/title.png)

A simple application to open Autodesk Forge Viewer SVF and F2D files directly.

# Installation

If you are a Windows user, follow instructions bellow. If you want to use this application on Linux or OSX, please clone this repo to your computer and build it manually.

1. Download installer or binary package of SVF Viewer from [THIS PAGE](https://github.com/NovaShang/svf-viewer/releases)
2. Install or unzip the application
3. (recomended) Make SVF Viewer your default application to open .SVF files.

# Usage

* If you have made the file association of .svf files, just double click on a .svf file.
* Also you can open a model by clicking "Open Model" in "File" menu.
* For advanced users, open developer tools and you will get a fully functional Chrome DevTool. use global varriable "_viewer" to access the Viewer3D object of current model viewer.

# Building

1. Clone this repo by `git clone git@github.com:NovaShang/svf-viewer.git`
2. Enter repo directory by `cd svf-viewer`
3. Install dependancies by `npm install`
4. (Optional) If you want to use local Autodesk Forge Viewer files instead of online version, open viewer.html and modify some of the code, as described in comments. Using local Forge Viewer will make the application run much faster.
4. (Optional) If you want to debug, run `npm run dev`
5. Build exec by `npm run dist`
6. Done!