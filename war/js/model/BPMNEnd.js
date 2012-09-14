function End(id, x, y, label){

    this.id = id;

    this.label = createLabel(label);
    this.shape = createCircle(20, x, y, 3);

    // label position
    this.label.setY(y + 25);
    this.label.setX(x - this.label.getTextWidth() / 2);

    this.group = createGroup(this.shape, this.label, this);

    this.getGraphicElement = function(){
        return this.group;
    };

    this.getId = function (){
        return this.id;
    };

    //  Returns the center X
    this.getIconX = function(){
        return this.shape.getAbsolutePosition().x;
    };

    //  Returns the center Y
    this.getIconY = function(){
        return this.shape.getAbsolutePosition().y;
    };

    this.getIconRadius = function(){
        return this.shape.getRadius();
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

End.prototype = Round.prototype;
End.constructor = End;


