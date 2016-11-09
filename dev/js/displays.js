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

    loadImage(".myModal2","img/Display_MuroTecnico_Vitromex_2014_p.jpg");
    $("#myModal2 .image-1").css('content', 'url("img/Display_MuroTecnico_Vitromex_2014_1.jpg")'); //6
    $("#myModal2 .image-2").css('content', 'url("img/Display_MuroTecnico_Vitromex_2014_2.jpg")'); //
    $("#myModal2 .image-3").css('content', 'url("img/Display_MuroTecnico_Vitromex_2014_3.jpg")'); //
    $("#myModal2 .image-4").css('content', 'url("img/Display_MuroTecnico_Vitromex_2014_4.jpg")'); //
    $("#myModal2 .image-5").css('content', 'url("img/Display_MuroTecnico_Vitromex_2014_5.jpg")'); //

     loadImage(".myModal","img/Display_ExhibidorLibro_Arko_p.jpg");
    $("#myModal .image-1").css('content', 'url("img/Display_ExhibidorLibro_Arko_1.jpg")'); //6
    $("#myModal .image-2").css('content', 'url("img/Display_ExhibidorLibro_Arko_2.jpg")'); //

     loadImage(".myModal3","img/Display_ExhibidorLibro_Artemis_2014_p.jpg");
    $("#myModal3 .image-1").css('content', 'url("img/Display_ExhibidorLibro_Artemis_2014_1.jpg")'); //6
    $("#myModal3 .image-2").css('content', 'url("img/Display_ExhibidorLibro_Artemis_2014_2.jpg")'); //

     loadImage(".myModal4","img/Display_ExhibidorLibro_Vitromex_2014_p.jpg");
    $("#myModal4 .image-1").css('content', 'url("img/Display_ExhibidorLibro_Vitromex_2014_1.jpg")'); //6
    $("#myModal4 .image-2").css('content', 'url("img/Display_ExhibidorLibro_Vitromex_2014_2.jpg")'); //

    loadImage(".myModal6","img/Display_Cuneros_Vitromex_2014_p.jpg");
    $("#myModal6 .image-1").css('content', 'url("img/Display_Cuneros_Vitromex_2014_1.jpg")'); //6
    $("#myModal6 .image-2").css('content', 'url("img/Display_Cuneros_Vitromex_2014_2.jpg")'); //
    $("#myModal6 .image-3").css('content', 'url("img/Display_Cuneros_Vitromex_2014_3.jpg")'); //
    $("#myModal6 .image-4").css('content', 'url("img/Display_Cuneros_Vitromex_2014_4.jpg")'); //

    loadImage(".myModal5","img/Display_Cuneros_Gante_2014_p.jpg");
    $("#myModal5 .image-1").css('content', 'url("img/Display_Cuneros_Gante_2014_1.jpg")'); //6
    $("#myModal5 .image-2").css('content', 'url("img/Display_Cuneros_Gante_2014_2.jpg")'); //
  
    loadImage(".myModal8","img/Display_Exhibidor_Joyou_2012_p.jpg");
    $("#myModal8 .image-1").css('content', 'url("img/Display_Exhibidor_Joyou_2012_1.jpg")'); //6
    $("#myModal8 .image-2").css('content', 'url("img/Display_Exhibidor_Joyou_2012_2.jpg")'); //
    
    loadImage(".myModal9","img/Display_ExhibidorLibro_Gante_2012_p.jpg");
    $("#myModal9 .image-1").css('content', 'url("img/Display_ExhibidorLibro_Gante_2012_1.jpg")'); //6
    $("#myModal9 .image-2").css('content', 'url("img/Display_ExhibidorLibro_Gante_2012_2.jpg")'); //

    loadImage(".myModal10","img/Display_ExhibidoresSanitarios_Lamosa_2012_p.jpg");
    $("#myModal10 .image-1").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2012_1.jpg")'); //6
    $("#myModal10 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2012_2.jpg")'); //
    $("#myModal10 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2012_3.jpg")'); //
    $("#myModal10 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2012_4.jpg")'); //
   
    loadImage(".myModal11","img/Display_ExhibidoresSanitarios_Ambiance_2010_p.jpg");
    $("#myModal11 .image-1").css('content', 'url("img/Display_ExhibidoresSanitarios_Ambiance_2010_1.jpg")'); //6
    $("#myModal11 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Ambiance_2010_2.jpg")'); //
    $("#myModal11 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Ambiance_2010_3.jpg")'); //
    
    loadImage(".myModal12","img/Display_ExhibidoresSanitarios_Lamosa_2008_p.jpg");
    $("#myModal12 .image-1").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2008_1.jpg")'); //6
    $("#myModal12 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2008_2.jpg")'); //
    $("#myModal12 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2008_3.jpg")'); //
    
}