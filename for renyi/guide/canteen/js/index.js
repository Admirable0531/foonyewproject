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
	for (var i=1; i<=55; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=54; i++) {
		var value = i + 1001;
		document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
	document.querySelector("#x4").setAttribute('radius', '0.001');
	document.querySelector("#x6").setAttribute('radius', '0.001');
	document.querySelector("#x5").setAttribute('radius', '0.001');
	document.querySelector("#xx5").setAttribute('radius', '0.001');
	document.querySelector("#x18").setAttribute('radius', '0.001');
	document.querySelector("#x17").setAttribute('radius', '0.001');
	document.querySelector("#x32").setAttribute('radius', '0.001');
	document.querySelector("#xx17").setAttribute('radius', '0.001');
	document.querySelector("#x33").setAttribute('radius', '0.001');
	document.querySelector("#xx33").setAttribute('radius', '0.001');
	document.querySelector("#xx18").setAttribute('radius', '0.001');
	document.querySelector("#x45").setAttribute('radius', '0.001');
	document.querySelector("#x55").setAttribute('radius', '0.001');
	document.querySelector("#x44").setAttribute('radius', '0.001');

	document.getElementById('audio').style.display = "none";
	document.getElementById("video").style.display = "none";
	document.getElementById("piano").style.display = "none";
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
	switch(scene) {
		case 1:
			document.getElementById('video').style.display = "block";
			document.getElementById('audio').style.display = "block";
			break;

		case 4:
			document.querySelector("#x" + 4).setAttribute('radius', '1');
			break;

		case 5:
			document.querySelector("#x" + 5).setAttribute('radius', '1');
			document.querySelector("#xx" + 5).setAttribute('radius', '1');
			break;

		case 6:
			document.querySelector("#x" + 6).setAttribute('radius', '1');
			break;

		case 17:
			document.querySelector("#x" + 17).setAttribute('radius', '1');
			document.querySelector("#xx" + 17).setAttribute('radius', '1');
			document.getElementById('audio').style.display = "block";
			break;

		case 18:
			document.querySelector("#x" + 18).setAttribute('radius', '1');
			document.querySelector("#xx" + 18).setAttribute('radius', '1');
			break;

		case 32:
			document.querySelector("#box32").setAttribute('radius', '0.001');
			document.querySelector("#x" + 32).setAttribute('radius', '1');
			break;

		case 33:
			document.querySelector("#box1033").setAttribute('radius', '0.001');
			document.querySelector("#x" + 33).setAttribute('radius', '1');
			document.querySelector("#xx" + 33).setAttribute('radius', '1');
			break;

		case 45:
			document.querySelector("#box1045").setAttribute('radius', '0.001');
			document.querySelector("#x" + 45).setAttribute('radius', '1');
			break;

		case 55:
			document.querySelector("#box55").setAttribute('radius', '0.001');
			document.querySelector("#x" + 55).setAttribute('radius', '1');
			break;

		case 44:
			document.querySelector("#box44").setAttribute('radius', '0.001');
			document.querySelector("#x" + 44).setAttribute('radius', '1');
			break;
			
		case 49:
			document.getElementById('video').style.display = "block";
			document.getElementById('piano').style.display = "block";
			break;
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
	for(var i=1; i<=14; i++) {
		allassets = allassets + '<img id="' + (i+3) + '" src="pictures/1/(' + i + ').jpg" rotation="0 -90 0">';
	}
	for(var i=1; i<=15; i++) {
		allassets = allassets + '<img id="' + (i+17) + '" src="pictures/2/(' + i + ').jpg" rotation="0 -90 0">';
	}
	for(var i=1; i<=12; i++) {
		allassets = allassets + '<img id="' + (i+32) + '" src="pictures/3/(' + i + ').jpg" rotation="0 -90 0">';
	}
	for(var i=1; i<=11; i++) {
		allassets = allassets + '<img id="' + (i+44) + '" src="pictures/4/(' + i + ').jpg" rotation="0 -90 0">';
	}
	document.getElementById("assets").innerHTML = allassets;
}

function spheres() {
	var all = '<a-entity class="scene1"><a-sphere id="box1" color="red" onclick="run(1)" position="-10 -5 0" radius="0.001" material="" geometry=""> </a-sphere></a-entity>';
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

function video() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#1":
			playvideo(1);
			break;

		case "#49":
			playvideo(2);
			break;

	}
}

function playvideo(video) {
  var x = document.getElementById("youtube" + video);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function audio() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#1":
			playaudio(1);
			break;

		case "#17":
			playaudio(2);
			break;

	}
}

function playaudio(audio) {
    var audio = document.getElementById('audio' + audio);
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}