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
	document.querySelector("#xx26").setAttribute('radius', '0.001');
	document.querySelector("#xx23").setAttribute('radius', '0.001');
	document.querySelector("#xxx56").setAttribute('radius', '0.001');
	document.querySelector("#xxx66").setAttribute('radius', '0.001');
	document.querySelector("#x24").setAttribute('radius', '0.001');
	document.querySelector("#x29").setAttribute('radius', '0.001');
	document.querySelector("#xx34").setAttribute('radius', '0.001');
	document.getElementById('audio').style.display = "none";
	document.getElementById('video').style.display = "none";
	document.getElementById('color').style.display = "none";

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
			document.querySelector("#x" + 3).setAttribute('radius', '1');
			break;

		case 6:
			document.getElementById('audio').style.display = "block";
			break;

		case 11:
			document.querySelector("#box11").setAttribute('radius', '0.001');
			document.querySelector("#x" + 11).setAttribute('radius', '1');
			break;

		case 12:
			document.getElementById('audio').style.display = "block";
			document.querySelector("#box1012").setAttribute('radius', '0.001');
			document.querySelector("#x" + 12).setAttribute('radius', '1');
			document.querySelector("#xx" + 12).setAttribute('radius', '1');
			break;

		case 15:
			document.querySelector("#x" + 15).setAttribute('radius', '1');
			document.querySelector("#xx" + 15).setAttribute('radius', '1');
			break;

		case 16:
			document.querySelector("#x" + 16).setAttribute('radius', '1');
			break;

		case 17:
			document.querySelector("#x" + 17).setAttribute('radius', '1');
			document.querySelector("#xx" + 17).setAttribute('radius', '1');		
			break;

		case 20:
			document.querySelector("#box20").setAttribute('radius', '0.001');
			document.querySelector("#x" + 20).setAttribute('radius', '1');
			document.getElementById('video').style.display = "block";
			break;

		case 21:
			document.querySelector("#x" + 21).setAttribute('radius', '1');
			document.querySelector("#xx" + 21).setAttribute('radius', '1');
			document.querySelector("#box" + 1021).setAttribute('radius', '0.001');
			document.querySelector("#box" + 21).setAttribute('radius', '0.001');
			break;

		case 22:
			document.querySelector("#box" + 1022).setAttribute('radius', '0.001');
			document.querySelector("#box" + 22).setAttribute('radius', '0.001');
			document.querySelector("#x" + 22).setAttribute('radius', '1');
			document.querySelector("#xx" + 22).setAttribute('radius', '1');
			document.querySelector("#xxx" + 22).setAttribute('radius', '1');
			document.querySelector("#xxxx" + 22).setAttribute('radius', '1');
			break;

		case 23:
			document.querySelector("#box1023").setAttribute('radius', '0.001');
			document.querySelector("#x" + 23).setAttribute('radius', '1');
			document.querySelector("#xx" + 23).setAttribute('radius', '1');
			break;

		case 24:
			document.querySelector("#x" + 24).setAttribute('radius', '1');
			break;

		case 26:
			document.querySelector("#x" + 26).setAttribute('radius', '1');
			document.querySelector("#xx" + 26).setAttribute('radius', '1');
			break;

		case 29:
			document.querySelector("#x" + 29).setAttribute('radius', '1');
			break;

		case 30:
			document.querySelector("#x" + 30).setAttribute('radius', '1');
			document.querySelector("#box" + 1030).setAttribute('radius', '0.001');
			document.querySelector("#xx" + 30).setAttribute('radius', '1');
			break;

		case 31:
			document.querySelector("#box" + 31).setAttribute('radius', '0.001');
			break;

		case 32:
			document.querySelector("#box" + 1032).setAttribute('radius', '0.001');
			document.querySelector("#x" + 32).setAttribute('radius', '1');
			document.getElementById('audio').style.display = "block";
			break;

		case 34:
			document.querySelector("#x" + 34).setAttribute('radius', '1');
			document.querySelector("#xx" + 34).setAttribute('radius', '1');
			break;

		case 35:
			document.querySelector("#x" + 35).setAttribute('radius', '1');
			break;

		case 40:
			document.getElementById('audio').style.display = "block";
			break;

		case 41:
			document.querySelector("#x" + 41).setAttribute('radius', '1');
			document.querySelector("#xx" + 41).setAttribute('radius', '1');
			break;

		case 42:
			document.querySelector("#x" + 42).setAttribute('radius', '1');
			document.querySelector("#box42").setAttribute('radius', '0.001');	
			break;

		case 43:
			document.querySelector("#box43").setAttribute('radius', '0.001');
			document.querySelector("#box1043").setAttribute('radius', '0.001');
			document.querySelector("#x" + 43).setAttribute('radius', '1');
			break;

		case 44:
			document.querySelector("#box1044").setAttribute('radius', '0.001');
			document.querySelector("#x" + 44).setAttribute('radius', '1');
			break;

		case 48:
			document.querySelector("#box48").setAttribute('radius', '0.001');
			document.querySelector("#x" + 48).setAttribute('radius', '1');
			break;

		case 49:
			document.querySelector("#box1049").setAttribute('radius', '0.001');
			document.querySelector("#x" + 49).setAttribute('radius', '1');
			document.querySelector("#xx" + 49).setAttribute('radius', '1');	
			break;

		case 56:
			document.querySelector("#box56").setAttribute('radius', '0.001');
			document.querySelector("#x" + 56).setAttribute('radius', '1');
			document.querySelector("#xx" + 56).setAttribute('radius', '1');
			document.querySelector("#xxx" + 56).setAttribute('radius', '1');
			break;

		case 57:
			document.querySelector("#x" + 57).setAttribute('radius', '1');
			document.querySelector("#box1057").setAttribute('radius', '0.001');
			break;

		case 66:
			document.querySelector("#x" + 66).setAttribute('radius', '1');
			document.querySelector("#xx" + 66).setAttribute('radius', '1');
			document.querySelector("#xxx" + 66).setAttribute('radius', '1');
			document.querySelector("#box66").setAttribute('radius', '0.001');
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
		case "#20":
			playvideo(1);
			break;

	}
}


function audio() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#6":
			playaudio(1);
			break;

		case "#32":
			playaudio(2);
			break;

		case "#40":
			playaudio(3);
			break;

		case "#12":
			playaudio(4);
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
