function Task(id, x, y, label) {

    var instance = this;

    this.id = id;

    this.label = createLabel(label);
    this.shape = createRoundRect(x, y, 100, 50, 2);

    // label position
    this.label.setY(y + this.shape.getHeight() / 2 - 8);
    this.label.setX(this.shape.getWidth() / 2 - this.label.getTextWidth() / 2 + this.shape.getAbsolutePosition().x);

    this.group = createGroup(this.shape, this.label, this);

    this.getGraphicElement = function() {
        return this.group;
    };

    this.getId = function () {
        return this.id;
    };

    this.getIconX = function() {
        return this.shape.getAbsolutePosition().x;
    };

    this.getIconY = function() {
        return this.shape.getAbsolutePosition().y;
    };


    this.getIconWidth = function() {
        return this.shape.getWidth();
    };

    this.getIconHeight = function() {
        return this.shape.getHeight();
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

Task.prototype = Rectangular.prototype;
Task.constructor = Task;
