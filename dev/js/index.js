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

    loadImage("#carrousel2 .image-1","img/Home_Carrousel-1-r.jpg");
    loadImage("#carrousel2 .image-2","img/Home_Carrousel-2-r.jpg");
    loadImage("#carrousel2 .image-3","img/Home_Carrousel-3-r.jpg");
    loadImage("#carrousel2 .image-4","img/Home_Carrousel-4-r.jpg");

}