function createImageCache(paths, callback) {

    var images = [];
    var cache = {
        get: function (path) {
            return _.find(images, {
                path: path
            }).image;
        }
    }

    return new Promise(function (resolve, reject) {

        _.forEach(paths, function (path) {
            var image = new Image;
            image.onload = function () {
                images.push({
                    path: path,
                    image: image
                });
                if (images.length === paths.length) {
                    resolve(cache);
                }
            }
            image.src = path;
        });
    })
}