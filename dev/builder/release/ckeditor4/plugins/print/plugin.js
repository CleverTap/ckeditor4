/*
 Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.

 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license

*/
(function(){CKEDITOR.plugins.add("print",{requires:"preview",lang:"en",icons:"print,",hidpi:!0,init:function(a){a.addCommand("print",CKEDITOR.plugins.print);a.ui.addButton&&a.ui.addButton("Print",{label:a.lang.print.toolbar,command:"print",toolbar:"document,50"})}});CKEDITOR.plugins.print={exec:function(a){CKEDITOR.plugins.preview.createPreview(a,function(a){a=a.$;CKEDITOR.env.gecko?a.print():a.document.execCommand("Print");a.close()})},canUndo:!1,readOnly:1,modes:{wysiwyg:1}}})();