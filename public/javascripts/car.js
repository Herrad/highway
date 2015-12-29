function createCar(artist, image, position, destination, road) {
    var position = position;
    var speed = road.speedLimit;
    return {
        draw: function () {
            artist.image(image, position, {
                width: 64,
                height: 36
            })
        },
        act: function () {
            position.x += speed;
            if (position.x >= destination.x) {
                speed = 0;
            }
        },
        stopped: function () {
            return speed === 0;
        }
    }
}