function createCarSpawner(artist, imageCache, road) {
    var activeCars = [];
    return {
        spawnCar: function () {
            var joiningPositions = road.joiningPositions;

            var destinations = road.destinations
            var positionIndex = Math.floor(Math.random() * joiningPositions.length);
            var position = {
                x: joiningPositions[positionIndex].x,
                y: joiningPositions[positionIndex].y
            }
            var destination = {
                x: destinations[positionIndex].x,
                y: destinations[positionIndex].y
            }

            var car = createCar(artist, imageCache.get("public/images/car-red.png"), position, destination, road)
            activeCars.push(car);
        },
        drawCars: function () {
            _.forEach(activeCars, function (car) {
                car.draw();
            })
        },
        actCars: function () {
            _.forEach(activeCars, function (car) {

                car.act();
            })
            activeCars = _.filter(activeCars, function (car) {
                return !car.stopped();
            })
        }
    }
}