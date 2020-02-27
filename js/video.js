var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.getElementById("volume")
	volume.innerHTML = video.volume * 100 + "%";
	console.log(volume);
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= (video.playbackRate*.2);
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate  += (video.playbackRate*.25);
  	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if(video.currentTime >= 536){
		video.currentTime = 0;
		console.log("Current location is "+ video.currentTime);
		video.playbackRate = 1;
	}
	else{
	video.currentTime += 60;
	console.log("Current location is "+ video.currentTime);
	}
} 

function mute() { 
	let muteButton = document.querySelector("#mute");
	console.log(video.muted);
  	if (video.muted){
  		video.muted = false;
  		console.log("Unmuted");
  		muteButton.innerHTML = "Mute";
  	}
  	else{
  		video.muted = true;
      	console.log("Muted");
      	muteButton.innerHTML = "Unmute";
    }
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = slider.value;
}
       

function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color") 
}
