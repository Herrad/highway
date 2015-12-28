function createGate(artist, imageCache, position) {
    var position
    var gateTile = imageCache.get("public/images/gateTile.png");

    return {
        draw: function () {
            artist.image(gateTile, position, {
                width: 16,
                height: 192
            });
        }
    }
}