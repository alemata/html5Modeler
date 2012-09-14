function DummyConnector() {

}

DummyConnector.createDummyConnector = function () {
    var connector = new Kinetic.Line({
        points:[-1, -1, -1, -1],
        stroke:"#000000",
        strokeWidth:1
    });
    layersManager.addIntoDummyLayer(connector);
    return connector;
};


/**
 * Draw the connector from a shape to the current position of the mouse
 * @param connector
 * @param groupFrom
 */
DummyConnector.redrawConnectorOnMouseMovement = function (connector, bpmnElementFrom) {
    var startX;
    var startY;
    var endX = stage.getMousePosition().x;
    var endY = stage.getMousePosition().y;
    //writeMessage(messagesLayer, "se mueve el mouse" + endX.toString() + " " + endY.toString() );
    startX = getXCoordinate(bpmnElementFrom);
    startY = getYCoordinate(bpmnElementFrom);

    connector.setPoints([startX, startY, endX, endY]);
    dispatchForceDrawLayerEvent(LayersManager.DUMMY_LAYER);
};