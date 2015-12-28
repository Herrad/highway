function createRoad(artist, imageCache) {
    var roadTile = imageCache.get("public/images/roadTile.png")
    var cars = []

    var from = {
        x: 0,
        y: 256
    }

    var startingGate = createGate(artist, imageCache, {
        x: 16,
        y: 256
    })

    var destination = {
        x: 992,
        y: 256
    }
    var endingGate = createGate(artist, imageCache, destination)

    return {
        draw: function () {
            artist.tileHorizontally(roadTile, from, {
                width: 256,
                height: 192
            });
            if (startingGate) {
                startingGate.draw()
            }
            if (endingGate) {
                endingGate.draw()
            }
            _.forEach(cars, function (car) {
                car.draw()
            })
        },
        act: function () {
            _.forEach(cars, function (car) {
                if (car.stopped()) {
                    return _.remove(cars, car)
                }
                car.act(destination);
            })
        },
        spawnCar: function (car) {
            cars.push(car)
        }
    }

}