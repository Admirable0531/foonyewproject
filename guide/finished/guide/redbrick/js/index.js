window.onload = function() {
	assets();
	spheres();
	clearAll();
	var place = Number(localStorage.getItem('place'));
	if (place == 0) place = 1;
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
	clearSpecial();
}

function clearSpecial() {
	document.querySelector("#x6").setAttribute('radius', '0.001');
	document.querySelector("#xx6").setAttribute('radius', '0.001');
	document.querySelector("#x7").setAttribute('radius', '0.001');
	document.querySelector("#x8").setAttribute('radius', '0.001');
	document.querySelector("#x12").setAttribute('radius', '0.001');
	document.querySelector("#x15").setAttribute('radius', '0.001');
	document.getElementById('audio').style.display = "none";
	document.getElementById('flappy').style.display = "none";
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
	switch(scene) {
		case 1:
			document.getElementById('audio').style.display = "block";
			break;

		case 2:
			document.getElementById('audio').style.display = "block";
			break;

		case 6:
			document.querySelector("#x" + 6).setAttribute('radius', '1');
			document.querySelector("#xx" + 6).setAttribute('radius', '1');
			document.querySelector("#box" +6).setAttribute('radius', '0.001');
			break;

		case 7:
			document.querySelector("#x" + 7).setAttribute('radius', '1');
			document.querySelector("#box" + 1007).setAttribute('radius', '0.001');
			break;

		case 8:
			document.querySelector("#x" + 8).setAttribute('radius', '1');
			break;

		case 10:
			document.getElementById("flappy").style.display = "block";
			document.getElementById('audio').style.display = "block";
			break;

		case 11:
			document.querySelector("#box" + 11).setAttribute('radius', '0.001');
			break;

		case 12:
			document.querySelector("#x" + 12).setAttribute('radius', '1');
			document.querySelector("#box" + 1012).setAttribute('radius', '0.001');
			break;

		case 15:
			document.querySelector("#x" + 15).setAttribute('radius', '1');
			document.querySelector("#box" + 15).setAttribute('radius', '0.001');
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
	for(var i=3; i<=15; i++) {
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
	console.log("this is scene " + (s))
}

function toggle() {
  var x = document.getElementById("youtube");
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

		case "#2":
			playaudio(2);
			break;

		case "#10":
			playaudio(3);
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