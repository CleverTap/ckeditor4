/*
 Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.

 CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.

*/
CKEDITOR.plugins.add("uicolor",{requires:"dialog",lang:"en",icons:"uicolor",hidpi:!0,init:function(a){var b=new CKEDITOR.dialogCommand("uicolor");b.editorFocus=!1;CKEDITOR.dialog.add("uicolor",this.path+"dialogs/uicolor.js");a.addCommand("uicolor",b);a.ui.addButton&&a.ui.addButton("UIColor",{label:a.lang.uicolor.title,command:"uicolor",toolbar:"tools,1"})}});