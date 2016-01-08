function createWorld(road, traffic) {
    var scale = 1;
    var coordinates = {
        x: 0,
        y: 0
    }
    var worldBorders = {
        x: -80,
        y: -65,
        width: 180,
        height: 150
    }

    function setScale(newScale) {
        // scale = newScale;
        // road.scaleTo(newScale);
        // traffic.scaleTo(scale);
    }

    function move(by) {
        var newX = coordinates.x + by.x
        var newY = coordinates.y + by.y
        if (newX < worldBorders.x * scale ||
            newX > worldBorders.width * scale ||
            newY < worldBorders.y * scale ||
            newY > worldBorders.height * scale) {
            return;
        }

        coordinates.x = newX;
        coordinates.y = newY;
    }
    return {
        zoomTo: setScale,
        coordinates: coordinates,
        move: move,
        clickAt: function (position) {
            road.selectSegment(position);
        }
    }
}