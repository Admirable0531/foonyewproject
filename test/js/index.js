window.onload = function() {
	clearAll();
	setscene(1);
}

function clearAll() {
	for (var i=1; i<=20; i++) {
	document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=19; i++) {
	var value = i + 1001;
	document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if((scene+1000) != 1001) {
	document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
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