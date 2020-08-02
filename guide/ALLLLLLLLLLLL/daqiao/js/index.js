window.onload = function() {
	assets();
	spheres();
	clearAll();
	var place = Number(localStorage.getItem('place'));
	if (place == 0) place = 1;
	setscene(place);
	console.log(place);
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
	for (var i=1; i<=66; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=65; i++) {
		var value = i + 1001;
		document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
}

function run(s) {
	clearAll();
	if ("#" + s == document.getElementById('abackground').getAttribute('src')) {
		setscene(s+1);
	}
	console.log("this is scene " + (s+1))
}

function runback(s) {
	clearAll();
	if ("#" + (s+1) == document.getElementById('abackground').getAttribute('src')) {
		setscene(s);
	}
	console.log("this is scene " + s);
}

function assets() {
	var allassets;
	for(var i=4; i<=29; i++) {
		allassets = allassets + '<img id="' + i + '" src="pictures/(' + i + ').JPG" rotation="0 -90 0">';
	}
	for(var i=1; i<=5; i++) {
		allassets = allassets + '<img id="' + (i+29) + '" src="pictures/1/(' + i + ').JPG" rotation="0 -90 0">';
	}
	for(var i=1; i<=14; i++) {
		allassets = allassets + '<img id="' + (i+34) + '" src="pictures/2/(' + i + ').JPG" rotation="0 -90 0">';
	}
	for(var i=1; i<=8; i++) {
		allassets = allassets + '<img id="' + (i+48) + '" src="pictures/3/(' + i + ').JPG" rotation="0 -90 0">';
	}
	for(var i=1; i<=10; i++) {
		allassets = allassets + '<img id="' + (i+56) + '" src="pictures/4/(' + i + ').JPG" rotation="0 -90 0">';
	}
	document.getElementById("assets").innerHTML = allassets;
}

function spheres() {
	var all = '<a-entity class="scene1"><a-sphere id="box1" color="red" onclick="run(1)" position="10 -5 0" radius="0.001" material="" geometry=""> </a-sphere></a-entity>';
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
}

var coords = {
	"s2": [
	"10 -5 8",
	"-5 -5 -5"
	],
	"s3": [
	"5 -5 -1",
	"-6 -5 0"
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
	"10 -5 5",
	"-10 -5 -5"
	],
	"s7": [
	"10 -5 -5",
	"-10 -5 5"
	],
	"s8": [
	"10 -5 3;",
	"-7 -5 0"
	],
	"s9": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s10": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s11": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s12": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s13": [
	"-10 -5 5",
	"10 -5 -2"
	],
	"s14": [
	"-8 -5 0",
	"8 -5 0"
	],
	"s15": [
	"-10 -5 0",
	"10 -5 -2"
	],
	"s16": [
	"-10 -5 0",
	"5 -5 0"
	],
	"s17": [
	"-10 -5 -8",
	"6 -5 4"
	],
	"s18": [
	"-10 -5 -5",
	"7 -5 5"
	],
	"s19": [
	"-10 -5 0",
	"7 -5 0"
	],
	"s20": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s21": [
	"10 -5 0",
	"-10 -5 25"
	],
	"s22": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s23": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s24": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s25": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s26": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s27": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s28": [
	"8 -5 0",
	"-8 -5 0"
	],
	"s29": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s30": [
	"10 -5 8",
	"-5 -5 -5"
	],
	"s31": [
	"5 -5 -1",
	"-6 -5 0"
	],
	"s32": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s33": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s34": [
	"10 -5 5",
	"-10 -5 -5"
	],
	"s35": [
	"10 -5 -5",
	"-10 -5 5"
	],
	"s36": [
	"10 -5 3;",
	"-7 -5 0"
	],
	"s37": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s38": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s39": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s40": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s41": [
	"-10 -5 5",
	"10 -5 -2"
	],
	"s42": [
	"-8 -5 0",
	"8 -5 0"
	],
	"s43": [
	"-10 -5 0",
	"10 -5 -2"
	],
	"s44": [
	"-10 -5 0",
	"5 -5 0"
	],
	"s45": [
	"-10 -5 -8",
	"6 -5 4"
	],
	"s46": [
	"-10 -5 -5",
	"7 -5 5"
	],
	"s47": [
	"-10 -5 0",
	"7 -5 0"
	],
	"s48": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s49": [
	"10 -5 0",
	"-10 -5 25"
	],
	"s50": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s51": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s52": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s53": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s54": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s55": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s56": [
	"-10 -5 0",
	"5 -5 0"
	],
	"s57": [
	"-10 -5 -8",
	"6 -5 4"
	],
	"s58": [
	"-10 -5 -5",
	"7 -5 5"
	],
	"s59": [
	"-10 -5 0",
	"7 -5 0"
	],
	"s60": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s61": [
	"10 -5 0",
	"-10 -5 25"
	],
	"s62": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s63": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s64": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s65": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s66": [
	"22 -5 20",
	"-10 -5 -10"
	]
};
