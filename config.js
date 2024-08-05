/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

  config.language = 'en';
  // add custom fonts
  // Open Sans with fallbacks - Segoe UI, Tahoma, sans-serif
  // Chivo with fallbacks - Comfortaa, sans-serif
  config.font_names = config.font_names + ';Open Sans/Open Sans,Segoe UI,Tahoma,sans-serif'
    + ';Chivo/Chivo,Comfortaa,sans-serif';
  if (window.ctFeatureFlags && window.ctFeatureFlags['custom-font-management'] &&
    window.customFont && (window.__NEW_JOURNEY || window.__NEW_CAMPAIGN)) {
    //const { fontNamesForCkEditor, fonts } = window.customFont
    config.font_names = config.font_names + window.customFont.fontNamesForCkEditor
    config.contentsCss = Object.values(window.customFont.fonts).map(function (font) {return font.fontUrl}).concat(config.contentsCss)
  }
  // sort all fonts by name again to correct custom font order
  var font_names = config.font_names.split(";").sort()
  config.font_names = font_names.join(";")

  // Extra plugins
  config.extraPlugins = 'codemirror,scayt,wsc'
};
