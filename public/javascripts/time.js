function createTime() {
    var then = Date.now();
    var now = Date.now();
    var events = [];
    return {
        delta: function () {
            var now = Date.now();
            var delta = (now - then);
            then = Date.now();
            return delta;
        },
        since: function (key) {
            var e = _.find(events, {
                key: key
            });
            if (!e) {
                return -1;
            }
            var now = Date.now();
            return (now - e.time);
        },
        eventOccurred: function (key) {
            var happenedAt = Date.now();
            var e = _.find(events, {
                key: key
            });
            if (e) {
                e.time = happenedAt;
            } else {
                events.push({
                    key: key,
                    time: happenedAt
                });
            }
        }
    }
}