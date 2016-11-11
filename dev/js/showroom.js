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

    loadImage(".myModal2","img/Stands_Firenze-Cihac-2015-p.jpg");
    $("#myModal2 .image-1").css('content', 'url("img/Showroom_Showroom_Daltile_2014_1.jpg")'); //6
    $("#myModal2 .image-2").css('content', 'url("img/Showroom_Showroom_Daltile_2014_2.jpg")'); //
    $("#myModal2 .image-3").css('content', 'url("img/Showroom_Showroom_Daltile_2014_3.jpg")'); //
    $("#myModal2 .image-4").css('content', 'url("img/Showroom_Showroom_Daltile_2014_4.jpg")'); //
    $("#myModal2 .image-5").css('content', 'url("img/Showroom_Showroom_Daltile_2014_5.jpg")'); //

    loadImage(".myModal","img/Showroom_Corner_Urrea_2014_p.jpg");
    $("#myModal .image-1").css('content', 'url("img/Showroom_Corner_Urrea_2014_1.jpg")'); //6
    $("#myModal .image-2").css('content', 'url("img/Showroom_Corner_Urrea_2014_2.jpg")'); //
    $("#myModal .image-3").css('content', 'url("img/Showroom_Corner_Urrea_2014_3.jpg")'); //
 
    loadImage(".myModal3","img/Showroom_Tienda_PajaroCarpintero_2014_p.jpg");
    $("#myModal3 .image-1").css('content', 'url("img/Showroom_Tienda_PajaroCarpintero_2014_1.jpg")'); //6
    $("#myModal3 .image-2").css('content', 'url("img/Showroom_Tienda_PajaroCarpintero_2014_2.jpg")'); //
    $("#myModal3 .image-3").css('content', 'url("img/Showroom_Tienda_PajaroCarpintero_2014_3.jpg")'); //
    
    loadImage(".myModal4","img/Showroom_Exhibicion_PorcelanicosLamosa_2014_p.jpg");
    $("#myModal4 .image-1").css('content', 'url("img/Showroom_Exhibicion_PorcelanicosLamosa_2014_1.jpg")'); //6
    $("#myModal4 .image-2").css('content', 'url("img/Showroom_Exhibicion_PorcelanicosLamosa_2014_2.jpg")'); //
    $("#myModal4 .image-3").css('content', 'url("img/Showroom_Exhibicion_PorcelanicosLamosa_2014_3.jpg")'); //
    $("#myModal4 .image-4").css('content', 'url("img/Showroom_Exhibicion_PorcelanicosLamosa_2014_4.jpg")'); //

    loadImage(".myModal5","img/Showroom_Exhibicion_PorcelanicosPorcelanite_2014_p.jpg");
    $("#myModal5 .image-1").css('content', 'url("img/Showroom_Exhibicion_PorcelanicosPorcelanite_2014_1.jpg")'); //6
    $("#myModal5 .image-2").css('content', 'url("img/Showroom_Exhibicion_PorcelanicosPorcelanite_2014_2.jpg")'); //
    $("#myModal5 .image-3").css('content', 'url("img/Showroom_Exhibicion_PorcelanicosPorcelanite_2014_3.jpg")'); //

    loadImage(".myModal6","img/Showroom_Exhibicion_Dune_2013_p.jpg");
    $("#myModal6 .image-1").css('content', 'url("img/Showroom_Exhibicion_Dune_2013_1.jpg")'); //6
    $("#myModal6 .image-2").css('content', 'url("img/Showroom_Exhibicion_Dune_2013_2.jpg")'); //
    $("#myModal6 .image-3").css('content', 'url("img/Showroom_Exhibicion_Dune_2013_3.jpg")'); //
    $("#myModal6 .image-4").css('content', 'url("img/Showroom_Exhibicion_Dune_2013_4.jpg")'); //

    loadImage(".myModal7","img/Showroom_Showroom_Lamosa_2012_p.jpg");
    $("#myModal7 .image-1").css('content', 'url("img/Showroom_Showroom_Lamosa_2012_1.jpg")'); //6
    $("#myModal7 .image-2").css('content', 'url("img/Showroom_Showroom_Lamosa_2012_2.jpg")'); //
    $("#myModal7 .image-3").css('content', 'url("img/Showroom_Showroom_Lamosa_2012_3.jpg")'); //
    $("#myModal7 .image-4").css('content', 'url("img/Showroom_Showroom_Lamosa_2012_4.jpg")'); //
    $("#myModal7 .image-5").css('content', 'url("img/Showroom_Showroom_Lamosa_2012_5.jpg")'); //
    $("#myModal7 .image-6").css('content', 'url("img/Showroom_Showroom_Lamosa_2012_6.jpg")'); //

    loadImage(".myModal8","img/Showroom_Tienda_Powercat_2012_p.jpg");
    $("#myModal8 .image-1").css('content', 'url("img/Showroom_Tienda_Powercat_2012_1.jpg")'); //6
    $("#myModal8 .image-2").css('content', 'url("img/Showroom_Tienda_Powercat_2012_2.jpg")'); //
    $("#myModal8 .image-3").css('content', 'url("img/Showroom_Tienda_Powercat_2012_3.jpg")'); //
    $("#myModal8 .image-4").css('content', 'url("img/Showroom_Tienda_Powercat_2012_4.jpg")'); //
    
    loadImage(".myModal9","img/Showroom_Tienda_Gilsa_2012_p.jpg");
    $("#myModal9 .image-1").css('content', 'url("img/Showroom_Tienda_Gilsa_2012_1.jpg")'); //6
    $("#myModal9 .image-2").css('content', 'url("img/Showroom_Tienda_Gilsa_2012_2.jpg")'); //
    $("#myModal9 .image-3").css('content', 'url("img/Showroom_Tienda_Gilsa_2012_3.jpg")'); //
    $("#myModal9 .image-4").css('content', 'url("img/Showroom_Tienda_Gilsa_2012_4.jpg")'); //
    
    loadImage(".myModal10","img/Showroom_Showroom_Lamosa_2011_p.jpg");
    $("#myModal10 .image-1").css('content', 'url("img/Showroom_Showroom_Lamosa_2011_1.jpg")'); //6
    $("#myModal10 .image-2").css('content', 'url("img/Showroom_Showroom_Lamosa_2011_2.jpg")'); //
    $("#myModal10 .image-3").css('content', 'url("img/Showroom_Showroom_Lamosa_2011_3,jpg")'); //
    $("#myModal10 .image-4").css('content', 'url("img/Showroom_Showroom_Lamosa_2011_4.jpg")'); //
    
}