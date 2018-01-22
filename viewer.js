/**
 * 文档加载完成
 */
_viewer = new Autodesk.Viewing.Private.GuiViewer3D(document.querySelector(".viewer"), {});
Autodesk.Viewing.Initializer({ env: 'Local' }, viewerReady);

/**
 * Viewer初始化完成
 */
function viewerReady() {
    _viewer.initialize();
    _viewer.load(decodeURI(document.location.hash.substring(1)));
}