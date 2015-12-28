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
            artist.image(roadTile, position, this.dimensions);
        },
        position: position,
        dimensions: dimensions
    }

}