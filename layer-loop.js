function buildPage() {
    var str = "<html><head></head><body>";
    
    str = showBounds(str);
    str += "</body></html>";
    
    saveFile(str);
}



function showBounds(str) {
    var doc = app.activeDocument;
    for (i = 0; i < doc.layers.length; i++)
    {
        var classname=doc.layers[i].name;
        classname=classname.replace(/ /g,"_");
        str += "\n<div class='" + classname + "'></div>\n";
    }
    return str;
}


function saveFile(str){
    var file = new File();
    var fileNew = file.saveDlg("Save new file");
    fileNew.open("w");
    fileNew.write(str);
    fileNew.close();
}

buildPage();