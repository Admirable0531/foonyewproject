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
<<<<<<< HEAD
			if (document.querySelector("a-sky").getAttribute('src') == "#1") {
=======
			if (document.querySelector("a-sky").getAttribute('src') == "1") {
>>>>>>> 764436a347563bc63ea0b0bd2492fd7cb4b95eab
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
<<<<<<< HEAD
			if (document.querySelector("a-sky").getAttribute('src') == "2") {
=======
			if (document.querySelector("a-sky").getAttribute('src') == "#2") {
>>>>>>> 2a6993c156e8d0a7f689345a803666bf704eb406
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
<<<<<<< HEAD
			if (document.querySelector("a-sky").getAttribute('src') == "3") {
=======
			if (document.querySelector("a-sky").getAttribute('src') == "#3") {
>>>>>>> 2a6993c156e8d0a7f689345a803666bf704eb406
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
<<<<<<< HEAD
			if (document.querySelector("a-sky").getAttribute('src') == "4") {
=======
			if (document.querySelector("a-sky").getAttribute('src') == "#4") {
>>>>>>> 2a6993c156e8d0a7f689345a803666bf704eb406
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
<<<<<<< HEAD
			if (document.querySelector("a-sky").getAttribute('src') == "#5	") {
=======
<<<<<<< HEAD
			if (document.querySelector("a-sky").getAttribute('src') == "5") {
=======
			if (document.querySelector("a-sky").getAttribute('src') == "#5") {
>>>>>>> 2a6993c156e8d0a7f689345a803666bf704eb406
>>>>>>> 764436a347563bc63ea0b0bd2492fd7cb4b95eab
				console.log("plz say it works for 5");
				clearAll();
				scene1();
			} else {	}
		});

	}
});