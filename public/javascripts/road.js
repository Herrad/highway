function createRoad(artist) {
    var roadTile = new Image()
    roadTile.src = "public/images/roadTile.png"
    var gate = new Image()
    gate.src = "public/images/gate.png"
    var resolvedImages = 0;
    var imagesToResolve = 2;

    var road = {
        draw: function () {
            console.log(roadTile)
            artist.tileHorizontally(roadTile, {
                x: 0,
                y: 256
            }, {
                width: 256,
                height: 192
            });
            artist.image(gate, {
                x: 16,
                y: 256
            }, {
                width: 16,
                height: 192
            })
            artist.image(gate, {
                x: 992,
                y: 256
            }, {
                width: 16,
                height: 192
            })
        }
    }

    function resolveWhenDone(resolve) {
        resolvedImages++
        if (resolvedImages >= imagesToResolve) {
            return resolve(road);
        }
    }

    return new Promise(function (resolve, reject) {
        console.log(roadTile)
        roadTile.onload = function () {
            resolve(road);
        };

        roadTile.error = reject;
        gate.error = reject;
    })
}