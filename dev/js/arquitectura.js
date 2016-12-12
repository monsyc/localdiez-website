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

    loadImage(".myModal11","img/Arq_CasaDeCampo_p.jpg");
    loadImage(".myModal10","img/Arq_CondominioMilleta-2015-p.jpg");
    loadImage(".myModal2","img/Arq_FamiliaCleary-2014-p.jpg");
    loadImage(".myModal","img/Arq_FamiliaCano-2014-p.jpg");
    loadImage(".myModal3","img/Arq_Ingeniat-2014-p.jpg");
    loadImage(".myModal4","img/Arq_FamiliaGarza-2014-p.jpg");
    loadImage(".myModal5","img/Arq_Olinala-2011-p.jpg");
    loadImage(".myModal6","img/Arq_Lanx-2010-p.jpg");
    loadImage(".myModal7","img/Arq_SanJuan-2008-p.jpg");
    loadImage(".myModal8","img/Arq_CentroComercial-2006-p.jpg");

    loadImage("#myModal11 .image-1","img/Arq_CasaDeCampo_1.jpg");
    loadImage("#myModal11 .image-2","img/Arq_CasaDeCampo_2.jpg");
    loadImage("#myModal11 .image-3","img/Arq_CasaDeCampo_3.jpg");
    loadImage("#myModal11 .image-4","img/Arq_CasaDeCampo_4.jpg");

    loadImage("#myModal10 .image-1","img/Arq_CondominioMilleta-2015-1.jpg");
    loadImage("#myModal10 .image-2","img/Arq_CondominioMilleta-2015-2.jpg");
    loadImage("#myModal10 .image-3","img/Arq_CondominioMilleta-2015-3.jpg");
    loadImage("#myModal10 .image-4","img/Arq_CondominioMilleta-2015-4.jpg");
    loadImage("#myModal10 .image-5","img/Arq_CondominioMilleta-2015-5.jpg");
    loadImage("#myModal10 .image-6","img/Arq_CondominioMilleta-2015-6.jpg");

    loadImage("#myModal2 .image-1","img/Arq_FamiliaCleary-2014-1.jpg");
    loadImage("#myModal2 .image-2","img/Arq_FamiliaCleary-2014-2.jpg");
    loadImage("#myModal2 .image-3","img/Arq_FamiliaCleary-2014-3.jpg");

    loadImage("#myModal .image-1","img/Arq_FamiliaCano-2014-1.jpg");
    loadImage("#myModal .image-2","img/Arq_FamiliaCano-2014-2.jpg");
    loadImage("#myModal .image-3","img/Arq_FamiliaCano-2014-3.jpg");
    loadImage("#myModal .image-4","img/Arq_FamiliaCano-2014-4.jpg");
    loadImage("#myModal .image-5","img/Arq_FamiliaCano-2014-5.jpg");

    loadImage("#myModal3 .image-1","img/Arq_Ingeniat-2014-1.jpg");
    loadImage("#myModal3 .image-2","img/Arq_Ingeniat-2014-2.jpg");
    loadImage("#myModal3 .image-3","img/Arq_Ingeniat-2014-3.jpg");
    loadImage("#myModal3 .image-4","img/Arq_Ingeniat-2014-4.jpg");

    loadImage("#myModal4 .image-1","img/Arq_FamiliaGarza-2014-1.jpg");
    loadImage("#myModal4 .image-2","img/Arq_FamiliaGarza-2014-2.jpg");
    loadImage("#myModal4 .image-3","img/Arq_FamiliaGarza-2014-3.jpg");
    loadImage("#myModal4 .image-4","img/Arq_FamiliaGarza-2014-4.jpg");
    loadImage("#myModal4 .image-5","img/Arq_FamiliaGarza-2014-5.jpg");

    loadImage("#myModal5 .image-1","img/Arq_Olinala-2011-1.jpg");
    loadImage("#myModal5 .image-2","img/Arq_Olinala-2011-2.jpg");
    loadImage("#myModal5 .image-3","img/Arq_Olinala-2011-3.jpg");
    loadImage("#myModal5 .image-4","img/Arq_Olinala-2011-4.jpg");
    loadImage("#myModal5 .image-5","img/Arq_Olinala-2011-5.jpg");
    loadImage("#myModal5 .image-6","img/Arq_Olinala-2011-6.jpg");
    loadImage("#myModal5 .image-7","img/Arq_Olinala-2011-7.jpg");

    loadImage("#myModal6 .image-1","img/Arq_Lanx-2010-1.jpg");
    loadImage("#myModal6 .image-2","img/Arq_Lanx-2010-2.jpg");
    loadImage("#myModal6 .image-3","img/Arq_Lanx-2010-3.jpg");

    loadImage("#myModal7 .image-1","img/Arq_SanJuan-2008-1.jpg");
    loadImage("#myModal7 .image-2","img/Arq_SanJuan-2008-2.jpg");
    loadImage("#myModal7 .image-3","img/Arq_SanJuan-2008-3.jpg");

    loadImage("#myModal8 .image-1","img/Arq_CentroComercial-2006-1.jpg");
    loadImage("#myModal8 .image-2","img/Arq_CentroComercial-2006-2.jpg");
    loadImage("#myModal8 .image-3","img/Arq_CentroComercial-2006-3.jpg");

}

function loadModalImages() {

    loadImage(".myModal11","img/Arq_CasaDeCampo_p.jpg");
    $("#myModal11 .image-1").css('content', 'url("img/Arq_CasaDeCampo_1.jpg")');
    $("#myModal11 .image-2").css('content', 'url("img/Arq_CasaDeCampo_2.jpg")');
    $("#myModal11 .image-3").css('content', 'url("img/Arq_CasaDeCampo_3.jpg")');
    $("#myModal11 .image-4").css('content', 'url("img/Arq_CasaDeCampo_4.jpg")');

    loadImage(".myModal10","img/Arq_CondominioMilleta-2015-p.jpg");
    $("#myModal10 .image-1").css('content', 'url("img/Arq_CondominioMilleta-2015-1.jpg")');
    $("#myModal10 .image-2").css('content', 'url("img/Arq_CondominioMilleta-2015-2.jpg")');
    $("#myModal10 .image-3").css('content', 'url("img/Arq_CondominioMilleta-2015-3.jpg")');
    $("#myModal10 .image-4").css('content', 'url("img/Arq_CondominioMilleta-2015-4.jpg")');
    $("#myModal10 .image-5").css('content', 'url("img/Arq_CondominioMilleta-2015-5.jpg")');
    $("#myModal10 .image-6").css('content', 'url("img/Arq_CondominioMilleta-2015-6.jpg")');

    loadImage(".myModal2","img/Arq_FamiliaCleary-2014-p.jpg");
    $("#myModal2 .image-1").css('content', 'url("img/Arq_FamiliaCleary-2014-1.jpg")');
    $("#myModal2 .image-2").css('content', 'url("img/Arq_FamiliaCleary-2014-2.jpg")');
    $("#myModal2 .image-3").css('content', 'url("img/Arq_FamiliaCleary-2014-3.jpg")');

    loadImage(".myModal","img/Arq_FamiliaCano-2014-p.jpg");
    $("#myModal .image-1").css('content', 'url("img/Arq_FamiliaCano-2014-1.jpg")');
    $("#myModal .image-2").css('content', 'url("img/Arq_FamiliaCano-2014-2.jpg")');
    $("#myModal .image-3").css('content', 'url("img/Arq_FamiliaCano-2014-3.jpg")');
    $("#myModal .image-4").css('content', 'url("img/Arq_FamiliaCano-2014-4.jpg")');
    $("#myModal .image-5").css('content', 'url("img/Arq_FamiliaCano-2014-5.jpg")');

    loadImage(".myModal3","img/Arq_Ingeniat-2014-p.jpg");
    $("#myModal3 .image-1").css('content', 'url("img/Arq_Ingeniat-2014-1.jpg")');
    $("#myModal3 .image-2").css('content', 'url("img/Arq_Ingeniat-2014-2.jpg")');
    $("#myModal3 .image-3").css('content', 'url("img/Arq_Ingeniat-2014-3.jpg")');
    $("#myModal3 .image-4").css('content', 'url("img/Arq_Ingeniat-2014-4.jpg")');

    loadImage(".myModal4","img/Arq_FamiliaGarza-2014-p.jpg");
    $("#myModal4 .image-1").css('content', 'url("img/Arq_FamiliaGarza-2014-1.jpg")');
    $("#myModal4 .image-2").css('content', 'url("img/Arq_FamiliaGarza-2014-2.jpg")');
    $("#myModal4 .image-3").css('content', 'url("img/Arq_FamiliaGarza-2014-3.jpg")');
    $("#myModal4 .image-4").css('content', 'url("img/Arq_FamiliaGarza-2014-4.jpg")');
    $("#myModal4 .image-5").css('content', 'url("img/Arq_FamiliaGarza-2014-5.jpg")');

    loadImage(".myModal5","img/Arq_Olinala-2011-p.jpg");
    $("#myModal5 .image-1").css('content', 'url("img/Arq_Olinala-2011-1.jpg")');
    $("#myModal5 .image-2").css('content', 'url("img/Arq_Olinala-2011-2.jpg")');
    $("#myModal5 .image-3").css('content', 'url("img/Arq_Olinala-2011-3.jpg")');
    $("#myModal5 .image-4").css('content', 'url("img/Arq_Olinala-2011-4.jpg")');
    $("#myModal5 .image-5").css('content', 'url("img/Arq_Olinala-2011-5.jpg")');
    $("#myModal5 .image-6").css('content', 'url("img/Arq_Olinala-2011-6.jpg")');
    $("#myModal5 .image-7").css('content', 'url("img/Arq_Olinala-2011-7.jpg")');

    loadImage(".myModal6","img/Arq_Lanx-2010-p.jpg");
    $("#myModal6 .image-1").css('content', 'url("img/Arq_Lanx-2010-1.jpg")');
    $("#myModal6 .image-2").css('content', 'url("img/Arq_Lanx-2010-2.jpg")');
    $("#myModal6 .image-3").css('content', 'url("img/Arq_Lanx-2010-3.jpg")');

    loadImage(".myModal7","img/Arq_SanJuan-2008-p.jpg");
    $("#myModal7 .image-1").css('content', 'url("img/Arq_SanJuan-2008-1.jpg")');
    $("#myModal7 .image-2").css('content', 'url("img/Arq_SanJuan-2008-2.jpg")');
    $("#myModal7 .image-3").css('content', 'url("img/Arq_SanJuan-2008-3.jpg")');

    loadImage(".myModal8","img/Arq_CentroComercial-2006-p.jpg");
    $("#myModal8 .image-1").css('content', 'url("img/Arq_CentroComercial-2006-1.jpg")');
    $("#myModal8 .image-2").css('content', 'url("img/Arq_CentroComercial-2006-2.jpg")');
    $("#myModal8 .image-3").css('content', 'url("img/Arq_CentroComercial-2006-3.jpg")');
}

