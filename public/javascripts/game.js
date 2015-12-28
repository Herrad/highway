window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var artist = createArtist(ctx)
    var road;
    createRoad(artist)
        .then(function (createdRoad) {
            road = createdRoad;
            complete();
        })

    function complete() {
        road.draw();
    }
}