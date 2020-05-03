var audio = document.getElementById("audio");
var isPlaying = false;

audio.onplaying = function () {
	isPlaying = true;
};

audio.onpause = function () {
	isPlaying = false;
};

function toggleAudio() {
	if (isPlaying) {
		audio.pause();
	} else {
		audio.play();
	}
}
