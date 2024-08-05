/*
 Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.

 CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.

*/
CKEDITOR.plugins.add("find",{requires:"dialog",lang:"en",icons:"find,find-rtl,replace",hidpi:!0,init:function(a){var b=a.addCommand("find",new CKEDITOR.dialogCommand("find")),c=a.addCommand("replace",new CKEDITOR.dialogCommand("find",{tabId:"replace"}));b.canUndo=!1;b.readOnly=1;c.canUndo=!1;a.ui.addButton&&(a.ui.addButton("Find",{label:a.lang.find.find,command:"find",toolbar:"find,10"}),a.ui.addButton("Replace",{label:a.lang.find.replace,command:"replace",toolbar:"find,20"}));CKEDITOR.dialog.add("find",
this.path+"dialogs/find.js")}});CKEDITOR.config.find_highlight={element:"span",styles:{"background-color":"#004",color:"#fff"}};