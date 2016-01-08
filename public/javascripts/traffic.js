function createTraffic(artist) {
    var cars = [];
    var scale = 1;
    return {
        draw: function (worldPosition) {
            _.forEach(cars, function (car) {
                car.draw(worldPosition);
            })
        },
        act: function (secondsSinceLastUpdate) {
            _.forEach(cars, function (car) {
                car.act(secondsSinceLastUpdate);
            })
            cars = _.filter(cars, function (car) {
                return !car.stopped();
            })
        },
        carJoined: function (car) {
            cars.push(car);
        },
        scaleTo: function (newScale) {
            // _.forEach(cars, function (car) {
            //     car.scaleTo(newScale);
            // });
        }
    }
}