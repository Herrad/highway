function createCarSpawner(artist, imageCache, road) {
    var activeCars = [];
    return {
        spawnCar: function (time) {
            var secondsSinceSpawn = time.since('spawn')
            if (secondsSinceSpawn !== -1 && secondsSinceSpawn < 5000) {
                return;
            }
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
            time.eventOccurred('spawn')
        },
        drawCars: function () {
            _.forEach(activeCars, function (car) {
                car.draw();
            })
        },
        actCars: function (secondsSinceLastUpdate) {
            _.forEach(activeCars, function (car) {
                car.act(secondsSinceLastUpdate);
            })
            activeCars = _.filter(activeCars, function (car) {
                return !car.stopped();
            })
        }
    }
}