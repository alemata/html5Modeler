function Round() {
}

Round.prototype.getCenterX = function () {
    return this.shape.getAbsolutePosition().x;
};

Round.prototype.getCenterY = function () {
    return this.shape.getAbsolutePosition().y;
};

