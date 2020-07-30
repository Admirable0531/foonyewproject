function clearAll() {
	for (var i=1; i<=4; i++) {
	var scene = ".scene" + i;
	console.log(scene);
	document.querySelector(scene).setAttribute('visible', 'false');
	}
}

function setscene(scene) {
	var s = ".scene" + scene;
	document.querySelector(s).setAttribute('visible', 'true');
	document.querySelector('a-sky').setAttribute('src', scene);
}


AFRAME.registerComponent('cursor-listener1', {
	init: function () {
		document.getElementById('box1').addEventListener('click', function () {
			if (document.querySelector("a-sky").getAttribute('src') == "1") {
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
			if (document.querySelector("a-sky").getAttribute('src') == "2") {
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
			if (document.querySelector("a-sky").getAttribute('src') == "3") {
				console.log("plz say it works for 3");
				clearAll();
				scene4();
			} else {	}
		});

	}
});

AFRAME.registerComponent('cursor-listener4', {
	init: function () {
		document.getElementById('box4').addEventListener('click', function () {
			if (document.querySelector("a-sky").getAttribute('src') == "4") {
				console.log("plz say it works for 4");
				clearAll();
				scene5();
			} else {	}
		});

	}
});

AFRAME.registerComponent('cursor-listener5', {
	init: function () {
		document.getElementById('box5').addEventListener('click', function () {
			if (document.querySelector("a-sky").getAttribute('src') == "5") {
				console.log("plz say it works for 5");
				clearAll();
				scene1();
			} else {	}
		});

	}
});