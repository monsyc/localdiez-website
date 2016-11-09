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