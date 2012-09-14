function Or(id, x, y, label) {

    this.id = id;

    this.label = createLabel(label);
    this.shape = createPolygon(x, y, 4, 20, 3);
    this.insideShape = createCircle(10, x, y, 3);

    // label position
    this.label.setY(y + Math.sqrt(Math.pow(this.shape.getRadius(), 2) * 2));
    this.label.setX(x - this.label.getTextWidth() / 2);

    this.group = createComposedGroup(this.shape, this.insideShape, this.label, this);

    this.getGraphicElement = function () {
        return this.group;
    };

    this.getId = function () {
        return this.id;
    };

    //  Returns the center X
    this.getIconX = function () {
        return this.shape.getAbsolutePosition().x;
    };

    // Returns the center Y
    this.getIconY = function () {
        return this.shape.getAbsolutePosition().y;
    };


    this.getIconWidth = function () {
        var result = this.shape.getRadius() * 2;
        return Math.round(result);
    };

    this.getIconHeight = function () {
        var result = this.shape.getRadius() * 2;
        return Math.round(result);
    };

    this.setLabelText = function(text){
        return this.label.setText(text);
    };

    this.update = function(elementJSON){
        var oldTextWidth = this.label.getTextWidth();   // the current text-width
        this.setLabelText(elementJSON.name);
        var newTextWidth = this.label.getTextWidth();   // the new text-width

        performXAxisCorrection(oldTextWidth, newTextWidth, this.label);    // moves the label in order to keep it centered
    };
}

Or.prototype = Round.prototype;
Or.constructor = Or;