function createGate(artist, gateTile, position) {

    return {
        draw: function (scale) {
            artist.image(gateTile, {
                x: position.x * scale,
                y: position.y * scale
            }, {
                width: 16 * scale,
                height: 192 * scale
            });
        }
    }
}