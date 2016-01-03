function createCollisionDetection(){
	return {
		getBoxFor: function (boxes, point) {
			return _.find(boxes, function (box) {
				return box.position.x < point.x &&
				 box.position.x + box.dimensions.width > point.x && 
				 box.position.y < point.y && 
				 box.position.y + box.dimensions.height > point.y;
			})
		}
	}
}