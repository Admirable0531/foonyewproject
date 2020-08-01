window.onload = function() {
	assets();
	spheres();
	clearAll();
	setscene(1);
}

function clearAll() {
	for (var i=1; i<=150; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=149; i++) {
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
	for(var i=1; i<=150; i++) {
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


function events(open){
	document.getElementById("youtube" + open).style.display = "block";
	console.log("video")
}

function close(close){
	document.getElementById("youtube" + close).style.display = "none";
	console.log("videoclose")
}

