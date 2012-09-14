function EventListenersStartup() {

    this.init = function() {

        // Add event listener for redraw conectors
        window.addEventListener('redrawConnectors', function (evt) {
            layersManager.forceDrawLayer(LayersManager.CONNECTORS_LAYER);
        }, false);

        window.addEventListener('elementMoved', function (evt) {
            console.log("ID: " + evt.elementId + "   x:" + evt.x + "    y:" + evt.y);
        }, false);

        // Add Event listener for remove bpmnElements from a graphicElement
        window.addEventListener('removeGraphicElement', function (evt) {
            var bpmnElement = processManager.getBPMNElementForGraphicElement(evt.graphicElement);
            dispatchDeleteElementEvent(bpmnElement);
        }, false);

        // Listener to delete dummy connector (for add sequence action)
        window.addEventListener('removeConnector', function (evt) {
            var connector = evt.connector;
            // todo: implementar
        }, false);

         // Listener for event dispathced just after a sequence was added to the diagram
        window.addEventListener('sequenceAdded', function (evt) {
            layersManager.clearDummyLayer();
        }, false);

        // Listener for force-redraw layer
        window.addEventListener('forceDrawLayer', function (evt) {
            layersManager.forceDrawLayer(evt.layerId);
        }, false);

    };
}