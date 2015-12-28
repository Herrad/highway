function createRoadBuilder(artist, imageCache, initialPosition) {
    var roadSegments = []
    var nextPosition = {
        x: initialPosition.x,
        y: initialPosition.y
    }

    function addSegment() {
        var segment = createRoadSegment(artist, imageCache.get("public/images/roadTile.png"), {
            x: nextPosition.x,
            y: nextPosition.y
        });
        roadSegments.push(segment)
        nextPosition.x += segment.dimensions.width;

    }
    return {
        addSegment: addSegment,
        getRoad: function () {
            return createRoad(artist, imageCache, roadSegments)
        }
    }
}