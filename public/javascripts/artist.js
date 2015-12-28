function createArtist(context) {

    function drawImage(image, position, size) {
        if (!size) {
            context.drawImage(image, position.x, position.y)
            return
        }
        context.drawImage(image, position.x, position.y, size.width, size.height)
    }
    return {
        line: function (start, end, colour) {
            context.fillStyle = colour ? colour : "rgb(0,0,0)"
            context.beginPath();
            context.moveTo(start.x, start.y);
            context.lineTo(end.x, end.y);
            context.stroke();
        },
        image: drawImage,
        tileHorizontally: function (image, initialPositon, size, iterations) {
            if (!iterations) {
                iterations = context.canvas.width / size.width;
            }
            for (var counter = 0; counter < iterations; counter++) {
                var position = {
                    x: initialPositon.x + counter * size.width,
                    y: initialPositon.y
                }
                drawImage(image, position, size)
            }
        }
    }
}