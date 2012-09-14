function Intermediate(id, x, y, label) {

    var instance = this;
    this.outerRadius = 20;

    this.id = id;

    this.label = createLabel(label);
    this.shape = createCircle(this.outerRadius, x, y, 1);
    this.insideShape = createCircle(this.outerRadius - 2, x, y, 1);

    // label position
    this.label.setY(y + 25);
    this.label.setX(x - this.label.getTextWidth() / 2);

    this.group = createComposedGroup(this.shape, this.insideShape, this.label, this);

    this.getGraphicElement = function() {
        return this.group;
    };

    this.getId = function () {
        return this.id;
    };

    //  Returns the center X
    this.getIconX = function() {
        var outerCircle = this.shape;
        return outerCircle.getAbsolutePosition().x;
    };

    //  Returns the center Y
    this.getIconY = function() {
        var outerCircle = this.shape;
        return outerCircle.getAbsolutePosition().y;
    };


    this.getIconRadius = function() {
        return this.outerRadius;
    };

    this.setLabelText = function(text) {
        return this.label.setText(text);
    };

    this.update = function(elementJSON) {
        var oldTextWidth = this.label.getTextWidth();   // the current text-width
        this.setLabelText(elementJSON.name);
        var newTextWidth = this.label.getTextWidth();   // the new text-width

        performXAxisCorrection(oldTextWidth, newTextWidth, this.label);    // moves the label in order to keep it centered
    };


    this.setIntermediateType = function(type) {
        var url = null;
        if (type == "timer") {
            url = "../img/intermediate_timer.png";
        } else if (type == "message") {
            url = "../img/intermediate_message.png";
        }

        if (url != null) {
            var imageObj = new Image();
            imageObj.onload = function() {
                var imgW = instance.getIconRadius() * 2 * 0.7;
                var imgH = instance.getIconRadius() * 2 * 0.7;
                var pic = new Kinetic.Image({
                            x:instance.getIconX() - imgW / 2,
                            y:instance.getIconY() - imgH / 2,
                            image: imageObj,
                            width: imgW,
                            height: imgH
                        });
//                instance.group.remove(instance.insideShape);
                instance.group.add(pic);
                dispatchForceDrawLayerEvent(LayersManager.TASKS_LAYER);
            };
            imageObj.src = url;
        }
    }

}

Intermediate.prototype = Round.prototype;
Intermediate.constructor = Intermediate;