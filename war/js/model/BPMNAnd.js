function And(id, x, y, label) {

    this.id = id;

    this.label = createLabel(label);
    this.shape = createPolygon(x, y, 4, 20, 3);
    this.insideShape = createCross(x, y, 20, 2);

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
//        var result = Math.sqrt( Math.pow(this.shape.getRadius(),2) + Math.pow(this.shape.getRadius(),2) );
        var result = this.shape.getRadius() * 2;
        return Math.round(result);
    };

    this.getIconHeight = function () {
//        var result = Math.sqrt( Math.pow(this.shape.getRadius(),2) + Math.pow(this.shape.getRadius(),2) );
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

And.prototype = Round.prototype;
And.constructor = And;