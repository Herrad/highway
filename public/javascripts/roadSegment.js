function createRoadSegment(artist, roadTile, position) {

    var dimensions = {
        width: 256,
        height: 192
    }
    return {
        draw: function (scale) {
            this.dimensions = {
                width: 256 * scale,
                height: 192 * scale
            }

            artist.image(roadTile, {
                x: this.position.x * scale,
                y: this.position.y * scale
            }, this.dimensions);
        },
        position: position,
        dimensions: dimensions
    }

}