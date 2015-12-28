function createGate(artist, gateTile, position) {

    return {
        draw: function (scale) {
            artist.image(gateTile, position, {
                width: 16 * scale,
                height: 192 * scale
            });
        }
    }
}