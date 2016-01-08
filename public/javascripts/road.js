function createRoad(artist, imageCache, collision, segments) {

    var initialSegment = segments[0];
    var initialPosition = initialSegment.position;
    var startingGatePosition = {
        x: initialPosition.x + 16,
        y: initialPosition.y
    }
    var startingGate = createGate(artist, imageCache.get("public/images/gateTile.png"), startingGatePosition)

    var lastSegment = segments[segments.length - 1]
    var endingGatePosition = {
        x: lastSegment.position.x + lastSegment.dimensions.width - 32,
        y: lastSegment.position.y
    }
    var endingGate = createGate(artist, imageCache.get("public/images/gateTile.png"), endingGatePosition)

    var selectedSegment;

    var joiningPositions = [{
        x: startingGatePosition.x,
        y: startingGatePosition.y + 52
    }, {
        x: startingGatePosition.x,
        y: startingGatePosition.y + 100
    }, {
        x: startingGatePosition.x,
        y: startingGatePosition.y + 148
    }];

    var destinations = [{
        x: endingGatePosition.x,
        y: endingGatePosition.y + 52
    }, {
        x: endingGatePosition.x,
        y: endingGatePosition.y + 100
    }, {
        x: endingGatePosition.x,
        y: endingGatePosition.y + 148
    }];

    function scalePositionsTo(scale) {
        _.forEach(joiningPositions, function (position) {
            position.x = position.x * scale;
            position.y = position.y * scale;
        });

        _.forEach(destinations, function (position) {
            position.x = position.x * scale;
            position.y = position.y * scale;
        });
    }

    return {
        draw: function (worldCoordinates) {
            _.forEach(segments, function (segment) {
                segment.draw(worldCoordinates);
            })
            startingGate.draw(worldCoordinates);
            endingGate.draw(worldCoordinates);
        },
        scaleTo: function (scale) {
            // _.forEach(segments, function (segment) {
            //     segment.scaleTo(scale);
            // })
            // startingGate.scaleTo(scale);
            // endingGate.scaleTo(scale);
            // scalePositionsTo(scale);
        },
        moveTo: function (position) {},
        selectSegment: function (point) {
            var segment = collision.getBoxFor(segments, point);
            if (!segment) {
                return;
            }
            if (selectedSegment) {
                selectedSegment.toggleHighlight();
            }
            selectedSegment = segment;
            selectedSegment.toggleHighlight();

        },
        joiningPositions: joiningPositions,
        destinations: destinations,
        speedLimit: 130
    }
}