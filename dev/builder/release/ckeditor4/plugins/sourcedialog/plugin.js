﻿/*
 Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.

 CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.

*/
CKEDITOR.plugins.add("sourcedialog",{lang:"en",requires:"dialog",icons:"sourcedialog,sourcedialog-rtl",hidpi:!0,init:function(a){a.addCommand("sourcedialog",new CKEDITOR.dialogCommand("sourcedialog"));CKEDITOR.dialog.add("sourcedialog",this.path+"dialogs/sourcedialog.js");a.ui.addButton&&a.ui.addButton("Sourcedialog",{label:a.lang.sourcedialog.toolbar,command:"sourcedialog",toolbar:"mode,10"})}});