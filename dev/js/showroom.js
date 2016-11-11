/* Load Images to Modal */

$( document ).ready(function() {
    msieversion();
});

function loadImage(clase, imagen) {
    var $image = $(clase);
    var $downloadingImage = $("<img>");
    $downloadingImage.load(function(){
      $image.attr("src", $(this).attr("src"));  
    });
    $downloadingImage.attr("src", imagen);
}

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        loadImagesForIE();
    }
    else  // If another browser, return 0
    {
        loadModalImages();
    }

    return false;
}

function loadImagesForIE() {

    loadImage(".myModal2","img/Stands_Firenze-Cihac-2015-p.jpg");
    loadImage(".myModal","img/Showroom_Corner_Urrea_2014_p.jpg");
    loadImage(".myModal3","img/Showroom_Tienda_PajaroCarpintero_2014_p.jpg");
    loadImage(".myModal4","img/Showroom_Exhibicion_PorcelanicosLamosa_2014_p.jpg");
    loadImage(".myModal5","img/Showroom_Exhibicion_PorcelanicosPorcelanite_2014_p.jpg");
    loadImage(".myModal6","img/Showroom_Exhibicion_Dune_2013_p.jpg");
    loadImage(".myModal7","img/Showroom_Showroom_Lamosa_2012_p.jpg");
    loadImage(".myModal8","img/Showroom_Tienda_Powercat_2012_p.jpg");
    loadImage(".myModal9","img/Showroom_Tienda_Gilsa_2012_p.jpg");
    loadImage(".myModal10","img/Showroom_Showroom_Lamosa_2011_p.jpg");
    loadImage(".myModal11","img/Showroom_Tienda_LlanoTorre_2011_p.jpg");
    loadImage(".myModal12","img/Showroom_Exhibicion_Porcelanite_2011_p.jpg");
    loadImage(".myModal13","img/Showroom_Exhibicion_Arko_2010_p.jpg");
    loadImage(".myModal14","img/Showroom_Exhibicion_Ceramat_2010_p.jpg");
    loadImage(".myModal15","img/Showroom_Exhibicion_Firenze_2008_p.jpg");
    loadImage(".myModal16","img/Showroom_Tienda_Avon_2007_p.jpg");
    
    loadImage("#myModal2 .image-1","img/Showroom_Showroom_Daltile_2014_1.jpg"); //6
    loadImage("#myModal2 .image-2","img/Showroom_Showroom_Daltile_2014_2.jpg"); //
    loadImage("#myModal2 .image-3","img/Showroom_Showroom_Daltile_2014_3.jpg"); //
    loadImage("#myModal2 .image-4","img/Showroom_Showroom_Daltile_2014_4.jpg"); //
    loadImage("#myModal2 .image-5","img/Showroom_Showroom_Daltile_2014_5.jpg"); //

    loadImage("#myModal .image-1","img/Showroom_Corner_Urrea_2014_1.jpg"); //6
    loadImage("#myModal .image-2","img/Showroom_Corner_Urrea_2014_2.jpg"); //
    loadImage("#myModal .image-3","img/Showroom_Corner_Urrea_2014_3.jpg"); //
 
    loadImage("#myModal3 .image-1","img/Showroom_Tienda_PajaroCarpintero_2014_1.jpg"); //6
    loadImage("#myModal3 .image-2","img/Showroom_Tienda_PajaroCarpintero_2014_2.jpg"); //
    loadImage("#myModal3 .image-3","img/Showroom_Tienda_PajaroCarpintero_2014_3.jpg"); //
    
    loadImage("#myModal4 .image-1","img/Showroom_Exhibicion_PorcelanicosLamosa_2014_1.jpg"); //6
    loadImage("#myModal4 .image-2","img/Showroom_Exhibicion_PorcelanicosLamosa_2014_2.jpg"); //
    loadImage("#myModal4 .image-3","img/Showroom_Exhibicion_PorcelanicosLamosa_2014_3.jpg"); //
    loadImage("#myModal4 .image-4","img/Showroom_Exhibicion_PorcelanicosLamosa_2014_4.jpg"); //

    loadImage("#myModal5 .image-1","img/Showroom_Exhibicion_PorcelanicosPorcelanite_2014_1.jpg"); //6
    loadImage("#myModal5 .image-2","img/Showroom_Exhibicion_PorcelanicosPorcelanite_2014_2.jpg"); //
    loadImage("#myModal5 .image-3","img/Showroom_Exhibicion_PorcelanicosPorcelanite_2014_3.jpg"); //

    loadImage("#myModal6 .image-1","img/Showroom_Exhibicion_Dune_2013_1.jpg"); //6
    loadImage("#myModal6 .image-2","img/Showroom_Exhibicion_Dune_2013_2.jpg"); //
    loadImage("#myModal6 .image-3","img/Showroom_Exhibicion_Dune_2013_3.jpg"); //
    loadImage("#myModal6 .image-4","img/Showroom_Exhibicion_Dune_2013_4.jpg"); //

    loadImage("#myModal7 .image-1","img/Showroom_Showroom_Lamosa_2012_1.jpg"); //6
    loadImage("#myModal7 .image-2","img/Showroom_Showroom_Lamosa_2012_2.jpg"); //
    loadImage("#myModal7 .image-3","img/Showroom_Showroom_Lamosa_2012_3.jpg"); //
    loadImage("#myModal7 .image-4","img/Showroom_Showroom_Lamosa_2012_4.jpg"); //
    loadImage("#myModal7 .image-5","img/Showroom_Showroom_Lamosa_2012_5.jpg"); //
    loadImage("#myModal7 .image-6","img/Showroom_Showroom_Lamosa_2012_6.jpg"); //

    loadImage("#myModal8 .image-1","img/Showroom_Tienda_Powercat_2012_1.jpg"); //6
    loadImage("#myModal8 .image-2","img/Showroom_Tienda_Powercat_2012_2.jpg"); //
    loadImage("#myModal8 .image-3","img/Showroom_Tienda_Powercat_2012_3.jpg"); //
    loadImage("#myModal8 .image-4","img/Showroom_Tienda_Powercat_2012_4.jpg"); //
    
    loadImage("#myModal9 .image-1","img/Showroom_Tienda_Gilsa_2012_1.jpg"); //6
    loadImage("#myModal9 .image-2","img/Showroom_Tienda_Gilsa_2012_2.jpg"); //
    loadImage("#myModal9 .image-3","img/Showroom_Tienda_Gilsa_2012_3.jpg"); //
    loadImage("#myModal9 .image-4","img/Showroom_Tienda_Gilsa_2012_4.jpg"); //
    
    loadImage("#myModal10 .image-1","img/Showroom_Showroom_Lamosa_2011_1.jpg"); //6
    loadImage("#myModal10 .image-2","img/Showroom_Showroom_Lamosa_2011_2.jpg"); //
    loadImage("#myModal10 .image-3","img/Showroom_Showroom_Lamosa_2011_3,jpg"); //
    loadImage("#myModal10 .image-4","img/Showroom_Showroom_Lamosa_2011_4.jpg"); //

    loadImage("#myModal11 .image-1","img/Showroom_Tienda_LlanoTorre_2011_1.jpg"); //6
    loadImage("#myModal11 .image-2","img/Showroom_Tienda_LlanoTorre_2011_2.jpg"); //
    loadImage("#myModal11 .image-3","img/Showroom_Tienda_LlanoTorre_2011_3,jpg"); //
    
    loadImage("#myModal12 .image-1","img/Showroom_Exhibicion_Porcelanite_2011_1.jpg"); //6
    loadImage("#myModal12 .image-2","img/Showroom_Exhibicion_Porcelanite_2011_2.jpg"); //
    loadImage("#myModal12 .image-3","img/Showroom_Exhibicion_Porcelanite_2011_3,jpg"); //
    
    loadImage("#myModal13 .image-1","img/Showroom_Exhibicion_Arko_2010_1.jpg"); //6
    loadImage("#myModal13 .image-2","img/Showroom_Exhibicion_Arko_2010_2.jpg"); //
    loadImage("#myModal13 .image-3","img/Showroom_Exhibicion_Arko_2010_3,jpg"); //
    
    loadImage("#myModal14 .image-1","img/Showroom_Exhibicion_Ceramat_2010_1.jpg"); //6
    loadImage("#myModal14 .image-2","img/Showroom_Exhibicion_Ceramat_2010_2.jpg"); //
    loadImage("#myModal14 .image-3","img/Showroom_Exhibicion_Ceramat_2010_3,jpg"); //
    
    loadImage("#myModal15 .image-1","img/Showroom_Exhibicion_Firenze_2008_1.jpg"); //6
    loadImage("#myModal15 .image-2","img/Showroom_Exhibicion_Firenze_2008_2.jpg"); //
    loadImage("#myModal15 .image-3","img/Showroom_Exhibicion_Firenze_2008_3,jpg"); //
    loadImage("#myModal15 .image-4","img/Showroom_Exhibicion_Firenze_2008_4,jpg"); //
    
    loadImage("#myModal16 .image-1","img/Showroom_Tienda_Avon_2007_1.jpg"); //6
    loadImage("#myModal16 .image-2","img/Showroom_Tienda_Avon_2007_2.jpg"); //
    loadImage("#myModal16 .image-3","img/Showroom_Tienda_Avon_2007_3,jpg"); //
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

    loadImage(".myModal11","img/Showroom_Tienda_LlanoTorre_2011_p.jpg");
    $("#myModal11 .image-1").css('content', 'url("img/Showroom_Tienda_LlanoTorre_2011_1.jpg")'); //6
    $("#myModal11 .image-2").css('content', 'url("img/Showroom_Tienda_LlanoTorre_2011_2.jpg")'); //
    $("#myModal11 .image-3").css('content', 'url("img/Showroom_Tienda_LlanoTorre_2011_3,jpg")'); //
    
    loadImage(".myModal12","img/Showroom_Exhibicion_Porcelanite_2011_p.jpg");
    $("#myModal12 .image-1").css('content', 'url("img/Showroom_Exhibicion_Porcelanite_2011_1.jpg")'); //6
    $("#myModal12 .image-2").css('content', 'url("img/Showroom_Exhibicion_Porcelanite_2011_2.jpg")'); //
    $("#myModal12 .image-3").css('content', 'url("img/Showroom_Exhibicion_Porcelanite_2011_3,jpg")'); //
    
    loadImage(".myModal13","img/Showroom_Exhibicion_Arko_2010_p.jpg");
    $("#myModal13 .image-1").css('content', 'url("img/Showroom_Exhibicion_Arko_2010_1.jpg")'); //6
    $("#myModal13 .image-2").css('content', 'url("img/Showroom_Exhibicion_Arko_2010_2.jpg")'); //
    $("#myModal13 .image-3").css('content', 'url("img/Showroom_Exhibicion_Arko_2010_3,jpg")'); //
    
    loadImage(".myModal14","img/Showroom_Exhibicion_Ceramat_2010_p.jpg");
    $("#myModal14 .image-1").css('content', 'url("img/Showroom_Exhibicion_Ceramat_2010_1.jpg")'); //6
    $("#myModal14 .image-2").css('content', 'url("img/Showroom_Exhibicion_Ceramat_2010_2.jpg")'); //
    $("#myModal14 .image-3").css('content', 'url("img/Showroom_Exhibicion_Ceramat_2010_3,jpg")'); //
    
    loadImage(".myModal15","img/Showroom_Exhibicion_Firenze_2008_p.jpg");
    $("#myModal15 .image-1").css('content', 'url("img/Showroom_Exhibicion_Firenze_2008_1.jpg")'); //6
    $("#myModal15 .image-2").css('content', 'url("img/Showroom_Exhibicion_Firenze_2008_2.jpg")'); //
    $("#myModal15 .image-3").css('content', 'url("img/Showroom_Exhibicion_Firenze_2008_3,jpg")'); //
    $("#myModal15 .image-4").css('content', 'url("img/Showroom_Exhibicion_Firenze_2008_4,jpg")'); //
    
    loadImage(".myModal16","img/Showroom_Tienda_Avon_2007_p.jpg");
    $("#myModal16 .image-1").css('content', 'url("img/Showroom_Tienda_Avon_2007_1.jpg")'); //6
    $("#myModal16 .image-2").css('content', 'url("img/Showroom_Tienda_Avon_2007_2.jpg")'); //
    $("#myModal16 .image-3").css('content', 'url("img/Showroom_Tienda_Avon_2007_3,jpg")'); //
    
}