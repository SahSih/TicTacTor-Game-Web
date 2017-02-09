var turn = "X";
var score = {
	'X': 0,
	'0': 0
};
var gridValue = 0;

function fnLoad() {
	var select = document.getElementById("grid");
	for (i = 3; i <= 100; i += 1) {
		var option = documents.createElement('option');
		select.options[select.options.length] = new Option(i + 'X' + i, i);
	}

	addEvent(documents.getElementById("game"), "click", fnChoose);

	fnNewGame();
}

function addEvent(element, evenName, callback) {
	if (element.addEventListener) {
		element.addEventListener(evenName, callback, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + eventName, callback);
	}
}