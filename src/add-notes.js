export default function(context) {
  var sketch = context.api();
  var document = sketch.selectedDocument;
  var selection = document.selectedLayers;
  var Rectangle = require('sketch/dom').Rectangle
  var Document = require('sketch/dom').Document
  var Page = require('sketch/dom').Page
  var Artboard = require('sketch/dom').Artboard
  var Group = require('sketch/dom').Group

  try {
    var artboardsToSelect = [];
    if (selection && !selection.isEmpty) {
      selection.iterate(function(item) {
        if (item && item.isArtboard) {
          artboardsToSelect.push(item);
        }
      });

      if (artboardsToSelect && artboardsToSelect.length > 0) {
        artboardsToSelect.map(function(artboard) {
          if (addNoteGroupTo(artboard)) {
            log('OOKK')
            var newLayerFrame = new Rectangle(artboard.frame)
            newLayerFrame.height += 300
            artboard.frame = newLayerFrame

            // TODO add group con rettangolo di sfondo, titolo e testo
          } else {
            context.document.showMessage('Ciao')
          }
        })
        // selection.clear();
      } else {
        context.document.showMessage('No artboard are selected. 🙃')
      }
    } else {
      context.document.showMessage('No artboard are selected. 🙃')
    }
  } catch (e) {
    log(e)
  }
}

addNoteGroupTo = (artboard) => {
  if (artboard && artboard.isArtboard && artboard.sketchObject.layers()) {
      var layers = artboard.sketchObject.layers();
      if (layers.length == 0)
        return true;
      layers.map(function(layer) { log (layer.name) })
      //log(layers.filter(function(layer) { return layer.id == "presentation-note-group-id"}))
      //return layers.filter(function(layer) { return (layer.id == "presentation-note-group-id") ? layer : null }).length == 0
  }
}
