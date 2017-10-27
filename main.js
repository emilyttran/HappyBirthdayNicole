
var kittypic = new Raster('kitty.PNG');
var treeypic = new Raster('treey.PNG');
var count = 4;

var kitty = new Symbol(kittypic);
var tree = new Symbol(treeypic);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
  var temp = count*3;
	var center = Point.random() * view.size;
	var placedSymbol1 = kitty.place(center);
	placedSymbol1.scale(i / temp);
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];

		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
		item.position.x += item.bounds.width / 20;

		// If the item has left the view on the right, move it back
		// to the left:
		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
	}
}
