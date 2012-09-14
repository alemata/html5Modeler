function Connector(id, bpmnElementFrom, bpmnElementTo, label) {

    var instance = this;    // reference to this object.. used inside the listeners to reference

    this.id = id;
    this.targetElement = bpmnElementTo;
    this.sourceElement = bpmnElementFrom;

    this.connector = new Kinetic.Line({
        stroke:"#000000",
        strokeWidth:1
    });
    this.label = label;

    redrawConnector(this.connector, bpmnElementFrom, bpmnElementTo); // draw first time

    // Add listeners to catch drag and drop events
    bpmnElementFrom.getGraphicElement().on("dragmove", function () {
        redrawConnector(instance.connector, bpmnElementFrom, bpmnElementTo); // draw first time
    });
    bpmnElementTo.getGraphicElement().on("dragmove", function () {
        redrawConnector(instance.connector, bpmnElementFrom, bpmnElementTo); // draw first time
    });

    this.getId = function () {
        return this.id;
    };

    this.getGraphicElement = function () {
        return this.connector;
    };

    this.getSource = function () {
        return this.sourceElement;
    };

    this.getTarget = function () {
        return this.targetElement;
    };

}


function redrawConnector(connector, bpmnElementFrom, bpmnElementTo) {
    var startX;
    var startY;
    var endX;
    var endY;

    startX = getXCoordinate(bpmnElementFrom);
    startY = getYCoordinate(bpmnElementFrom);

    endX = getXCoordinate(bpmnElementTo);
    endY = getYCoordinate(bpmnElementTo);

    connector.setPoints([startX, startY, endX, endY]);

    // Dispatch redraw event for connectors
    dispatchRedrawConnectorsEvent();
}


