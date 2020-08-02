window.onload = function() {
	assets();
	spheres();
	clearAll();
	var place = Number(localStorage.getItem('place'));
	setscene(place);
	localStorage.setItem('place', 1);
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.wheelDelta);
    //getting the mouse wheel change (120 or -120 and normalizing it to 1 or -1)
    var mycam=document.getElementById('cam').getAttribute('camera');
    var finalZoom=document.getElementById('cam').getAttribute('camera').zoom+delta;
    //limiting the zoom so it doesnt zoom too much in or out
    if(finalZoom<1)
      finalZoom=1;
    if(finalZoom>5)
      finalZoom=5;  

    mycam.zoom=finalZoom;
    //setting the camera element
    document.getElementById('cam').setAttribute('camera',mycam);
  });

function clearAll() {
	for (var i=1; i<=15; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=14; i++) {
		var value = i + 1001;
		document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
	document.querySelector("#x6").setAttribute('radius', '0.001');
	document.querySelector("#xx6").setAttribute('radius', '0.001');
	document.querySelector("#x8").setAttribute('radius', '0.001');
	document.querySelector("#x12").setAttribute('radius', '0.001');

	
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
	if (scene == 6) {
		document.querySelector("#x" + 6).setAttribute('radius', '1');
		document.querySelector("#xx" + 6).setAttribute('radius', '1');
		document.querySelector("#box" +6).setAttribute('radius', '0.001');
	} else if (scene == 8){
		document.querySelector("#x" + 8).setAttribute('radius', '1');
	} else if (scene == 12){
		document.querySelector("#x" + 12).setAttribute('radius', '1');
		document.querySelector("#box" + 1012).setAttribute('radius', '0.001');
	} else if (scene == 11){
		document.querySelector("#box" + 11).setAttribute('radius', '0.001');
	} else if (scene == 7){
		document.querySelector("#x" + 7).setAttribute('radius', '1');
		document.querySelector("#box" + 1007).setAttribute('radius', '0.001');
	}
}

function run(s) {
	clearAll();
	if ("#" + s == document.getElementById('background').getAttribute('src')) {
		setscene(s+1);
	}
	console.log("this is scene " + (s+1))
}

function xrun(s) {
	clearAll();
	setscene(s);
	console.log("this is scene " + (s))
}

function runback(s) {
	clearAll();
	if ("#" + (s+1) == document.getElementById('background').getAttribute('src')) {
		setscene(s);
	}
	console.log("this is scene " + s);
}

function assets() {
	var allassets;
	for(var i=1; i<=15; i++) {
		allassets = allassets + '<img id="' + i + '" src="pictures/(' + i + ').JPG" rotation="0 -90 0">';
	}
	document.getElementById("assets").innerHTML = allassets;
}

function spheres() {
	var all = '<a-entity class="scene1"><a-sphere id="box1" color="red" onclick="run(1)" position="-5 -5 -20" radius="0.001" material="" geometry=""> </a-sphere></a-entity>';
		var i = 2;
		for (var key in coords) {
			if (coords.hasOwnProperty(key)) {
				all = all + '<a-entity class="scene' + i + '"><a-sphere id="box' + i + '" color="red" onclick="run(' + i + ')" position="' + coords[key][0] + '"> </a-sphere><a-sphere id="box' + (i+1000) + '" color="blue" onclick="runback(' + (i-1) + ')" position="' + coords[key][1] + '"> </a-sphere></a-entity>';
				i++;
			}
		}


	document.getElementById("scenes").innerHTML = all;
}

function debug(s) {
	clearAll();
	setscene(s);
<<<<<<< HEAD:Different/redbrick/js/index.js
}

var coords = {
	"s2": [
	"10 -5 5",
	"-7 -5 15"
	],
	"s3": [
	"5 -5 0",
	"-6 -5 -6"
	],
	"s4": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s5": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s6": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s7": [
	"10 -5 0",
	"-10 -5 0"
	],
	"s8": [
	"10 -5 25",
	"-7 -5 -20"
	],
	"s9": [
	"-10 -5 -40",
	"10 -5 40"
	],
	"s10": [
	"0 -5 -40",
	"0 -5 40"
	],
	"s11": [
	"100 0 20",
	"50 -3 0"
	],
	"s12": [
	"-25 -5 0",
	"20 -5 -100"
	],
	"s13": [
	"20 0 7",
	"-10 -5 -3"
	],
	"s14": [
	"8 -5 0",
	"-8 -5 0"
	],
	"s15": [
	"10 -5 0",
	"-10 -5 -2"
	]
};
=======
	console.log("this is scene " + (s))
}
>>>>>>> be86dd7ba053821fe3ade673c8514ccfa6b3f4e3:guide/redbrick/js/index.js
