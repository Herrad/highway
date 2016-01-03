function createControls(world) {
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
        world.zoomTo(scale)
    })

    $(window).on('keydown', function (e) {
        switch (e.keyCode) {
        case 37:
            world.move({
                x: 10,
                y: 0
            })
            break;
        case 38:
            world.move({
                x: 0,
                y: 10
            })
            break;
        case 39:
            world.move({
                x: -10,
                y: 0
            })
            break;
        case 40:
            world.move({
                x: 0,
                y: -10
            })
            break;
        }
    });

    $('#canvas').on('click', function (e){
        world.clickAt({x:e.pageX, y:e.pageY});
    });
}