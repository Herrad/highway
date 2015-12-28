function createRoadSegment(artist, roadTile, position) {

    var initialDimensions = {
        width: 256,
        height: 192
    }

    var initialPosition = position;
    return {
        draw: function () {

            artist.image(roadTile, this.position, this.dimensions);
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