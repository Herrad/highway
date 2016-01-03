function createTraffic(artist){
	var cars =[];
	return {
        draw: function () {
            _.forEach(cars, function (car) {
                car.draw();
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
        carJoined: function(car){
        	cars.push(car);
        }
	}	
}