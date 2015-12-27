function createRoad(artist) {

    return {
        draw: function () {
            artist.line({
                x: 0,
                y: 300
            }, {
                x: 1024,
                y: 300
            });
        }
    }
}