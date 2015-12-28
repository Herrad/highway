window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var imageCache = createImageCache(["public/images/roadTile.png", "public/images/gateTile.png"])
        .then(function (imageCache) {
            var artist = createArtist(ctx)
            var road = createRoad(artist, imageCache);
            road.draw();
        });

}