require(['dojo/dom', 'LanguageSelectionWidget', 'dojo/domReady!'], function(dom, LanguageSelectionWidget) {
    var widget = new LanguageSelectionWidget().placeAt(dom.byId('widgetContainer'));
    widget.startup();

    // Example of getting the selected language
    console.log(widget.getSelectedLanguage());
});
