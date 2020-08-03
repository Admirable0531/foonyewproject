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
	document.querySelector("#x1").setAttribute('radius', '0.001');
	document.querySelector("#xx1").setAttribute('radius', '0.001');
	document.querySelector("#x3").setAttribute('radius', '0.001');
	document.querySelector("#x12").setAttribute('radius', '0.001');
	document.querySelector("#x15").setAttribute('radius', '0.001');
	document.querySelector("#x21").setAttribute('radius', '0.001');
	document.querySelector("#xx15").setAttribute('radius', '0.001');
	document.querySelector("#x22").setAttribute('radius', '0.001');
	document.querySelector("#x30").setAttribute('radius', '0.001');
	document.querySelector("#x32").setAttribute('radius', '0.001');
	document.querySelector("#xx30").setAttribute('radius', '0.001');
	document.querySelector("#x41").setAttribute('radius', '0.001');
	document.querySelector("#x43").setAttribute('radius', '0.001');	
	document.querySelector("#xx41").setAttribute('radius', '0.001');
	document.querySelector("#x44").setAttribute('radius', '0.001');
	document.querySelector("#x48").setAttribute('radius', '0.001');
	document.querySelector("#x35").setAttribute('radius', '0.001');
	document.querySelector("#x49").setAttribute('radius', '0.001');
	document.querySelector("#x11").setAttribute('radius', '0.001');
	document.querySelector("#x42").setAttribute('radius', '0.001');
	document.querySelector("#x56").setAttribute('radius', '0.001');
	document.querySelector("#xx56").setAttribute('radius', '0.001');
	document.querySelector("#xx49").setAttribute('radius', '0.001');
	document.querySelector("#x57").setAttribute('radius', '0.001');
	document.querySelector("#x66").setAttribute('radius', '0.001');
	document.querySelector("#xx66").setAttribute('radius', '0.001');
	document.querySelector("#x20").setAttribute('radius', '0.001');
	document.querySelector("#x34").setAttribute('radius', '0.001');
	document.querySelector("#x17").setAttribute('radius', '0.001');
	document.querySelector("#xx17").setAttribute('radius', '0.001');
	document.querySelector("#x16").setAttribute('radius', '0.001');
	document.querySelector("#x15").setAttribute('radius', '0.001');
	document.querySelector("#xx21").setAttribute('radius', '0.001');
	document.querySelector("#xx22").setAttribute('radius', '0.001');
	document.querySelector("#xxx22").setAttribute('radius', '0.001');
	document.querySelector("#xxxx22").setAttribute('radius', '0.001');
	document.querySelector("#x26").setAttribute('radius', '0.001');
	document.querySelector("#x23").setAttribute('radius', '0.001');
	document.querySelector("#xx12").setAttribute('radius', '0.001');

}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
	if (scene == 15){
		document.querySelector("#x" + 15).setAttribute('radius', '1');
		document.querySelector("#xx" + 15).setAttribute('radius', '1');
	} else if (scene == 21){
		document.querySelector("#x" + 21).setAttribute('radius', '1');
		document.querySelector("#xx" + 21).setAttribute('radius', '1');
		document.querySelector("#box" + 1021).setAttribute('radius', '0.001');
		document.querySelector("#box" + 21).setAttribute('radius', '0.001');

	} else if (scene == 22){
		document.querySelector("#box" + 1022).setAttribute('radius', '0.001');
		document.querySelector("#box" + 22).setAttribute('radius', '0.001');
		document.querySelector("#x" + 22).setAttribute('radius', '1');
		document.querySelector("#xx" + 22).setAttribute('radius', '1');
		document.querySelector("#xxx" + 22).setAttribute('radius', '1');
		document.querySelector("#xxxx" + 22).setAttribute('radius', '1');
	} else if (scene == 30){
		document.querySelector("#x" + 30).setAttribute('radius', '1');
		document.querySelector("#box" + 1030).setAttribute('radius', '0.001');
		document.querySelector("#xx" + 30).setAttribute('radius', '1');
	} else if (scene == 31){
		document.querySelector("#box" + 31).setAttribute('radius', '0.001');
	} else if (scene == 32){
		document.querySelector("#box" + 1032).setAttribute('radius', '0.001');
		document.querySelector("#x" + 32).setAttribute('radius', '1');
	} else if (scene == 12){
		document.querySelector("#box1012").setAttribute('radius', '0.001');
		document.querySelector("#x" + 12).setAttribute('radius', '1');
		document.querySelector("#xx" + 12).setAttribute('radius', '1');
	} else if (scene == 41){
		document.querySelector("#x" + 41).setAttribute('radius', '1');
		document.querySelector("#xx" + 41).setAttribute('radius', '1');
	} else if (scene == 42){
		document.querySelector("#x" + 42).setAttribute('radius', '1');
		document.querySelector("#box42").setAttribute('radius', '0.001');		
	} else if (scene == 43){
		document.querySelector("#box43").setAttribute('radius', '0.001');
		document.querySelector("#box1043").setAttribute('radius', '0.001');
		document.querySelector("#x" + 43).setAttribute('radius', '1');
	} else if (scene == 44){
		document.querySelector("#box1044").setAttribute('radius', '0.001');
		document.querySelector("#x" + 44).setAttribute('radius', '1');
	} else if (scene == 48){
		document.querySelector("#box48").setAttribute('radius', '0.001');
		document.querySelector("#x" + 48).setAttribute('radius', '1');
	} else if (scene == 35){
		document.querySelector("#x" + 35).setAttribute('radius', '1');
	} else if (scene == 49){
		document.querySelector("#box1049").setAttribute('radius', '0.001');
		document.querySelector("#x" + 49).setAttribute('radius', '1');
		document.querySelector("#xx" + 49).setAttribute('radius', '1');		
	} else if (scene == 1){
		document.querySelector("#x" + 1).setAttribute('radius', '1');
		document.querySelector("#xx" + 1).setAttribute('radius', '1');
	} else if (scene == 3){
		document.querySelector("#x" + 3).setAttribute('radius', '1');
	} else if (scene == 11){
		document.querySelector("#box11").setAttribute('radius', '0.001');
		document.querySelector("#x" + 11).setAttribute('radius', '1');
	} else if (scene == 56){
		document.querySelector("#box56").setAttribute('radius', '0.001');
		document.querySelector("#x" + 56).setAttribute('radius', '1');
		document.querySelector("#xx" + 56).setAttribute('radius', '1');
	} else if (scene == 57){
		document.querySelector("#x" + 57).setAttribute('radius', '1');
		document.querySelector("#box1057").setAttribute('radius', '0.001');
	} else if (scene == 66){
		document.querySelector("#x" + 66).setAttribute('radius', '1');
		document.querySelector("#xx" + 66).setAttribute('radius', '1');
		document.querySelector("#box66").setAttribute('radius', '0.001');
	} else if (scene == 20){
		document.querySelector("#box20").setAttribute('radius', '0.001');
		document.querySelector("#x" + 20).setAttribute('radius', '1');
	} else if (scene == 34){
		document.querySelector("#x" + 34).setAttribute('radius', '1');
	} else if (scene == 17){
		document.querySelector("#x" + 17).setAttribute('radius', '1');
		document.querySelector("#xx" + 17).setAttribute('radius', '1');		
	} else if (scene == 16){
		document.querySelector("#x" + 16).setAttribute('radius', '1');
	} else if (scene == 26){
		document.querySelector("#x" + 26).setAttribute('radius', '1');
	} else if (scene == 23){
		document.querySelector("#box1023").setAttribute('radius', '0.001');
		document.querySelector("#x" + 23).setAttribute('radius', '1');
	} 


}

function run(s) {
	clearAll();
	if ("#" + s == document.getElementById('abackground').getAttribute('src')) {
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
	var all = '<a-entity class="scene1"><a-sphere id="box1" color="red" onclick="run(1)" position="25 -5 20" radius="0.001" material="" geometry=""> </a-sphere></a-entity>';
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
	"0 -5 40",
	"10 -5 40"
	],
	"s3": [
	"-20 0 4",
	"40 -5 -8"
	],
	"s4": [
	"-7 -5 0",
	"10 -5 0"
	],
	"s5": [
	"-10 -5 5",
	"10 -5 -5"
	],
	"s6": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s7": [
	"10 -5 5",
	"-10 -5 -5"
	],
	"s8": [
	"10 -5 0;",
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
	"-40 -5 20",
	"10 -5 0"
	],
	"s12": [
	"40 -5 0",
	"-30 -5 0"
	],
	"s13": [
	"5 -5 20",
	"0 -5 -20"
	],
	"s14": [
	"20 -5 -3",
	"-20 -5 3"
	],
	"s15": [
	"-7 -5 30",
	"0 -5 -20"
	],
	"s16": [
	"4 -5 -30",
	"4 -5 30"
	],
	"s17": [
	"20 -5 0",
	"-30 -5 0"
	],
	"s18": [
	"20 -5 0",
	"-20 -5 0"
	],
	"s19": [
	"20 -5 0",
	"-20 -5 0"
	],
	"s20": [
	"25 -5 7",
	"-25 -5 -5"
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
	"-10 -5 -40",
	"40 -5 0"
	],
	"s24": [
	"0 -5 40",
	"0 -5 -40"
	],
	"s25": [
	"20 -5 40",
	"-20 -5 -40"
	],
	"s26": [
	"0 -5 -30",
	"0 -5 30"
	],
	"s27": [
	"-10 -5 -30",
	"10 -5 30"
	],
	"s28": [
	"0 -5 -20",
	"0 -5 20"
	],
	"s29": [
	"10 -5 0",
	"5 -5 -20"
	],
	//please save me
	"s30": [
	"30 -5 0",
	"-5 -5 -5"
	],
	"s31": [
	"5 -5 -1",
	"-6 -5 0"
	],
	"s32": [
	"2 -5 -30",
	"-7 -5 0"
	],
	"s33": [
	"30 -5 1",
	"-20 -5 0"
	],
	"s34": [
	"10 -5 5",
	"-10 -5 30"
	],
	"s35": [
	"-25 -5 15",
	"10 -5 5"
	],
	"s36": [
	"30 -5 0",
	"-20 -5 0"
	],
	"s37": [
	"-4 -5 -11",
	"-10 -5 6"
	],
	"s38": [
	"-15 -5 12",
	"15 -5 -12"
	],
	"s39": [
	"15 -5 -3",
	"-15 -5 4"
	],
	"s40": [
	"40 -5 4",
	"-15 -5 0"
	],
	"s41": [
	"20 -5 1",
	"-15 -5 -1"
	],
	"s42": [
	"15 -5 4",
	"-20 -5 -6"
	],
	"s43": [
	"-10 -5 0",
	"10 -5 -2"
	],
	"s44": [
	"-53 -1 30",
	"5 -5 0"
	],
	"s45": [
	"-17 -5 17",
	"-2 -5 -15"
	],
	"s46": [
	"1 -5 20",
	"-7 -5 -25"
	],
	"s47": [
	"-13 -5 26",
	"-20 -5 -15"
	],
	"s48": [
	"0 -5 -40",
	"-10 -5 -25"
	],
	"s49": [
	"-4 -5 -20",
	"-10 -5 25"
	],
	"s50": [
	"-15 -5 -4",
	"15 -5 4"
	],
	"s51": [
	"-20 -5 -5",
	"0 -5 20"
	],
	"s52": [
	"20 -5 0",
	"-20 -5 0"
	],
	"s53": [
	"-3 -5 20",
	"4 -5 -20"
	],
	"s54": [
	"25 -5 -10",
	"-25 -5 10"
	],
	"s55": [
	"20 -4 -4",
	"-20 -5 4"
	],
	"s56": [
	"-10 -5 0",
	"-13 -9 20"
	],
	"s57": [
	"0 -5 -20",
	"6 -5 4"
	],
	"s58": [
	"20 -5 -1",
	"-20 -5 1"
	],
	"s59": [
	"7 -5 -15",
	"-20 -5 0"
	],
	"s60": [
	"20 -5 0",
	"-15 -5 0"
	],
	"s61": [
	"20 -5 -3",
	"-20 -5 2"
	],
	"s62": [
	"20 -5 -5",
	"-20 -5 5"
	],
	"s63": [
	"20 -5 3",
	"-20 -5 -3"
	],
	"s64": [
	"20 -5 -3",
	"-20 -5 3"
	],
	"s65": [
	"-15 -3 0",
	"20 -5 0"
	],
	"s66": [
	"22 -5 20",
	"1 -10 -20"
	]
};