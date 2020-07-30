window.onload = function() {
	clearAll();
	setscene(1);
	console.log("ready");
}

function clearAll() {
	for (var i=1; i<=5; i++) {
	var scene = ".scene" + i;
	console.log(scene);
	document.querySelector("#box" + i).setAttribute('scale', '0 0 0');
	}
}

function setscene(scene) {
	var s = ".scene" + scene;
	document.querySelector("#box" + scene).setAttribute('scale', '1 1 1');
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
}


AFRAME.registerComponent('cursor-listener1', {
	init: function () {
		document.getElementById('box1').addEventListener('click', function () {
			if (document.querySelector("a-sky").getAttribute('src') == "#1") {
				console.log("plz say it works");
				clearAll();
				setscene(2);
			} else {	}
		});

	}
});

AFRAME.registerComponent('cursor-listener2', {
	init: function () {
		document.getElementById('box2').addEventListener('click', function () {
			if (document.querySelector("a-sky").getAttribute('src') == "#2") {
				console.log("plz say it works for 2");
				clearAll();
				setscene(3);
			} else {	}
		});

	}
});

AFRAME.registerComponent('cursor-listener3', {
	init: function () {
		document.getElementById('box3').addEventListener('click', function () {
			if (document.querySelector("a-sky").getAttribute('src') == "#3") {
				console.log("plz say it works for 3");
				clearAll();
				setscene(4);
			} else {	}
		});

	}
});

AFRAME.registerComponent('cursor-listener4', {
	init: function () {
		document.getElementById('box4').addEventListener('click', function () {
			if (document.querySelector("a-sky").getAttribute('src') == "#4") {
				console.log("plz say it works for 4");
				clearAll();
				setscene(5);
			} else {	}
		});

	}
});

AFRAME.registerComponent('cursor-listener5', {
	init: function () {		
		document.getElementById('box5').addEventListener('click', function () {
			if (document.querySelector("a-sky").getAttribute('src') == "#5") {
				console.log("plz say it works for 5");
				clearAll();
				setscene(6);
			} else {	}
		});

	}
});