function createCar(artist, image, position, destination, road) {
    var position = position;
    var speed = road.speedLimit;
    return {
        draw: function (scale) {
            artist.image(image, position, {
                width: 64,
                height: 36
            })
        },
        act: function (secondsSinceLastUpdate) {
            position.x += speed * secondsSinceLastUpdate;
            position.x = Math.round(position.x)
            if (position.x >= destination.x) {
                speed = 0;
            }
        },
        stopped: function () {
            return speed === 0;
        }
    }
}