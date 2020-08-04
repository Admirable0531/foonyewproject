function setplace(p) {
	localStorage.setItem('place', p);
	console.log(localStorage.getItem('place'));
}
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
	for (var i=1; i<=32; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=32; i++) {
		var value = i + 1001;
		document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
	document.querySelector("#x1").setAttribute('radius', '0.001');
	document.querySelector("#xx1").setAttribute('radius', '0.001');
	document.querySelector("#x31").setAttribute('radius', '0.001');
	document.querySelector("#x33").setAttribute('radius', '0.001');
	document.getElementById('audio').style.display = "none";
	document.getElementById("video").style.display = "none";
	document.getElementById('ball').style.display = "none";
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
	switch(scene) {
		case 1:
			document.querySelector("#x" + 1).setAttribute('radius', '1');
			document.querySelector("#xx" + 1).setAttribute('radius', '1');
			break;

		case 3:
			document.getElementById('video').style.display = "block";
			break;

		case 6:
			document.getElementById('video').style.display = "block";
			break;

		case 9:
			document.getElementById('video').style.display = "block";
			break;

		case 15:
			document.getElementById('audio').style.display = "block";
			break;

		case 31:
			document.querySelector("#x" + scene).setAttribute('radius', '1');
			break;

		case 33:
			document.querySelector("#x" + 33).setAttribute('radius', '1');
			document.getElementById('ball').style.display = "block";
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

function runback(s) {
	clearAll();
	if ("#" + (s+1) == document.getElementById('abackground').getAttribute('src')) {
		setscene(s);
	}
	console.log("this is scene " + s);
}

function assets() {
	var allassets;
	for(var i=4; i<=30; i++) {
		allassets = allassets + '<img id="' + i + '" src="pictures/(' + i + ').JPG" rotation="0 -90 0">';
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

function toggle() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#32":
			playvideo(1);
			break;

		case "#6":
			playvideo(2);
			break;

		case "#3":
			playvideo(3);
			break;

		case "#9":
			playvideo(4);
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
		case "#15":
			playaudio(1);
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