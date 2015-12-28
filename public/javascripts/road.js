function createRoad(artist) {
    var roadTile = new Image()
    roadTile.src = "public/images/roadTile.png"
    var road = {
        draw: function () {
            console.log(roadTile)
            artist.tileHorizontally(roadTile, {
                x: 0,
                y: 256
            }, {
                width: 256,
                height: 192
            })
        }
    }

    return new Promise(function (resolve, reject) {
        console.log(roadTile)
        roadTile.onload = function () {
            resolve(road);
        }
        roadTile.error = reject;
    })
}