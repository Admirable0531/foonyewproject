window.onload = function() {
	clearAll();
	setscene(1);
	console.log("ready");
}

function clearAll() {
	for (var i=1; i<=20; i++) {
	var scene = ".scene" + i;
	document.querySelector("#box" + i).setAttribute('scale', '0 0 0');
	}
}

function setscene(scene) {
	var s = ".scene" + scene;
	document.querySelector("#box" + scene).setAttribute('scale', '1 1 1');
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
}

function run(s) {
	clearAll();
	if ("#" + s == document.getElementById('background').getAttribute('src')) {
		setscene(s+1);
	}
	console.log("this is scene " + s)
}