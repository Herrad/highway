window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var imageCache = createImageCache(["public/images/roadTile.png", "public/images/gateTile.png", "public/images/car-red.png"])
        .then(function (imageCache) {
            var artist = createArtist(ctx)
            var road = createRoad(artist, imageCache);
            road.spawnCar(createCar(artist, imageCache.get("public/images/car-red.png"), {
                x: 50,
                y: 356
            }, 5))

            function mainLoop() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                road.draw();
                road.act();
            }

            setInterval(mainLoop, 1000 / 30);

        });
}