window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var worldCoordinates = {
        x: 0,
        y: 0
    }
    var initialRoadCoordinates = {
        x: 0,
        y: 256
    }
    var mapBorders = {
        x: -80,
        y: -65,
        width: 180,
        height: 150
    }

    var imageCache = createImageCache(["public/images/roadTile.png", "public/images/gateTile.png", "public/images/car-red.png"])
        .then(function (imageCache) {
            var artist = createArtist(ctx)
            var roadBuilder = createRoadBuilder(artist, imageCache, initialRoadCoordinates);
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            var road = roadBuilder.getRoad();

            var scale = 1;

            function setScale(newScale) {
                road.scaleTo(newScale);
            }

            function move(by) {
                var newX = worldCoordinates.x + by.x
                var newY = worldCoordinates.y + by.y
                if (newX < mapBorders.x ||
                    newX > mapBorders.width ||
                    newY < mapBorders.y ||
                    newY > mapBorders.height) {
                    return;
                }

                worldCoordinates.x = newX;
                worldCoordinates.y = newY;
            }
            var controls = createControls(setScale, move);

            function mainLoop() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                road.draw(worldCoordinates);
            }

            setInterval(mainLoop, 1000 / 30);

        });
}