window.onload = function() {
	assets();
	spheres();
	clearAll();
	var place = Number(localStorage.getItem('place'));
	if (place == 0) place = 1;
	setscene(place);
	localStorage.setItem('place', 1);
	open();
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
	for (var i=1; i<=64; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=63; i++) {
		var value = i + 1001;
		document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
	document.querySelector("#x2").setAttribute('radius', '0.001');
	document.querySelector("#x4").setAttribute('radius', '0.001');
	document.querySelector("#x6").setAttribute('radius', '0.001');
	document.querySelector("#x5").setAttribute('radius', '0.001');
	document.querySelector("#x7").setAttribute('radius', '0.001');
	document.querySelector("#x9").setAttribute('radius', '0.001');
	document.querySelector("#x10").setAttribute('radius', '0.001');
	document.querySelector("#x19").setAttribute('radius', '0.001');
	document.querySelector("#x27").setAttribute('radius', '0.001');
	document.querySelector("#x20").setAttribute('radius', '0.001');
	document.querySelector("#x21").setAttribute('radius', '0.001');
	document.querySelector("#x28").setAttribute('radius', '0.001');
	document.querySelector("#x29").setAttribute('radius', '0.001');
	document.querySelector("#x37").setAttribute('radius', '0.001');
	document.querySelector("#xx37").setAttribute('radius', '0.001');
	document.querySelector("#x11").setAttribute('radius', '0.001');
	document.querySelector("#xx20").setAttribute('radius', '0.001');
	document.querySelector("#x39").setAttribute('radius', '0.001');
	document.querySelector("#x42").setAttribute('radius', '0.001');
	document.querySelector("#x64").setAttribute('radius', '0.001');
	document.querySelector("#x59").setAttribute('radius', '0.001');
	document.querySelector("#x12").setAttribute('radius', '0.001');
	document.querySelector("#x41").setAttribute('radius', '0.001');
	document.querySelector("#x40").setAttribute('radius', '0.001');
	document.querySelector("#x38").setAttribute('radius', '0.001');
	document.getElementById('audio').style.display = "none";
	document.getElementById('video').style.display = "none";
	document.getElementById('food').style.display = "none";
	document.getElementById('nav').style.display = "block";
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
	switch(scene) {
		case 2:
			document.querySelector("#x" + 2).setAttribute('radius', '1');
			break;

		case 4:
			document.querySelector("#x" + 4).setAttribute('radius', '1');
			document.getElementById('audio').style.display = "block";
			break;

		case 5:
			document.querySelector("#x" + 5).setAttribute('radius', '1');
			break;

		case 6:
			document.querySelector("#x" + 6).setAttribute('radius', '1');
			break;

		case 7:
			document.querySelector("#x" + 7).setAttribute('radius', '1');
			break;

		case 9:
			document.querySelector("#x" + 9).setAttribute('radius', '1');
			break;

		case 10:
			document.querySelector("#x" + 10).setAttribute('radius', '1');
			break;

		case 11:
			document.querySelector("#x" + 11).setAttribute('radius', '1');
			break;

		case 12:
			document.querySelector("#x" + 12).setAttribute('radius', '1');
			document.getElementById('food').style.display = "block";
			break;

		case 19:
			document.querySelector("#x" + 19).setAttribute('radius', '1');
			break;

		case 20:
			document.querySelector("#x" + 20).setAttribute('radius', '1');
			document.querySelector("#xx" + 20).setAttribute('radius', '1');
			break;

		case 21:
			document.querySelector("#x" + 21).setAttribute('radius', '1');
			break;

		case 27:
			document.querySelector("#x" + 27).setAttribute('radius', '1');
			break;

		case 28:
			document.querySelector("#x" + 28).setAttribute('radius', '1');
			break;

		case 29:
			document.querySelector("#x" + 29).setAttribute('radius', '1');
			break;

		case 37:
			document.querySelector("#x" + 37).setAttribute('radius', '1');
			document.querySelector("#xx" + 37).setAttribute('radius', '1');
			document.getElementById('video').style.display = "block";
			break;

		case 38:
			document.querySelector("#x" + 38).setAttribute('radius', '1');
			break;

		case 39:
			document.querySelector("#x" + 39).setAttribute('radius', '1');
			break;

		case 40:
			document.querySelector("#x" + 40).setAttribute('radius', '1');
			break;

		case 41:
			document.querySelector("#x" + 41).setAttribute('radius', '1');
			break;

		case 42:
			document.querySelector("#x" + 42).setAttribute('radius', '1');
			break;

		case 52:
			document.getElementById('audio').style.display = "block";
			document.getElementById('match').style.display = "block";
			break;

		case 59:
			document.querySelector("#x" + 59).setAttribute('radius', '1');
			break;

		case 64:
			document.querySelector("#x" + 64).setAttribute('radius', '1');
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
	for(var i=1; i<=9; i++) {
		allassets = allassets + '<img id="' + i + '" src="pictures/(' + i + ').jpg" rotation="0 -90 0">';
	}
	for(var i=1; i<=10; i++) {
		allassets = allassets + '<img id="' + (i+9) + '" src="pictures/1/(' + i + ').jpg" rotation="0 -90 0">';
	}
	for(var i=1; i<=22; i++) {
		allassets = allassets + '<img id="' + (i+19) + '" src="pictures/2/(' + i + ').jpg" rotation="0 -90 0">';
	}
	for(var i=1; i<=5; i++) {
		allassets = allassets + '<img id="' + (i+41) + '" src="pictures/3/(' + i + ').jpg" rotation="0 -90 0">';
	}
	for(var i=1; i<=18; i++) {
		allassets = allassets + '<img id="' + (i+46) + '" src="pictures/4/(' + i + ').jpg" rotation="0 -90 0">';
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
	console.log("this is scene " + (s))
}

function playvideo(video) {
  var x = document.getElementById("youtube" + video);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function video() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#37":
			playvideo(1);
			break;

	}
}

function audio() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#52":
			playaudio(1);
			break;

		case "#4":
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
