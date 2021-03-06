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

    var imageCache = createImageCache(["public/images/roadTile.png", "public/images/gateTile.png", "public/images/car-red.png", "public/images/matrix.png"])
        .then(function (imageCache) {
            var collision = createCollisionDetection();
            var time = createTime();
            var artist = createArtist(ctx)
            var roadBuilder = createRoadBuilder(artist, imageCache, collision, initialRoadCoordinates);
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            var road = roadBuilder.getRoad();
            var traffic = createTraffic();
            var world = createWorld(road, traffic);

            var scale = 1;
            var controls = createControls(world);
            var carSpawner = createCarSpawner(artist, imageCache, road, traffic);
            var info = $('.info');

            function mainLoop() {
                info.html(Math.floor(1000 / time.since('lastFrame')))
                time.eventOccurred('lastFrame')
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                var delta = time.delta()
                road.draw(world.coordinates);
                traffic.draw(world.coordinates);
                traffic.act(delta / 1000);
                carSpawner.spawnCar(time);

            }

            setInterval(mainLoop, 1000 / 24);

        });
}