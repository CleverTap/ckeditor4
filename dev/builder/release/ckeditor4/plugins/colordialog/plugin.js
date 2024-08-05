/*
 Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.

 CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.

*/
CKEDITOR.plugins.colordialog={requires:"dialog",lang:"en",init:function(b){var d=new CKEDITOR.dialogCommand("colordialog");d.editorFocus=!1;b.addCommand("colordialog",d);CKEDITOR.dialog.add("colordialog",this.path+"dialogs/colordialog.js");b.getColorFromDialog=function(d,k,g){var c,e,h,f;c=function(a){h(this);(a="ok"==a.name?this.getValueOf("picker","selectedColor"):null)&&!CKEDITOR.tools._isValidColorFormat(a)&&(a=null);/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(a)&&(a="#"+a);d.call(k,a)};e=function(a){g&&
(a.data=g)};h=function(a){a.removeListener("ok",c);a.removeListener("cancel",c);a.removeListener("show",e)};f=function(a){a.on("ok",c);a.on("cancel",c);a.on("show",e,null,null,5)};b.execCommand("colordialog");if(b._.storedDialogs&&b._.storedDialogs.colordialog)f(b._.storedDialogs.colordialog);else CKEDITOR.on("dialogDefinition",function(a){if("colordialog"==a.data.name){var b=a.data.definition;a.removeListener();b.onLoad=CKEDITOR.tools.override(b.onLoad,function(a){return function(){f(this);b.onLoad=
a;"function"==typeof a&&a.call(this)}})}})}}};CKEDITOR.plugins.add("colordialog",CKEDITOR.plugins.colordialog);