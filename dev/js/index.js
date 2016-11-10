/* Load Images to Modal */

$( document ).ready(function() {
    loadModalImages();
});

function loadImage(clase, imagen) {
    var $image = $(clase);
    var $downloadingImage = $("<img>");
    $downloadingImage.load(function(){
      $image.attr("src", $(this).attr("src"));  
    });
    $downloadingImage.attr("src", imagen);
}

function loadModalImages() {

    loadImage("#carrousel .image-1","img/Home_Carrousel-1.jpg");
    loadImage("#carrousel .image-2","img/Home_Carrousel-2.jpg");
    loadImage("#carrousel .image-3","img/Home_Carrousel-3.jpg");
    loadImage("#carrousel .image-4","img/Home_Carrousel-4.jpg");

    loadImage("#carrousel2 .image-1","img/Home_Carrousel-1-r.jpg");
    loadImage("#carrousel2 .image-2","img/Home_Carrousel-2-r.jpg");
    loadImage("#carrousel2 .image-3","img/Home_Carrousel-3-r.jpg");
    loadImage("#carrousel2 .image-4","img/Home_Carrousel-4-r.jpg");

    loadImage("#projects .image-1","img/Home_Porcelanite-Cihac-2016.jpg");
    loadImage("#projects .image-2","img/Home_Lamosa-Cihac-2016.jpg");
    loadImage("#projects .image-3","img/Home_Firenze-Cihac-2016.jpg");
    loadImage("#projects .image-4","img/Home_Gante-Cihac-2016.jpg");

}

// ======================================================================================================= //
// VIDEO
// ======================================================================================================= //


// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'ZELOoPGt6c4',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
            'onError': onPlayerError
        }
    });
}

// he API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.setVolume(1);
    event.target.playVideo();
    event.target.setPlaybackQuality('hd720');
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) 
    console.log("Player State Changed: " + event.data);
    if (event.data == YT.PlayerState.BUFFERING) {
        event.target.setPlaybackQuality('hd720');
    }
}

function stopVideo() {
    player.stopVideo();
}

function onPlayerPlaybackQualityChange(event) {
    console.log("onPlayerPlaybackQualityChange: " + event.data);
}

function onPlayerError(event) {
    console.log("onPlayerError: " + event.data);
}