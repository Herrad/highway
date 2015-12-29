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

    var imageCache = createImageCache(["public/images/roadTile.png", "public/images/gateTile.png", "public/images/car-red.png"])
        .then(function (imageCache) {
            var artist = createArtist(ctx)
            var roadBuilder = createRoadBuilder(artist, imageCache, initialRoadCoordinates);
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            var road = roadBuilder.getRoad();
            var world = createWorld(road)

            var scale = 1;
            var controls = createControls(world);

            var carSpawner = createCarSpawner(artist, imageCache, road);

            function mainLoop() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                road.draw(world.coordinates);
                carSpawner.drawCars();

                carSpawner.actCars();
                if (Math.floor(Math.random() * 100) > 90) {
                    carSpawner.spawnCar();
                }
            }

            setInterval(mainLoop, 1000 / 30);

        });
}