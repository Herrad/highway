function createRoadSegment(artist, roadTile, position) {

    var initialDimensions = {
        width: 256,
        height: 192
    }

    var initialPosition = position;
    return {
        draw: function (worldCoordinates) {
            var positionToDraw = {
                x: this.position.x + worldCoordinates.x,
                y: this.position.y + worldCoordinates.y,
            }
            artist.image(roadTile, positionToDraw, this.dimensions);
        },
        scaleTo: function (scale) {
            this.dimensions = {
                width: initialDimensions.width * scale,
                height: initialDimensions.height * scale
            }
            this.position = {
                x: initialPosition.x * scale,
                y: initialPosition.y * scale
            }
        },
        position: initialPosition,
        dimensions: initialDimensions
    }

}