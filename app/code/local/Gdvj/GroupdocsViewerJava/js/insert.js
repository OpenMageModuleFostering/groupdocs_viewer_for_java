function insertViewerJava()
{
    var form = document.forms.form;
    var url = form.url.value;
    var path = form.path.value;
    var width = form.width.value;
    var height = form.height.value;
    if (url != "") {
        if (width == "") {
            width = "650";
        }
        if (height == "") {
            height = "750";
        }
        if (url.substr(-1) != '/') {
            url = url + "/";
        }
        var libs = "<script type='text/javascript' src='" + url + "GetJsHandler?script=libs/jquery-1.9.1.min.js'></script>" +
                "<script type='text/javascript' src='" + url + "GetJsHandler?script=libs/jquery-ui-1.10.3.min.js'></script>" +
                "<script type='text/javascript' src='" + url + "GetJsHandler?script=libs/knockout-2.2.1.js'></script>" +
                "<script type='text/javascript' src='" + url + "GetJsHandler?script=libs/turn.min.js'></script>" +
                "<script type='text/javascript' src='" + url + "GetJsHandler?script=libs/modernizr.2.6.2.Transform2d.min.js'></script>" +
                "<script type='text/javascript' language='JavaScript'>" +
                "if (!window.Modernizr.csstransforms){" +
                "var scriptLoad = document.createElement('script');" +
                "scriptLoad.setAttribute('type','text/javascript');" +
                "scriptLoad.setAttribute('src', '" + url + "GetJsHandler?script=libs/turn.html4.min.js');" +
                "document.getElementsByTagName('head')[0].appendChild(scriptLoad);" +
                "}" +
                "</script>" +
                "<script type='text/javascript' src='" + url + "GetJsHandler?script=installableViewer.min.js'><\/script>" +
                "<script type='text/javascript'>$.ui.groupdocsViewer.prototype.applicationPath = '" + url + "';</script>" +
                "<script type='text/javascript'>$.ui.groupdocsViewer.prototype.useHttpHandlers = true;</script>" +
                "<script type='text/javascript' src='" + url + "GetJsHandler?script=GroupdocsViewer.all.min.js'></script>" +
                "<script type='text/javascript' language='JavaScript'>" +
                "$(function() {" +
                "var styleBootstrap = document.createElement('link');" +
                "styleBootstrap.setAttribute('rel', 'stylesheet');" +
                "styleBootstrap.setAttribute('type', 'text/css');" +
                "styleBootstrap.setAttribute('href', '" + url + "GetCssHandler?script=bootstrap.css');" +
                "var gdCss = document.createElement('link');" +
                "gdCss.setAttribute('rel', 'stylesheet');" +
                "gdCss.setAttribute('type', 'text/css');" +
                "gdCss.setAttribute('href', '" + url + "GetCssHandler?script=GroupdocsViewer.all.min.css');" +
                "var uiCss = document.createElement('link');" +
                "uiCss.setAttribute('rel', 'stylesheet');" +
                "uiCss.setAttribute('type', 'text/css');" +
                "uiCss.setAttribute('href', '" + url + "GetCssHandler?script=jquery-ui-1.10.3.dialog.min.css');" +
                "document.getElementsByTagName('head')[0].appendChild(styleBootstrap);" +
                "document.getElementsByTagName('head')[0].appendChild(gdCss);" +
                "document.getElementsByTagName('head')[0].appendChild(uiCss);" +
                "var localizedStrings = null;" +
                "var thumbsImageBase64Encoded = null;" +
                "$('#viewerjava').groupdocsViewer({ filePath: '" + path + "', docViewerId: 'doc_viewer1', quality: 100, showHeader: true, showThumbnails: false, openThumbnails: false, initialZoom: 100," +
                "zoomToFitWidth: true, zoomToFitHeight: false, backgroundColor: '', showFolderBrowser: true, showPrint: true, showDownload: true, showZoom: true, showPaging: true," +
                "showViewerStyleControl: true, showSearch: true, preloadPagesCount: 0, viewerStyle: 1, supportTextSelection: true, localizedStrings: localizedStrings," +
                "thumbsImageBase64Encoded: thumbsImageBase64Encoded, showDownloadErrorsInPopup: true });" +
                "});" +
                "</script>";
        var div = '<div id="viewerjava" style="width:' + width + 'px;height:' + height + 'px;overflow:hidden;position:relative;margin-bottom:20px;background-color:gray;border:1px solid #ccc;"><span style="visibility:hidden;">GroupDocs Viewer Java</span></div>';
        var tinyMceContent = tinyMCE.activeEditor.getContent();
        // set content
        tinyMCE.activeEditor.setContent(tinyMceContent + libs + div);
    } else {
        var tinyMceContent = tinyMCE.activeEditor.getContent();
        // set content

        tinyMCE.activeEditor.setContent(tinyMceContent + "Something wrong with entered data");
    }

}

function delFormJava() {
    var del = document.getElementById('page_tabs_content_section_content');
    var divToDel = document.getElementById("groupdocsviewerjava");
    del.removeChild(divToDel);
}

