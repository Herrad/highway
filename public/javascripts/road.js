function createRoad(artist, imageCache) {
    var roadTile = imageCache.get("public/images/roadTile.png")
    var resolvedImages = 0;
    var imagesToResolve = 2;

    var from = {
        x: 0,
        y: 256
    }

    var startingGate = createGate(artist, imageCache, {
        x: 16,
        y: 256
    })

    var endingGate = createGate(artist, imageCache, {
        x: 992,
        y: 256
    })

    return {
        draw: function () {
            artist.tileHorizontally(roadTile, from, {
                width: 256,
                height: 192
            });
            if (startingGate) {
                startingGate.draw()
            }
            if (endingGate) {
                endingGate.draw()
            }
        }
    }

}