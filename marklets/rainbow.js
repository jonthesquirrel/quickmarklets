'use strict';

function randRange(min, max) {
	return Math.random() * (max - min) + min
}
function randInt(min, max) {
	return Math.round(randRange(min, max))
}
function randIntString(min, max) {
	return randInt(min, max).toString()
}
function randColor() {
	return 'rgb(' + randIntString(0, 256) + ', ' + randIntString(0, 256) + ', ' + randIntString(0, 256) + ')'
}

function rainbow(elementArray){
	for (var i = 0; i < elementArray.length; i++) {
		var element = elementArray[i];
		element.style.backgroundColor = randColor();
		element.style.color = randColor();
	}
}

rainbow(document.querySelectorAll('*'));
