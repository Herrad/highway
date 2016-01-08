function createCar(artist, image, position, destination, road) {
    var position = position;
    var speed = road.speedLimit;
    var scale = 1;
    return {
        draw: function (worldPosition) {
            var pos = {
                x: worldPosition.x + position.x,
                y: worldPosition.y + position.y
            }
            artist.image(image, pos, {
                width: 64 * scale,
                height: 36 * scale
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
        },
        scaleTo: function (newScale) {
            scale = newScale;
            position = {
                x: position.x * newScale,
                y: position.y * newScale
            }
        }
    }
}