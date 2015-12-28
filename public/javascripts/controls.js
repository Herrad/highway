function createControls(setScale) {
    var scale = 1;
    $('canvas').on('wheel', function (e) {
        if (e.originalEvent.deltaY < 0) {
            scale += 0.1
        } else {
            scale -= 0.1
        }
        if (scale < 0.5) {
            return scale = 0.5
        }
        if (scale > 4) {
            return scale = 4
        }
        setScale(scale)
    })
}