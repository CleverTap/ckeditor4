/*
 Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.

 CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.

*/
(function(){CKEDITOR.plugins.add("selectall",{lang:"en",icons:"selectall",hidpi:!0,init:function(b){b.addCommand("selectAll",{modes:{wysiwyg:1,source:1},exec:function(a){var b=a.editable();if(b.is("textarea"))a=b.$,CKEDITOR.env.ie&&a.createTextRange?a.createTextRange().execCommand("SelectAll"):(a.selectionStart=0,a.selectionEnd=a.value.length),a.focus();else{if(b.is("body"))a.document.$.execCommand("SelectAll",!1,null);else{var c=a.createRange();c.selectNodeContents(b);c.select()}a.forceNextSelectionCheck();
a.selectionChange()}},canUndo:!1});b.ui.addButton&&b.ui.addButton("SelectAll",{label:b.lang.selectall.toolbar,command:"selectAll",toolbar:"selection,10"})}})})();