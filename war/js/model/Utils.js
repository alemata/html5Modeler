function getRandomID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function createCircle(radius, x, y, strokeWidth) {
    return new Kinetic.Ellipse({
        x:x,
        y:y,
        fill:"#88b6e1",
        stroke:"black",
        strokeWidth:strokeWidth,
        radius:radius
    });
}

function createLabel(value) {
    return new Kinetic.Text({
        text:value,
        fontSize:10,
        fontFamily:"Arial",
        textFill:"black"
    });
}

function createRoundRect(x, y, width, height, strokeWidth) {
    var rect = createRect(x, y, width, height, strokeWidth);
    rect.setCornerRadius(10);
    return rect;
}

function createRect(x, y, width, height, strokeWidth) {
    return new Kinetic.Rect({
        x:x,
        y:y,
        width:width,
        height:height,
        fill:"#88b6e1",
        stroke:"black",
        strokeWidth:strokeWidth
    });
}

function createPolygon(x, y, sides, radius, strokeWidth) {
    return new Kinetic.RegularPolygon({
        x:x,
        y:y,
        sides:sides,
        radius:radius,
        fill:"#88b6e1",
        stroke:"black",
        strokeWidth:strokeWidth
    });
}

function createCross(x, y, radius, strokeWidth) {
    return new Kinetic.Shape({
        drawFunc:function (context) {
            context.beginPath();

            // "|"
            context.moveTo(x, y - radius + 8);
            context.lineTo(x, y + radius - 8);

            // "-"
            context.moveTo(x - radius + 8, y);
            context.lineTo(x + radius - 8, y);
            context.closePath();
            this.fill(context);
            this.stroke(context);
        },
//        fill: "#00D2FF",
        stroke:"black",
        strokeWidth:strokeWidth
    });
}

function createGroup(shape, label, bpmnElement) {
    var group = new Kinetic.Group({
        draggable:true
    });

    group.add(shape);
    group.add(label);

    group.shape = shape;
    group.label = label;

    group.on("click tap", function () {
        selectedGroup = group;
        selectShape(group);
    });

    group.on("dragend", function () {
        dispatchElementMovedEvent(bpmnElement);
    });

    group.on("dblclick", function () {
        dispatchElementDoubleClickEvent(bpmnElement);
    });

    addCursorStyle(shape);

    return group;
}

//Create a group with a shape and an insideShape which is inside the shape.
function createComposedGroup(shape, insideShape, label, bpmnElement) {
    var group = new Kinetic.Group({
        draggable:true
    });

    group.add(shape);
    group.add(insideShape);
    group.add(label);

    group.shape = shape;
    group.label = label;

    group.on("click tap", function () {
        selectedGroup = group;
        selectShape(group);
    });

    group.on("dragend", function () {
        dispatchElementMovedEvent(bpmnElement);
    });

    group.on("dblclick", function () {
        dispatchElementDoubleClickEvent(bpmnElement);
    });

    addCursorStyle(shape);

    return group;
}

function addCursorStyle(kineticShape) {
    // add cursor styling
    kineticShape.on("mouseover", function () {
        document.body.style.cursor = "pointer";
    });
    kineticShape.on("mouseout", function () {
        document.body.style.cursor = "default";
    });
}


function deleteShape(event) {
    var keyCode = event.keyCode;
    if (keyCode == 46) {
        dispatchRemoveGraphicElementEvent(selectedGroup);
    }
}

function selectShape(group) {
    previousElement = selectedElement;
    selectedElement = group;
    if (!(previousElement == null)) {
        previousElement.shape.setFill("#88b6e1");
        previousElement.label.setFontStyle("normal");
    }
//    group.shape.setFill("red");
    group.label.setFontStyle("bold");

    // force redraw
    dispatchForceDrawLayerEvent(LayersManager.TASKS_LAYER);
}

function getXCoordinate(bpmnElement) {
    return bpmnElement.getCenterX();
}

function getYCoordinate(bpmnElement) {
    return bpmnElement.getCenterY();
}

// Performs an X-Axis correction for the position of the label, when text changes
function performXAxisCorrection(oldTextWidth, newTextWidth, kineticTextObject) {
    // If new is wider, then delta is +. If old is wider, then delta is -.
    var deltaTextWidth = newTextWidth - oldTextWidth;

    // Apply x-axis correction
    kineticTextObject.setX(kineticTextObject.getX() - deltaTextWidth / 2);
}


function updateElement(elementJSON) {
    var bpmnElement = processManager.getBPMNElementForId(elementJSON.id); // todo: revisar.. no va a funcionar para connectors

    bpmnElement.update(elementJSON);
    dispatchForceDrawLayerEvent(LayersManager.TASKS_LAYER);
}

