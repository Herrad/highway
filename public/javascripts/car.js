function createCar(artist, image, position, speed) {
    var position = position;
    return {
        draw: function () {
            artist.image(image, position, {
                width: 64,
                height: 36
            })
        },
        act: function (destination) {
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