window.onload = function() {
	assets();
	spheres();
	clearAll();
	setscene(1);
}

function clearAll() {
	for (var i=1; i<=79; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=78; i++) {
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

function assets() {
	var allassets;
	for(var i=1; i<=80; i++) {
		allassets = allassets + '<img id="' + i + '" src="Finished/(' + i + ').JPG" rotation="0 -90 0">';
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


var coords = {
	"s2": [
	"10 -5 0",
	"-5 -5 15"
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
	"-10 -5 25"
	],
	"s8": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s9": [
	"10 -5 -5",
	"-10 -5 0"
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
	"10 -5 -5",
	"-10 -5 0"
	],
	"s14": [
	"8 -5 0",
	"-8 -5 0"
	],
	"s15": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s16": [
	"10 -5 0",
	"-10 -5 "
	],
	"s17": [
	"10 -5 -5",
	"-10 -5 3"
	],
	"s18": [
	"7 -5 7",
	"-7 -5 -7"
	],
	"s19": [
	"-10 -5 2",
	"10 -5 -2"
	],
	"s20": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s21": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s22": [
	"-10 -5 0",
	"9 -5 3"
	],
	"s23": [
	"-5 -5 -5",
	"5 -5 5"
	],
	"s24": [
	"-10 -5 -5",
	"5 -5 5"
	],
	"s25": [
	"-10 -5 0",
	"5 -5 5"
	],
	"s26": [
	"-5 -5 -5",
	"10 -5 10"
	],
	"s27": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s28": [
	"-10 -5 0",
	"7 -5 3"
	],
	"s29": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s30": [
	"-10 -5 -2",
	"10 -5 1"
	],
	"s31": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s32": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s33": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s34": [
	"-10 -5 5",
	"10 -5 -5"
	],
	"s35": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s36": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s37": [
	"40 -5 3",
	"-10 -5 0"
	],
	"s38": [
	"12 -5 14",
	"-15 -5 5"
	],
	"s39": [
	"5 -5 60",
	"12 -5 45"
	],
	"s40": [
	"10 -5 0",
	"0 -5 0"
	],
	"s41": [
	"10 -5 0",
	"-5 -5 15"
	],
	"s42": [
	"5 -5 0",
	"-6 -5 -6"
	],
	"s43": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s44": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s45": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s46": [
	"10 -5 0",
	"-10 -5 25"
	],
	"s47": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s48": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s49": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s50": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s51": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s52": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s53": [
	"8 -5 0",
	"-8 -5 0"
	],
	"s54": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s55": [
	"10 -5 0",
	"-10 -5 "
	],
	"s56": [
	"10 -5 -5",
	"-10 -5 3"
	],
	"s57": [
	"7 -5 7",
	"-7 -5 -7"
	],
	"s58": [
	"-10 -5 2",
	"10 -5 -2"
	],
	"s59": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s60": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s61": [
	"-10 -5 0",
	"9 -5 3"
	],
	"s62": [
	"-5 -5 -5",
	"5 -5 5"
	],
	"s63": [
	"-10 -5 -5",
	"5 -5 5"
	],
	"s64": [
	"-10 -5 0",
	"5 -5 5"
	],
	"s65": [
	"-5 -5 -5",
	"10 -5 10"
	],
	"s66": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s67": [
	"-10 -5 0",
	"7 -5 3"
	],
	"s68": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s69": [
	"-10 -5 -2",
	"10 -5 1"
	],
	"s70": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s71": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s72": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s73": [
	"-10 -5 5",
	"10 -5 -5"
	],
	"s74": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s75": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s76": [
	"40 -5 3",
	"-10 -5 0"
	],
	"s77": [
	"12 -5 14",
	"-15 -5 5"
	],
	"s78": [
	"5 -5 60",
	"12 -5 45"
	],
	"s79": [
	"10 -5 0",
	"0 -5 0"
	],
};
