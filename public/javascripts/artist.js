function createArtist(context) {

    return {
        line: function (start, end, colour) {
            context.fillStyle = colour ? colour : "rgb(0,0,0)"
            context.beginPath();
            context.moveTo(start.x, start.y);
            context.lineTo(end.x, end.y);
            context.stroke();

        }
    }
}