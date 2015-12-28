function createRoad(artist, imageCache, segments) {

    var initialSegment = segments[0];
    var initialPosition = initialSegment.position;
    var startingGate = createGate(artist, imageCache.get("public/images/gateTile.png"), {
        x: initialPosition.x + 16,
        y: initialPosition.y
    })

    var lastSegment = segments[segments.length - 1]
    var endingGatePosition = {
        x: lastSegment.position.x + lastSegment.dimensions.width - 32,
        y: lastSegment.position.y
    }
    var endingGate = createGate(artist, imageCache.get("public/images/gateTile.png"), endingGatePosition)

    return {
        draw: function (scale) {
            _.forEach(segments, function (segment) {
                segment.draw(scale);
                startingGate.draw(scale);
                endingGate.draw(scale);
            })
        }
    }
}