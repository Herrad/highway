function createGate(artist, gateTile, position) {
    var initialDimensions = {
        width: 16,
        height: 192
    }
    var initialPosition = position;
    return {
        draw: function () {
            artist.image(gateTile, this.position, this.dimensions);
        },
        scaleTo: function (scale) {
            this.position = {
                x: initialPosition.x * scale,
                y: initialPosition.y * scale
            }
            this.dimensions = {
                width: initialDimensions.width * scale,
                height: initialDimensions.height * scale
            }
        },
        position: position,
        dimensions: initialDimensions
    }
}