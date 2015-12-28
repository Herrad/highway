function createCar(artist, image, position, speed) {
    var position = position;
    return {
        draw: function () {
            artist.image(image, position, {
                width: 64,
                height: 36
            })
        },
        act: function () {
            position.x += speed;
        }
    }
}