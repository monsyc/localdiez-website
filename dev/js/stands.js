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
    loadImage(".myModal21","img/Stands_Porcelanite-Cihac-2016-P.jpg");
    loadImage(".myModal22","img/Stands_Lamosa-Cihac-2016-p.jpg");
    loadImage(".myModal23", "img/Stands_Firenze-Cihac-2016-p.jpg");
    loadImage(".myModal24","img/Stands_Gante-Cihac-2016-p.jpg");
    loadImage(".myModal25","img/Stands_PorceLamosa-Coverings-2016-p.jpg");
    loadImage(".myModal26","img/Stands_Verve-Coverings-2016-p.jpg");
    loadImage(".myModal27","img/Stands_FibraMacquarie_p.jpg");    
    loadImage(".myModal","img/Stands_Porcelanite-Cihac-2015-p.jpg");
    loadImage(".myModal28","img/Stands_PorcelaniteCihacEstudio2015_p.jpg");
    loadImage(".myModal3","img/Stands_Lamosa-Cihac-2015-p.jpg");
    loadImage(".myModal5","img/Stands_Firenze-Cihac-2015-p.jpg");
    loadImage(".myModal4","img/Stands_Gante-Cihac-2015-p.jpg");
    loadImage(".myModal6","img/Stands_PorceLamosa-Coverings-2015-p.jpg");
    loadImage(".myModal7","img/Stands_Verve-Coverings-2015-p.jpg");
    loadImage(".myModal2","img/Stands_Firenze_Arquitectos_2015_p.jpg");
    loadImage(".myModal8","img/Stands_Porcelanite-Cihac-2014-p.jpg");
    loadImage(".myModal32","img/Stands_PorcelaniteCihacEstudio2014_p.jpg");
    loadImage(".myModal9","img/Stands_Lamosa_Cihac_2014_p.jpg");
    loadImage(".myModal31","img/Stands_LamosaCihacEstudio2014_p.jpg");
    loadImage(".myModal10","img/Stands_Firenze_Cihac_2014_p.jpg");
    loadImage(".myModal29","img/Stands_GanteCihac2014_p.jpg");
    loadImage(".myModal30","img/Stands_GanteCihacEstudio2014_p.jpg");
    loadImage(".myModal11","img/Stands_PorceLamosa-Coverings-2014_p.jpg");
    loadImage(".myModal14","img/Stands_Lamosa-Cihac-2013-p.jpg");
    loadImage(".myModal13","img/Stands_Firenze_Cihac_2013_p.jpg");
    loadImage(".myModal15","img/Stands_PorceLamosa_Coverings_2013_p.jpg");
    loadImage(".myModal33","img/Stands_VerveConverings2013_p.jpg");
    loadImage(".myModal34","img/Stands_DeAcero_p.jpg");
    loadImage(".myModal12","img/Stands_Hormann_2013_p.jpg");
    loadImage(".myModal16","img/Stands_Porcelanite_Cihac_2012_p.jpg");
    loadImage(".myModal17","img/Stands_PorceLamosa-Coverings-2012-p.jpg");
    loadImage(".myModal18","img/Stands_Porcelanite-Cihac-2011-p.jpg");
    loadImage(".myModal19","img/Stands_Lamosa_Cihac_2011_p.jpg");
    loadImage(".myModal20","img/Stands_Firenze_Cihac_2011_p.jpg");
    loadImage(".myModal35","img/Stands_LamosaCoverings2010_p.jpg");


    loadImage("#myModal21 .image-1","img/Stands_Porcelanite-Cihac-2016-1.jpg"); //6
    loadImage("#myModal21 .image-2","img/Stands_Porcelanite-Cihac-2016-2.jpg"); //
    loadImage("#myModal21 .image-3","img/Stands_Porcelanite-Cihac-2016-3.jpg"); //
    loadImage("#myModal21 .image-4","img/Stands_Porcelanite-Cihac-2016-4.jpg"); //
    loadImage("#myModal21 .image-5","img/Stands_Porcelanite-Cihac-2016-5.jpg"); //
    loadImage("#myModal21 .image-6","img/Stands_Porcelanite-Cihac-2016-6.jpg"); //


    loadImage("#myModal22 .image-1","img/Stands_Lamosa-Cihac-2016-1.jpg"); // 6
    loadImage("#myModal22 .image-2","img/Stands_Lamosa-Cihac-2016-2.jpg");
    loadImage("#myModal22 .image-3","img/Stands_Lamosa-Cihac-2016-3.jpg");
    loadImage("#myModal22 .image-4","img/Stands_Lamosa-Cihac-2016-4.jpg");
    loadImage("#myModal22 .image-5","img/Stands_Lamosa-Cihac-2016-5.jpg");
    loadImage("#myModal22 .image-6","img/Stands_Lamosa-Cihac-2016-6.jpg");


    loadImage("#myModal23 .image-1","img/Stands_Firenze-Cihac-2016-1.jpg"); // 6
    loadImage("#myModal23 .image-2","img/Stands_Firenze-Cihac-2016-2.jpg");
    loadImage("#myModal23 .image-3","img/Stands_Firenze-Cihac-2016-3.jpg");
    loadImage("#myModal23 .image-4","img/Stands_Firenze-Cihac-2016-4.jpg");
    loadImage("#myModal23 .image-5","img/Stands_Firenze-Cihac-2016-5.jpg");
    loadImage("#myModal23 .image-6","img/Stands_Firenze-Cihac-2016-7.jpg");
    loadImage("#myModal23 .image-7","img/Stands_Firenze-Cihac-2016-8.jpg");


    loadImage("#myModal24 .image-1","img/Stands_Gante-Cihac-2016-1.jpg");  // 5
    loadImage("#myModal24 .image-2","img/Stands_Gante-Cihac-2016-2.jpg");
    loadImage("#myModal24 .image-3","img/Stands_Gante-Cihac-2016-3.jpg");
    loadImage("#myModal24 .image-4","img/Stands_Gante-Cihac-2016-4.jpg");
    loadImage("#myModal24 .image-5","img/Stands_Gante-Cihac-2016-5.jpg");


    loadImage("#myModal25 .image-1","img/Stands_PorceLamosa-Coverings-2016-1.jpg"); // 6
    loadImage("#myModal25 .image-2","img/Stands_PorceLamosa-Coverings-2016-2.jpg");
    loadImage("#myModal25 .image-3","img/Stands_PorceLamosa-Coverings-2016-3.jpg");
    loadImage("#myModal25 .image-4","img/Stands_PorceLamosa-Coverings-2016-4.jpg");
    loadImage("#myModal25 .image-5","img/Stands_PorceLamosa-Coverings-2016-5.jpg");
    loadImage("#myModal25 .image-6","img/Stands_PorceLamosa-Coverings-2016-6.jpg");


    loadImage("#myModal26 .image-1","img/Stands_Verve-Coverings-2016-1.jpg"); // 6
    loadImage("#myModal26 .image-2","img/Stands_Verve-Coverings-2016-2.jpg");
    loadImage("#myModal26 .image-3","img/Stands_Verve-Coverings-2016-3.jpg");
    loadImage("#myModal26 .image-4","img/Stands_Verve-Coverings-2016-4.jpg");
    loadImage("#myModal26 .image-5","img/Stands_Verve-Coverings-2016-5.jpg");
    loadImage("#myModal26 .image-6","img/Stands_Verve-Coverings-2016-6.jpg");

    loadImage("#myModal27 .image-1","img/Stands_FibraMacquarie_1.jpg"); // 6

    loadImage("#myModal .image-1","img/Stands_Porcelanite-Cihac-2015-1.jpg"); // 7
    loadImage("#myModal .image-2","img/Stands_Porcelanite-Cihac-2015-2.jpg");
    loadImage("#myModal .image-3","img/Stands_Porcelanite-Cihac-2015-3.jpg");
    loadImage("#myModal .image-4","img/Stands_Porcelanite-Cihac-2015-4.jpg");
    loadImage("#myModal .image-5","img/Stands_Porcelanite-Cihac-2015-5.jpg");
    loadImage("#myModal .image-6","img/Stands_Porcelanite-Cihac-2015-6.jpg");
    loadImage("#myModal .image-7","img/Stands_Porcelanite-Cihac-2015-7.jpg");

    loadImage("#myModal28 .image-1","img/Stands_PorcelaniteCihacEstudio2015_1.jpg"); // 7
    loadImage("#myModal28 .image-2","img/Stands_PorcelaniteCihacEstudio2015_2.jpg");
    loadImage("#myModal28 .image-3","img/Stands_PorcelaniteCihacEstudio2015_3.jpg");
    loadImage("#myModal28 .image-4","img/Stands_PorcelaniteCihacEstudio2015_4.jpg");

    loadImage("#myModal3 .image-1","img/Stands_Lamosa-Cihac-2015-1.jpg"); // 6
    loadImage("#myModal3 .image-2","img/Stands_Lamosa-Cihac-2015-2.jpg");
    loadImage("#myModal3 .image-3","img/Stands_Lamosa-Cihac-2015-3.jpg");
    loadImage("#myModal3 .image-4","img/Stands_Lamosa-Cihac-2015-4.jpg");
    loadImage("#myModal3 .image-5","img/Stands_Lamosa-Cihac-2015-5.jpg");
    loadImage("#myModal3 .image-6","img/Stands_Lamosa-Cihac-2015-6.jpg");


    loadImage("#myModal5 .image-1","img/Stands_Firenze-Cihac-2015-2.jpg"); // 7
    loadImage("#myModal5 .image-2","img/Stands_Firenze-Cihac-2015-3.jpg");
    loadImage("#myModal5 .image-3","img/Stands_Firenze-Cihac-2015-1.jpg");
    loadImage("#myModal5 .image-4","img/Stands_Firenze-Cihac-2015-4.jpg");
    loadImage("#myModal5 .image-5","img/Stands_Firenze-Cihac-2015-5.jpg");
    loadImage("#myModal5 .image-6","img/Stands_Firenze-Cihac-2015-6.jpg");
    loadImage("#myModal5 .image-7","img/Stands_Firenze-Cihac-2015-7.jpg");


    loadImage("#myModal4 .image-1","img/Stands_Gante-Cihac-2015-1.jpg"); // 4
    loadImage("#myModal4 .image-2","img/Stands_Gante-Cihac-2015-2.jpg");
    loadImage("#myModal4 .image-3","img/Stands_Gante-Cihac-2015-3.jpg");
    loadImage("#myModal4 .image-4","img/Stands_Gante-Cihac-2015-4.jpg");


    loadImage("#myModal6 .image-1","img/Stands_PorceLamosa-Coverings-2015-1.jpg"); // 9
    loadImage("#myModal6 .image-2","img/Stands_PorceLamosa-Coverings-2015-2.jpg");
    loadImage("#myModal6 .image-3","img/Stands_PorceLamosa-Coverings-2015-3.jpg");
    loadImage("#myModal6 .image-4","img/Stands_PorceLamosa-Coverings-2015-4.jpg");
    loadImage("#myModal6 .image-5","img/Stands_PorceLamosa-Coverings-2015-5.jpg");
    loadImage("#myModal6 .image-6","img/Stands_PorceLamosa-Coverings-2015-6.jpg");
    loadImage("#myModal6 .image-7","img/Stands_PorceLamosa-Coverings-2015-7.jpg");
    loadImage("#myModal6 .image-8","img/Stands_PorceLamosa-Coverings-2015-8.jpg");
    loadImage("#myModal6 .image-9","img/Stands_PorceLamosa-Coverings-2015-9.jpg");


    loadImage("#myModal7 .image-1","img/Stands_Verve-Coverings-2015-1.jpg"); // 7
    loadImage("#myModal7 .image-2","img/Stands_Verve-Coverings-2015-2.jpg");
    loadImage("#myModal7 .image-3","img/Stands_Verve-Coverings-2015-3.jpg");
    loadImage("#myModal7 .image-4","img/Stands_Verve-Coverings-2015-4.jpg");
    loadImage("#myModal7 .image-5","img/Stands_Verve-Coverings-2015-5.jpg");
    loadImage("#myModal7 .image-6","img/Stands_Verve-Coverings-2015-6.jpg");
    loadImage("#myModal7 .image-7","img/Stands_Verve-Coverings-2015-7.jpg");


    loadImage("#myModal2 .image-1","img/Stands_Firenze_Arquitectos_2015_1.jpg");  // 6  
    loadImage("#myModal2 .image-2","img/Stands_Firenze_Arquitectos_2015_2.jpg");
    loadImage("#myModal2 .image-3","img/Stands_Firenze_Arquitectos_2015_3.jpg");
    loadImage("#myModal2 .image-4","img/Stands_Firenze_Arquitectos_2015_4.jpg");
    loadImage("#myModal2 .image-5","img/Stands_Firenze_Arquitectos_2015_5.jpg");
    loadImage("#myModal2 .image-6","img/Stands_Firenze_Arquitectos_2015_6.jpg");


    loadImage("#myModal8 .image-1","img/Stands_Porcelanite-Cihac-2014-1.jpg"); // 5
    loadImage("#myModal8 .image-2","img/Stands_Porcelanite-Cihac-2014-2.jpg");
    loadImage("#myModal8 .image-3","img/Stands_Porcelanite-Cihac-2014-3.jpg");
    loadImage("#myModal8 .image-4","img/Stands_Porcelanite-Cihac-2014-4.jpg");
    loadImage("#myModal8 .image-5","img/Stands_Porcelanite-Cihac-2014-5.jpg");

    loadImage("#myModal32 .image-1","img/Stands_PorcelaniteCihacEstudio2014_1.jpg"); // 5
    loadImage("#myModal32 .image-2","img/Stands_PorcelaniteCihacEstudio2014_2.jpg");

    loadImage("#myModal9 .image-1","img/Stands_Lamosa_Cihac_2014_1.jpg"); // 7
    loadImage("#myModal9 .image-2","img/Stands_Lamosa_Cihac_2014_2.jpg");
    loadImage("#myModal9 .image-3","img/Stands_Lamosa_Cihac_2014_3.jpg");
    loadImage("#myModal9 .image-4","img/Stands_Lamosa_Cihac_2014_4.jpg");
    loadImage("#myModal9 .image-5","img/Stands_Lamosa_Cihac_2014_5.jpg");
    loadImage("#myModal9 .image-6","img/Stands_Lamosa_Cihac_2014_6.jpg");
    loadImage("#myModal9 .image-7","img/Stands_Lamosa_Cihac_2014_7.jpg");

    loadImage("#myModal31 .image-1","img/Stands_LamosaCihacEstudio2014_1.jpg"); // 7
    loadImage("#myModal31 .image-2","img/Stands_LamosaCihacEstudio2014_2.jpg");
    loadImage("#myModal31 .image-3","img/Stands_LamosaCihacEstudio2014_3.jpg");
    loadImage("#myModal31 .image-4","img/Stands_LamosaCihacEstudio2014_4.jpg");

    loadImage("#myModal10 .image-1","img/Stands_Firenze_Cihac_2014_1.jpg"); // 8
    loadImage("#myModal10 .image-2","img/Stands_Firenze_Cihac_2014_2.jpg");
    loadImage("#myModal10 .image-3","img/Stands_Firenze_Cihac_2014_3.jpg");
    loadImage("#myModal10 .image-4","img/Stands_Firenze_Cihac_2014_4.jpg");
    loadImage("#myModal10 .image-5","img/Stands_Firenze_Cihac_2014_5.jpg");
    loadImage("#myModal10 .image-6","img/Stands_Firenze_Cihac_2014_6.jpg");
    loadImage("#myModal10 .image-7","img/Stands_Firenze_Cihac_2014_7.jpg");
    loadImage("#myModal10 .image-8","img/Stands_Firenze_Cihac_2014_8.jpg");

    loadImage("#myModal29 .image-1","img/Stands_GanteCihac2014_1.jpg"); // 8
    loadImage("#myModal29 .image-2","img/Stands_GanteCihac2014_2.jpg");

    loadImage("#myModal30 .image-1","img/Stands_GanteCihacEstudio2014_1.jpg"); // 8
    loadImage("#myModal30 .image-2","img/Stands_GanteCihacEstudio2014_1.jpg");
    loadImage("#myModal30 .image-3","img/Stands_GanteCihacEstudio2014_1.jpg");

    loadImage("#myModal11 .image-1","img/Stands_PorceLamosa-Coverings-2014_1.jpg"); // 8
    loadImage("#myModal11 .image-2","img/Stands_PorceLamosa-Coverings-2014_2.jpg");
    loadImage("#myModal11 .image-3","img/Stands_PorceLamosa-Coverings-2014_3.jpg");
    loadImage("#myModal11 .image-4","img/Stands_PorceLamosa-Coverings-2014_4.jpg");
    loadImage("#myModal11 .image-5","img/Stands_PorceLamosa-Coverings-2014_5.jpg");
    loadImage("#myModal11 .image-6","img/Stands_PorceLamosa-Coverings-2014_6.jpg");
    loadImage("#myModal11 .image-7","img/Stands_PorceLamosa-Coverings-2014_7.jpg");
    loadImage("#myModal11 .image-8","img/Stands_PorceLamosa-Coverings-2014_8.jpg");


    loadImage("#myModal14 .image-1","img/Stands_Lamosa-Cihac-2013-1.jpg"); // 5
    loadImage("#myModal14 .image-2","img/Stands_Lamosa-Cihac-2013-2.jpg");
    loadImage("#myModal14 .image-3","img/Stands_Lamosa-Cihac-2013-3.jpg");
    loadImage("#myModal14 .image-4","img/Stands_Lamosa-Cihac-2013-4.jpg");
    loadImage("#myModal14 .image-5","img/Stands_Lamosa-Cihac-2013-5.jpg");


    loadImage("#myModal13 .image-1","img/Stands_Firenze_Cihac_2013_1.jpg"); // 4
    loadImage("#myModal13 .image-2","img/Stands_Firenze_Cihac_2013_2.jpg");
    loadImage("#myModal13 .image-3","img/Stands_Firenze_Cihac_2013_3.jpg");
    loadImage("#myModal13 .image-4","img/Stands_Firenze_Cihac_2013_4.jpg");


    loadImage("#myModal15 .image-1","img/Stands_PorceLamosa_Coverings_2013_1.jpg"); // 9
    loadImage("#myModal15 .image-2","img/Stands_PorceLamosa_Coverings_2013_2.jpg");
    loadImage("#myModal15 .image-3","img/Stands_PorceLamosa_Coverings_2013_3.jpg");
    loadImage("#myModal15 .image-4","img/Stands_PorceLamosa_Coverings_2013_4.jpg");
    loadImage("#myModal15 .image-5","img/Stands_PorceLamosa_Coverings_2013_5.jpg");
    loadImage("#myModal15 .image-6","img/Stands_PorceLamosa_Coverings_2013_6.jpg");
    loadImage("#myModal15 .image-7","img/Stands_PorceLamosa_Coverings_2013_7.jpg");
    loadImage("#myModal15 .image-8","img/Stands_PorceLamosa_Coverings_2013_8.jpg");
    loadImage("#myModal15 .image-9","img/Stands_PorceLamosa_Coverings_2013_9.jpg");

    loadImage("#myModal33 .image-1","img/Stands_VerveConverings2013_1.jpg"); // 9
    loadImage("#myModal33 .image-2","img/Stands_VerveConverings2013_2.jpg");
    loadImage("#myModal33 .image-3","img/Stands_VerveConverings2013_3.jpg");
    loadImage("#myModal33 .image-4","img/Stands_VerveConverings2013_4.jpg");

    loadImage("#myModal34 .image-1","img/Stands_DeAcero_1.jpg"); // 9
    loadImage("#myModal34 .image-2","img/Stands_DeAcero_2.jpg");

    loadImage("#myModal12 .image-1","img/Stands_Hormann_2013_1.jpg"); // 3
    loadImage("#myModal12 .image-2","img/Stands_Hormann_2013_2.jpg");
    loadImage("#myModal12 .image-3","img/Stands_Hormann_2013_3.jpg");

    loadImage("#myModal16 .image-1","img/Stands_Porcelanite_Cihac_2012_1.jpg"); // 7
    loadImage("#myModal16 .image-2","img/Stands_Porcelanite_Cihac_2012_2.jpg");
    loadImage("#myModal16 .image-3","img/Stands_Porcelanite_Cihac_2012_3.jpg");
    loadImage("#myModal16 .image-4","img/Stands_Porcelanite_Cihac_2012_4.jpg");
    loadImage("#myModal16 .image-5","img/Stands_Porcelanite_Cihac_2012_5.jpg");
    loadImage("#myModal16 .image-6","img/Stands_Porcelanite_Cihac_2012_6.jpg");


    loadImage("#myModal17 .image-1","img/Stands_PorceLamosa-Coverings-2012-1.jpg"); // 6
    loadImage("#myModal17 .image-2","img/Stands_PorceLamosa-Coverings-2012-2.jpg");
    loadImage("#myModal17 .image-3","img/Stands_PorceLamosa-Coverings-2012-3.jpg");
    loadImage("#myModal17 .image-4","img/Stands_PorceLamosa-Coverings-2012-4.jpg");
    loadImage("#myModal17 .image-5","img/Stands_PorceLamosa-Coverings-2012-5.jpg");
    loadImage("#myModal17 .image-6","img/Stands_PorceLamosa-Coverings-2012-6.jpg");

    loadImage("#myModal18 .image-1","img/Stands_Porcelanite-Cihac-2011-1.jpg"); // 3
    loadImage("#myModal18 .image-2","img/Stands_Porcelanite-Cihac-2011-2.jpg");
    loadImage("#myModal18 .image-3","img/Stands_Porcelanite-Cihac-2011-3.jpg");


    loadImage("#myModal19 .image-1","img/Stands_Lamosa_Cihac_2011_1.jpg"); // 4
    loadImage("#myModal19 .image-2","img/Stands_Lamosa_Cihac_2011_2.jpg");
    loadImage("#myModal19 .image-3","img/Stands_Lamosa_Cihac_2011_3.jpg");
    loadImage("#myModal19 .image-4","img/Stands_Lamosa_Cihac_2011_4.jpg");


    loadImage("#myModal20 .image-1","img/Stands_Firenze_Cihac_2011_1.jpg"); // 5
    loadImage("#myModal20 .image-2","img/Stands_Firenze_Cihac_2011_2.jpg");
    loadImage("#myModal20 .image-3","img/Stands_Firenze_Cihac_2011_3.jpg");
    loadImage("#myModal20 .image-4","img/Stands_Firenze_Cihac_2011_4.jpg");
    loadImage("#myModal20 .image-5","img/Stands_Firenze_Cihac_2011_5.jpg");

    loadImage("#myModal35 .image-1","img/Stands_LamosaCoverings2010_1.jpg"); // 5
    loadImage("#myModal35 .image-2","img/Stands_LamosaCoverings2010_2.jpg");
    loadImage("#myModal35 .image-3","img/Stands_LamosaCoverings2010_3.jpg");
    loadImage("#myModal35 .image-4","img/Stands_LamosaCoverings2010_4.jpg");
}

function loadModalImages() {

    loadImage(".myModal21","img/Stands_Porcelanite-Cihac-2016-P.jpg");
    $("#myModal21 .image-1").css('content', 'url("img/Stands_Porcelanite-Cihac-2016-1.jpg")'); //6
    $("#myModal21 .image-2").css('content', 'url("img/Stands_Porcelanite-Cihac-2016-2.jpg")'); //
    $("#myModal21 .image-3").css('content', 'url("img/Stands_Porcelanite-Cihac-2016-3.jpg")'); //
    $("#myModal21 .image-4").css('content', 'url("img/Stands_Porcelanite-Cihac-2016-4.jpg")'); //
    $("#myModal21 .image-5").css('content', 'url("img/Stands_Porcelanite-Cihac-2016-5.jpg")'); //
    $("#myModal21 .image-6").css('content', 'url("img/Stands_Porcelanite-Cihac-2016-6.jpg")'); //


    loadImage(".myModal22","img/Stands_Lamosa-Cihac-2016-p.jpg");
    $("#myModal22 .image-1").css('content', 'url("img/Stands_Lamosa-Cihac-2016-1.jpg")'); // 6
    $("#myModal22 .image-2").css('content', 'url("img/Stands_Lamosa-Cihac-2016-2.jpg")');
    $("#myModal22 .image-3").css('content', 'url("img/Stands_Lamosa-Cihac-2016-3.jpg")');
    $("#myModal22 .image-4").css('content', 'url("img/Stands_Lamosa-Cihac-2016-4.jpg")');
    $("#myModal22 .image-5").css('content', 'url("img/Stands_Lamosa-Cihac-2016-5.jpg")');
    $("#myModal22 .image-6").css('content', 'url("img/Stands_Lamosa-Cihac-2016-6.jpg")');


    loadImage(".myModal23", "img/Stands_Firenze-Cihac-2016-p.jpg");
    $("#myModal23 .image-1").css('content', 'url("img/Stands_Firenze-Cihac-2016-1.jpg")'); // 6
    $("#myModal23 .image-2").css('content', 'url("img/Stands_Firenze-Cihac-2016-2.jpg")');
    $("#myModal23 .image-3").css('content', 'url("img/Stands_Firenze-Cihac-2016-3.jpg")');
    $("#myModal23 .image-4").css('content', 'url("img/Stands_Firenze-Cihac-2016-4.jpg")');
    $("#myModal23 .image-5").css('content', 'url("img/Stands_Firenze-Cihac-2016-5.jpg")');
    $("#myModal23 .image-6").css('content', 'url("img/Stands_Firenze-Cihac-2016-7.jpg")');
    $("#myModal23 .image-7").css('content', 'url("img/Stands_Firenze-Cihac-2016-8.jpg")');



    loadImage(".myModal24","img/Stands_Gante-Cihac-2016-p.jpg");
    $("#myModal24 .image-1").css('content', 'url("img/Stands_Gante-Cihac-2016-1.jpg")');  // 5
    $("#myModal24 .image-2").css('content', 'url("img/Stands_Gante-Cihac-2016-2.jpg")');
    $("#myModal24 .image-3").css('content', 'url("img/Stands_Gante-Cihac-2016-3.jpg")');
    $("#myModal24 .image-4").css('content', 'url("img/Stands_Gante-Cihac-2016-4.jpg")');
    $("#myModal24 .image-5").css('content', 'url("img/Stands_Gante-Cihac-2016-5.jpg")');


    loadImage(".myModal25","img/Stands_PorceLamosa-Coverings-2016-p.jpg");
    $("#myModal25 .image-1").css('content', 'url("img/Stands_PorceLamosa-Coverings-2016-1.jpg")'); // 6
    $("#myModal25 .image-2").css('content', 'url("img/Stands_PorceLamosa-Coverings-2016-2.jpg")');
    $("#myModal25 .image-3").css('content', 'url("img/Stands_PorceLamosa-Coverings-2016-3.jpg")');
    $("#myModal25 .image-4").css('content', 'url("img/Stands_PorceLamosa-Coverings-2016-4.jpg")');
    $("#myModal25 .image-5").css('content', 'url("img/Stands_PorceLamosa-Coverings-2016-5.jpg")');
    $("#myModal25 .image-6").css('content', 'url("img/Stands_PorceLamosa-Coverings-2016-6.jpg")');


    loadImage(".myModal26","img/Stands_Verve-Coverings-2016-p.jpg");
    $("#myModal26 .image-1").css('content', 'url("img/Stands_Verve-Coverings-2016-1.jpg")'); // 6
    $("#myModal26 .image-2").css('content', 'url("img/Stands_Verve-Coverings-2016-2.jpg")');
    $("#myModal26 .image-3").css('content', 'url("img/Stands_Verve-Coverings-2016-3.jpg")');
    $("#myModal26 .image-4").css('content', 'url("img/Stands_Verve-Coverings-2016-4.jpg")');
    $("#myModal26 .image-5").css('content', 'url("img/Stands_Verve-Coverings-2016-5.jpg")');
    $("#myModal26 .image-6").css('content', 'url("img/Stands_Verve-Coverings-2016-6.jpg")');

    loadImage(".myModal27","img/Stands_FibraMacquarie_p.jpg");
    $("#myModal27 .image-1").css('content', 'url("img/Stands_FibraMacquarie_1.jpg")'); // 6

    loadImage(".myModal","img/Stands_Porcelanite-Cihac-2015-p.jpg");
    $("#myModal .image-1").css('content', 'url("img/Stands_Porcelanite-Cihac-2015-1.jpg")'); // 7
    $("#myModal .image-2").css('content', 'url("img/Stands_Porcelanite-Cihac-2015-2.jpg")');
    $("#myModal .image-3").css('content', 'url("img/Stands_Porcelanite-Cihac-2015-3.jpg")');
    $("#myModal .image-4").css('content', 'url("img/Stands_Porcelanite-Cihac-2015-4.jpg")');
    $("#myModal .image-5").css('content', 'url("img/Stands_Porcelanite-Cihac-2015-5.jpg")');
    $("#myModal .image-6").css('content', 'url("img/Stands_Porcelanite-Cihac-2015-6.jpg")');
    $("#myModal .image-7").css('content', 'url("img/Stands_Porcelanite-Cihac-2015-7.jpg")');

    loadImage(".myModal28","img/Stands_PorcelaniteCihacEstudio2015_p.jpg");
    $("#myModal28 .image-1").css('content', 'url("img/Stands_PorcelaniteCihacEstudio2014_1.jpg")'); // 7
    $("#myModal28 .image-2").css('content', 'url("img/Stands_PorcelaniteCihacEstudio2015_2.jpg")');
    $("#myModal28 .image-3").css('content', 'url("img/Stands_PorcelaniteCihacEstudio2015_3.jpg")');
    $("#myModal28 .image-4").css('content', 'url("img/Stands_PorcelaniteCihacEstudio2015_4.jpg")');

    loadImage(".myModal3","img/Stands_Lamosa-Cihac-2015-p.jpg");
    $("#myModal3 .image-1").css('content', 'url("img/Stands_Lamosa-Cihac-2015-1.jpg")'); // 6
    $("#myModal3 .image-2").css('content', 'url("img/Stands_Lamosa-Cihac-2015-2.jpg")');
    $("#myModal3 .image-3").css('content', 'url("img/Stands_Lamosa-Cihac-2015-3.jpg")');
    $("#myModal3 .image-4").css('content', 'url("img/Stands_Lamosa-Cihac-2015-4.jpg")');
    $("#myModal3 .image-5").css('content', 'url("img/Stands_Lamosa-Cihac-2015-5.jpg")');
    $("#myModal3 .image-6").css('content', 'url("img/Stands_Lamosa-Cihac-2015-6.jpg")');


    loadImage(".myModal5","img/Stands_Firenze-Cihac-2015-p.jpg");
    $("#myModal5 .image-1").css('content', 'url("img/Stands_Firenze-Cihac-2015-2.jpg")'); // 7
    $("#myModal5 .image-2").css('content', 'url("img/Stands_Firenze-Cihac-2015-3.jpg")');
    $("#myModal5 .image-3").css('content', 'url("img/Stands_Firenze-Cihac-2015-1.jpg")');
    $("#myModal5 .image-4").css('content', 'url("img/Stands_Firenze-Cihac-2015-4.jpg")');
    $("#myModal5 .image-5").css('content', 'url("img/Stands_Firenze-Cihac-2015-5.jpg")');
    $("#myModal5 .image-6").css('content', 'url("img/Stands_Firenze-Cihac-2015-6.jpg")');
    $("#myModal5 .image-7").css('content', 'url("img/Stands_Firenze-Cihac-2015-7.jpg")');


    loadImage(".myModal4","img/Stands_Gante-Cihac-2015-p.jpg");
    $("#myModal4 .image-1").css('content', 'url("img/Stands_Gante-Cihac-2015-1.jpg")'); // 4
    $("#myModal4 .image-2").css('content', 'url("img/Stands_Gante-Cihac-2015-2.jpg")');
    $("#myModal4 .image-3").css('content', 'url("img/Stands_Gante-Cihac-2015-3.jpg")');
    $("#myModal4 .image-4").css('content', 'url("img/Stands_Gante-Cihac-2015-4.jpg")');


    loadImage(".myModal6","img/Stands_PorceLamosa-Coverings-2015-p.jpg");
    $("#myModal6 .image-1").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-1.jpg")'); // 9
    $("#myModal6 .image-2").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-2.jpg")');
    $("#myModal6 .image-3").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-3.jpg")');
    $("#myModal6 .image-4").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-4.jpg")');
    $("#myModal6 .image-5").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-5.jpg")');
    $("#myModal6 .image-6").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-6.jpg")');
    $("#myModal6 .image-7").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-7.jpg")');
    $("#myModal6 .image-8").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-8.jpg")');
    $("#myModal6 .image-9").css('content', 'url("img/Stands_PorceLamosa-Coverings-2015-9.jpg")');


    loadImage(".myModal7","img/Stands_Verve-Coverings-2015-p.jpg");
    $("#myModal7 .image-1").css('content', 'url("img/Stands_Verve-Coverings-2015-1.jpg")'); // 7
    $("#myModal7 .image-2").css('content', 'url("img/Stands_Verve-Coverings-2015-2.jpg")');
    $("#myModal7 .image-3").css('content', 'url("img/Stands_Verve-Coverings-2015-3.jpg")');
    $("#myModal7 .image-4").css('content', 'url("img/Stands_Verve-Coverings-2015-4.jpg")');
    $("#myModal7 .image-5").css('content', 'url("img/Stands_Verve-Coverings-2015-5.jpg")');
    $("#myModal7 .image-6").css('content', 'url("img/Stands_Verve-Coverings-2015-6.jpg")');
    $("#myModal7 .image-7").css('content', 'url("img/Stands_Verve-Coverings-2015-7.jpg")');


    loadImage(".myModal2","img/Stands_Firenze_Arquitectos_2015_p.jpg");
    $("#myModal2 .image-1").css('content', 'url("img/Stands_Firenze_Arquitectos_2015_1.jpg")');  // 6  
    $("#myModal2 .image-2").css('content', 'url("img/Stands_Firenze_Arquitectos_2015_2.jpg")');
    $("#myModal2 .image-3").css('content', 'url("img/Stands_Firenze_Arquitectos_2015_3.jpg")');
    $("#myModal2 .image-4").css('content', 'url("img/Stands_Firenze_Arquitectos_2015_4.jpg")');
    $("#myModal2 .image-5").css('content', 'url("img/Stands_Firenze_Arquitectos_2015_5.jpg")');
    $("#myModal2 .image-6").css('content', 'url("img/Stands_Firenze_Arquitectos_2015_6.jpg")');


    loadImage(".myModal8","img/Stands_Porcelanite-Cihac-2014-p.jpg");
    $("#myModal8 .image-1").css('content', 'url("img/Stands_Porcelanite-Cihac-2014-1.jpg")'); // 5
    $("#myModal8 .image-2").css('content', 'url("img/Stands_Porcelanite-Cihac-2014-2.jpg")');
    $("#myModal8 .image-3").css('content', 'url("img/Stands_Porcelanite-Cihac-2014-3.jpg")');
    $("#myModal8 .image-4").css('content', 'url("img/Stands_Porcelanite-Cihac-2014-4.jpg")');
    $("#myModal8 .image-5").css('content', 'url("img/Stands_Porcelanite-Cihac-2014-5.jpg")');

    loadImage(".myModal32","img/Stands_PorcelaniteCihacEstudio2014_p.jpg");
    $("#myModal32 .image-1").css('content', 'url("img/Stands_PorcelaniteCihacEstudio2014_1.jpg")'); // 5
    $("#myModal32 .image-2").css('content', 'url("img/Stands_PorcelaniteCihacEstudio2014_2.jpg")');
    

    loadImage(".myModal9","img/Stands_Lamosa_Cihac_2014_p.jpg");
    $("#myModal9 .image-1").css('content', 'url("img/Stands_Lamosa_Cihac_2014_1.jpg")'); // 7
    $("#myModal9 .image-2").css('content', 'url("img/Stands_Lamosa_Cihac_2014_2.jpg")');
    $("#myModal9 .image-3").css('content', 'url("img/Stands_Lamosa_Cihac_2014_3.jpg")');
    $("#myModal9 .image-4").css('content', 'url("img/Stands_Lamosa_Cihac_2014_4.jpg")');
    $("#myModal9 .image-5").css('content', 'url("img/Stands_Lamosa_Cihac_2014_5.jpg")');
    $("#myModal9 .image-6").css('content', 'url("img/Stands_Lamosa_Cihac_2014_6.jpg")');
    $("#myModal9 .image-7").css('content', 'url("img/Stands_Lamosa_Cihac_2014_7.jpg")');

    loadImage(".myModal31","img/Stands_LamosaCihacEstudio2014_p.jpg");
    $("#myModal31 .image-1").css('content', 'url("img/Stands_LamosaCihacEstudio2014_1.jpg")'); // 7
    $("#myModal31 .image-2").css('content', 'url("img/Stands_LamosaCihacEstudio2014_2.jpg")');
    $("#myModal31 .image-3").css('content', 'url("img/Stands_LamosaCihacEstudio2014_3.jpg")');
    $("#myModal31 .image-4").css('content', 'url("img/Stands_LamosaCihacEstudio2014_4.jpg")');

    loadImage(".myModal10","img/Stands_Firenze_Cihac_2014_p.jpg");
    $("#myModal10 .image-1").css('content', 'url("img/Stands_Firenze_Cihac_2014_1.jpg")'); // 8
    $("#myModal10 .image-2").css('content', 'url("img/Stands_Firenze_Cihac_2014_2.jpg")');
    $("#myModal10 .image-3").css('content', 'url("img/Stands_Firenze_Cihac_2014_3.jpg")');
    $("#myModal10 .image-4").css('content', 'url("img/Stands_Firenze_Cihac_2014_4.jpg")');
    $("#myModal10 .image-5").css('content', 'url("img/Stands_Firenze_Cihac_2014_5.jpg")');
    $("#myModal10 .image-6").css('content', 'url("img/Stands_Firenze_Cihac_2014_6.jpg")');
    $("#myModal10 .image-7").css('content', 'url("img/Stands_Firenze_Cihac_2014_7.jpg")');
    $("#myModal10 .image-8").css('content', 'url("img/Stands_Firenze_Cihac_2014_8.jpg")');

    loadImage(".myModal29","img/Stands_GanteCihac2014_p.jpg");
    $("#myModal29 .image-1").css('content', 'url("img/Stands_GanteCihac2014_1.jpg")'); // 8
    $("#myModal29 .image-2").css('content', 'url("img/Stands_GanteCihac2014_2.jpg")');

    loadImage(".myModal30","img/Stands_GanteCihacEstudio2014_p.jpg");
    $("#myModal30 .image-1").css('content', 'url("img/Stands_GanteCihacEstudio2014_1.jpg")'); // 8
    $("#myModal30 .image-2").css('content', 'url("img/Stands_GanteCihacEstudio2014_2.jpg")');
    $("#myModal30 .image-3").css('content', 'url("img/Stands_GanteCihacEstudio2014_3.jpg")');

    loadImage(".myModal11","img/Stands_PorceLamosa-Coverings-2014_p.jpg");
    $("#myModal11 .image-1").css('content', 'url("img/Stands_PorceLamosa-Coverings-2014_1.jpg")'); // 8
    $("#myModal11 .image-2").css('content', 'url("img/Stands_PorceLamosa-Coverings-2014_2.jpg")');
    $("#myModal11 .image-3").css('content', 'url("img/Stands_PorceLamosa-Coverings-2014_3.jpg")');
    $("#myModal11 .image-4").css('content', 'url("img/Stands_PorceLamosa-Coverings-2014_4.jpg")');
    $("#myModal11 .image-5").css('content', 'url("img/Stands_PorceLamosa-Coverings-2014_5.jpg")');
    $("#myModal11 .image-6").css('content', 'url("img/Stands_PorceLamosa-Coverings-2014_6.jpg")');
    $("#myModal11 .image-7").css('content', 'url("img/Stands_PorceLamosa-Coverings-2014_7.jpg")');
    $("#myModal11 .image-8").css('content', 'url("img/Stands_PorceLamosa-Coverings-2014_8.jpg")');


    loadImage(".myModal14","img/Stands_Lamosa-Cihac-2013-p.jpg");
    $("#myModal14 .image-1").css('content', 'url("img/Stands_Lamosa-Cihac-2013-1.jpg")'); // 5
    $("#myModal14 .image-2").css('content', 'url("img/Stands_Lamosa-Cihac-2013-2.jpg")');
    $("#myModal14 .image-3").css('content', 'url("img/Stands_Lamosa-Cihac-2013-3.jpg")');
    $("#myModal14 .image-4").css('content', 'url("img/Stands_Lamosa-Cihac-2013-4.jpg")');
    $("#myModal14 .image-5").css('content', 'url("img/Stands_Lamosa-Cihac-2013-5.jpg")');


    loadImage(".myModal13","img/Stands_Firenze_Cihac_2013_p.jpg");
    $("#myModal13 .image-1").css('content', 'url("img/Stands_Firenze_Cihac_2013_1.jpg")'); // 4
    $("#myModal13 .image-2").css('content', 'url("img/Stands_Firenze_Cihac_2013_2.jpg")');
    $("#myModal13 .image-3").css('content', 'url("img/Stands_Firenze_Cihac_2013_3.jpg")');
    $("#myModal13 .image-4").css('content', 'url("img/Stands_Firenze_Cihac_2013_4.jpg")');


    loadImage(".myModal15","img/Stands_PorceLamosa_Coverings_2013_p.jpg");
    $("#myModal15 .image-1").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_1.jpg")'); // 9
    $("#myModal15 .image-2").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_2.jpg")');
    $("#myModal15 .image-3").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_3.jpg")');
    $("#myModal15 .image-4").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_4.jpg")');
    $("#myModal15 .image-5").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_5.jpg")');
    $("#myModal15 .image-6").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_6.jpg")');
    $("#myModal15 .image-7").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_7.jpg")');
    $("#myModal15 .image-8").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_8.jpg")');
    $("#myModal15 .image-9").css('content', 'url("img/Stands_PorceLamosa_Coverings_2013_9.jpg")');

loadImage(".myModal33","img/Stands_VerveConverings2013_p.jpg");
    $("#myModal33 .image-1").css('content', 'url("img/Stands_VerveConverings2013_1.jpg")'); // 9
    $("#myModal33 .image-2").css('content', 'url("img/Stands_VerveConverings2013_2.jpg")');
    $("#myModal33 .image-3").css('content', 'url("img/Stands_VerveConverings2013_3.jpg")');
    $("#myModal33 .image-4").css('content', 'url("img/Stands_VerveConverings2013_4.jpg")');

loadImage(".myModal34","img/Stands_DeAcero_p.jpg");
    $("#myModal34 .image-1").css('content', 'url("img/Stands_DeAcero_1.jpg")'); // 9
    $("#myModal34 .image-2").css('content', 'url("img/Stands_DeAcero_2.jpg")');

    loadImage(".myModal12","img/Stands_Hormann_2013_p.jpg");
    $("#myModal12 .image-1").css('content', 'url("img/Stands_Hormann_2013_1.jpg")'); // 3
    $("#myModal12 .image-2").css('content', 'url("img/Stands_Hormann_2013_2.jpg")');
    $("#myModal12 .image-3").css('content', 'url("img/Stands_Hormann_2013_3.jpg")');


    loadImage(".myModal16","img/Stands_Porcelanite_Cihac_2012_p.jpg");
    $("#myModal16 .image-1").css('content', 'url("img/Stands_Porcelanite_Cihac_2012_1.jpg")'); // 7
    $("#myModal16 .image-2").css('content', 'url("img/Stands_Porcelanite_Cihac_2012_2.jpg")');
    $("#myModal16 .image-3").css('content', 'url("img/Stands_Porcelanite_Cihac_2012_3.jpg")');
    $("#myModal16 .image-4").css('content', 'url("img/Stands_Porcelanite_Cihac_2012_4.jpg")');
    $("#myModal16 .image-5").css('content', 'url("img/Stands_Porcelanite_Cihac_2012_5.jpg")');
    $("#myModal16 .image-6").css('content', 'url("img/Stands_Porcelanite_Cihac_2012_6.jpg")');


    loadImage(".myModal17","img/Stands_PorceLamosa-Coverings-2012-p.jpg");
    $("#myModal17 .image-1").css('content', 'url("img/Stands_PorceLamosa-Coverings-2012-1.jpg")'); // 6
    $("#myModal17 .image-2").css('content', 'url("img/Stands_PorceLamosa-Coverings-2012-2.jpg")');
    $("#myModal17 .image-3").css('content', 'url("img/Stands_PorceLamosa-Coverings-2012-3.jpg")');
    $("#myModal17 .image-4").css('content', 'url("img/Stands_PorceLamosa-Coverings-2012-4.jpg")');
    $("#myModal17 .image-5").css('content', 'url("img/Stands_PorceLamosa-Coverings-2012-5.jpg")');
    $("#myModal17 .image-6").css('content', 'url("img/Stands_PorceLamosa-Coverings-2012-6.jpg")');


    loadImage(".myModal18","img/Stands_Porcelanite-Cihac-2011-p.jpg");
    $("#myModal18 .image-1").css('content', 'url("img/Stands_Porcelanite-Cihac-2011-1.jpg")'); // 3
    $("#myModal18 .image-2").css('content', 'url("img/Stands_Porcelanite-Cihac-2011-2.jpg")');
    $("#myModal18 .image-3").css('content', 'url("img/Stands_Porcelanite-Cihac-2011-3.jpg")');


    loadImage(".myModal19","img/Stands_Lamosa_Cihac_2011_p.jpg");
    $("#myModal19 .image-1").css('content', 'url("img/Stands_Lamosa_Cihac_2011_1.jpg")'); // 4
    $("#myModal19 .image-2").css('content', 'url("img/Stands_Lamosa_Cihac_2011_2.jpg")');
    $("#myModal19 .image-3").css('content', 'url("img/Stands_Lamosa_Cihac_2011_3.jpg")');
    $("#myModal19 .image-4").css('content', 'url("img/Stands_Lamosa_Cihac_2011_4.jpg")');


    loadImage(".myModal20","img/Stands_Firenze_Cihac_2011_p.jpg");
    $("#myModal20 .image-1").css('content', 'url("img/Stands_Firenze_Cihac_2011_1.jpg")'); // 5
    $("#myModal20 .image-2").css('content', 'url("img/Stands_Firenze_Cihac_2011_2.jpg")');
    $("#myModal20 .image-3").css('content', 'url("img/Stands_Firenze_Cihac_2011_3.jpg")');
    $("#myModal20 .image-4").css('content', 'url("img/Stands_Firenze_Cihac_2011_4.jpg")');
    $("#myModal20 .image-5").css('content', 'url("img/Stands_Firenze_Cihac_2011_5.jpg")');


    loadImage(".myModal35","img/Stands_LamosaCoverings2010_p.jpg");
    $("#myModal35 .image-1").css('content', 'url("img/Stands_LamosaCoverings2010_1.jpg")'); // 5
    $("#myModal35 .image-2").css('content', 'url("img/Stands_LamosaCoverings2010_2.jpg")');
    $("#myModal35 .image-3").css('content', 'url("img/Stands_LamosaCoverings2010_3.jpg")');
    $("#myModal35 .image-4").css('content', 'url("img/Stands_LamosaCoverings2010_4.jpg")');


}

