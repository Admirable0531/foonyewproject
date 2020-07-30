window.onload = function() {
	clearAll();
	setscene(1);
}

function clearAll() {
	for (var i=1; i<=20; i++) {
	document.querySelector("#box" + i).setAttribute('scale', '0 0 0');
	}
	for (var i=1; i<=19; i++) {
	var value = i + 1001;
	document.querySelector("#box" + value).setAttribute('scale', '0 0 0');
	}
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('scale', '1 1 1');
	if((scene+1000) != 1001) {
	document.querySelector("#box" + (scene+1000)).setAttribute('scale', '1 1 1');
} else {	}
}

function run(s) {
	clearAll();
	if ("#" + s == document.getElementById('background').getAttribute('src')) {
		setscene(s+1);
	}
	console.log("this is scene " + (s+1))
}

function runback(s) {
	clearAll();
	if ("#" + (s+1) == document.getElementById('background').getAttribute('src')) {
		setscene(s);
	}
	console.log("this is scene " + s);
}