window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var imageCache = createImageCache(["public/images/roadTile.png", "public/images/gateTile.png", "public/images/car-red.png"])
        .then(function (imageCache) {
            var artist = createArtist(ctx)
            var roadBuilder = createRoadBuilder(artist, imageCache, {
                x: 0,
                y: 256
            });
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            roadBuilder.addSegment()
            var road = roadBuilder.getRoad();

            function mainLoop() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                road.draw(1);
            }

            setInterval(mainLoop, 1000 / 30);

        });
}