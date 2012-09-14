function dispatchRedrawConnectorsEvent(){
    var evt = document.createEvent("Event");
    evt.initEvent('redrawConnectors', true, true);
//    evt.customData = "someData";
    window.dispatchEvent(evt);
}

function dispatchElementMovedEvent(bpmnElement){
    var evt = document.createEvent("Event");
    evt.initEvent('elementMoved', true, true);
    evt.elementId = bpmnElement.getId();
    evt.x = bpmnElement.getIconX();
    evt.y = bpmnElement.getIconY();
    window.dispatchEvent(evt);
}

function dispatchSequenceAddedEvent(connector, bpmnFrom, bpmnTo) {
    var evt = document.createEvent("Event");
    evt.initEvent('sequenceAdded', true, true);
    evt.sequenceId = connector.getId();
    evt.name = connector.label;
    evt.fromId = bpmnFrom.getId();
    evt.toId = bpmnTo.getId();
    window.dispatchEvent(evt);
}

function dispatchRemoveConnectorEvent(connector){
    var evt = document.createEvent("Event");
    evt.initEvent('removeConnector', true, true);
    evt.connector = connector;
    window.dispatchEvent(evt);
}

function dispatchRemoveGraphicElementEvent(bpmnGraphicElement){
    var evt = document.createEvent("Event");
    evt.initEvent('removeGraphicElement', true, true);
    evt.graphicElement = bpmnGraphicElement;
    window.dispatchEvent(evt);
}

function dispatchDeleteElementEvent(bpmnElement){
    var evt = document.createEvent("Event");
    evt.initEvent('deleteElement', true, true);
    evt.elementId = bpmnElement.getId();
    window.dispatchEvent(evt);
}

function dispatchElementDoubleClickEvent(bpmnElement) {
    var evt = document.createEvent("Event");
    evt.initEvent('bpmnElementDoubleClick', true, true);
    evt.elementId = bpmnElement.getId();
    window.dispatchEvent(evt);
}

function dispatchForceDrawLayerEvent(layerId){
    var evt = document.createEvent("Event");
    evt.initEvent('forceDrawLayer', true, true);
    evt.layerId = layerId;
    window.dispatchEvent(evt);
}