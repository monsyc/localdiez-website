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
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (isFirefox || msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
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

    loadImage(".myModal13","img/Display_ExhibidorLamosa2016_p.jpg");
    loadImage(".myModal14","img/Display_ContractorBoardLamosa2016_p.jpg");
    loadImage(".myModal15","img/Display_ExhibidorLamosav12016_p.jpg");
    loadImage(".myModal16","img/Display_MurosTecnicosLamosa1_p.jpg");
    loadImage(".myModal17","img/Display_MurosTecnicosLamosa2_p.jpg");
    loadImage(".myModal18","img/Display_StandItinerante_p.jpg");
    loadImage(".myModal19","img/Display_MaderasLamosa_p.jpg");
    loadImage(".myModal20","img/Display_LanzamientosPorce2016_p.jpg");
    loadImage(".myModal22","img/Display_MuroTecnicoPorce_p.jpg");
    loadImage(".myModal23","img/Display_ExhibidoresVariosPorce_p.jpg");
    loadImage(".myModal24","img/Display_PorcelanitePremium2015_p.jpg");
    loadImage(".myModal25","img/Display_ArkoGFormato_p.jpg");

    loadImage(".myModal2","img/Display_MuroTecnico_Vitromex_2014_p.jpg");
    loadImage(".myModal","img/Display_ExhibidorLibro_Arko_p.jpg");
    loadImage(".myModal3","img/Display_ExhibidorLibro_Artemis_2014_p.jpg");
    loadImage(".myModal4","img/Display_ExhibidorLibro_Vitromex_2014_p.jpg");
    loadImage(".myModal6","img/Display_Cuneros_Vitromex_2014_p.jpg");
    loadImage(".myModal5","img/Display_Cuneros_Gante_2014_p.jpg");
    loadImage(".myModal8","img/Display_Exhibidor_Joyou_2012_p.jpg");
    loadImage(".myModal9","img/Display_ExhibidorLibro_Gante_2012_p.jpg");
    loadImage(".myModal10","img/Display_ExhibidoresSanitarios_Lamosa_2012_p.jpg");
    loadImage(".myModal11","img/Display_ExhibidoresSanitarios_Ambiance_2010_p.jpg");
    loadImage(".myModal12","img/Display_ExhibidoresSanitarios_Lamosa_2008_p.jpg");

    loadImage("#myModal13 .image-1","img/Display_ExhibidorLamosa2016_1.jpg"); //1

    loadImage("#myModal14 .image-1","img/Display_ContractorBoardLamosa2016_1.jpg"); //4
    loadImage("#myModal14 .image-2","img/Display_ContractorBoardLamosa2016_2.jpg"); 
    loadImage("#myModal14 .image-3","img/Display_ContractorBoardLamosa2016_3.jpg"); 
    loadImage("#myModal14 .image-4","img/Display_ContractorBoardLamosa2016_4.jpg"); 

    loadImage("#myModal15 .image-1","img/Display_ExhibidorLamosav12016_1.jpg"); //5
    loadImage("#myModal15 .image-2","img/Display_ExhibidorLamosav12016_2.jpg"); 
    loadImage("#myModal15 .image-3","img/Display_ExhibidorLamosav12016_3.jpg"); 
    loadImage("#myModal15 .image-4","img/Display_ExhibidorLamosav12016_4.jpg"); 
    loadImage("#myModal15 .image-5","img/Display_ExhibidorLamosav12016_5.jpg"); 

    loadImage("#myModal16 .image-1","img/Display_MurosTecnicosLamosa1_1.jpg"); //6
    loadImage("#myModal16 .image-2","img/Display_MurosTecnicosLamosa1_2.jpg");
    loadImage("#myModal16 .image-3","img/Display_MurosTecnicosLamosa1_3.jpg");
    loadImage("#myModal16 .image-4","img/Display_MurosTecnicosLamosa1_4.jpg");
    loadImage("#myModal16 .image-5","img/Display_MurosTecnicosLamosa1_5.jpg");
    loadImage("#myModal16 .image-6","img/Display_MurosTecnicosLamosa1_6.jpg");

    loadImage("#myModal17 .image-1","img/Display_MurosTecnicosLamosa2_1.jpg"); //4
    loadImage("#myModal17 .image-2","img/Display_MurosTecnicosLamosa2_2.jpg");
    loadImage("#myModal17 .image-3","img/Display_MurosTecnicosLamosa2_3.jpg");
    loadImage("#myModal17 .image-4","img/Display_MurosTecnicosLamosa2_4.jpg");

    loadImage("#myModal18 .image-1","img/Display_StandItinerante_1.jpg"); //8
    loadImage("#myModal18 .image-2","img/Display_StandItinerante_2.jpg");
    loadImage("#myModal18 .image-3","img/Display_StandItinerante_3.jpg");
    loadImage("#myModal18 .image-4","img/Display_StandItinerante_4.jpg");
    loadImage("#myModal18 .image-5","img/Display_StandItinerante_5.jpg");
    loadImage("#myModal18 .image-6","img/Display_StandItinerante_6.jpg");
    loadImage("#myModal18 .image-7","img/Display_StandItinerante_7.jpg");
    loadImage("#myModal18 .image-8","img/Display_StandItinerante_8.jpg");

    loadImage("#myModal19 .image-1","img/Display_MaderasLamosa_1.jpg"); //3
    loadImage("#myModal19 .image-2","img/Display_MaderasLamosa_2.jpg");
    loadImage("#myModal19 .image-3","img/Display_MaderasLamosa_3.jpg");

    loadImage("#myModal20 .image-1","img/Display_LanzamientosPorce2016_1.jpg"); //5
    loadImage("#myModal20 .image-2","img/Display_LanzamientosPorce2016_2.jpg");
    loadImage("#myModal20 .image-3","img/Display_LanzamientosPorce2016_3.jpg");
    loadImage("#myModal20 .image-4","img/Display_LanzamientosPorce2016_4.jpg");
    loadImage("#myModal20 .image-5","img/Display_LanzamientosPorce2016_5.jpg");

    loadImage("#myModal22 .image-1","img/Display_MuroTecnicoPorce_1.jpg"); //5
    loadImage("#myModal22 .image-2","img/Display_MuroTecnicoPorce_2.jpg");
    loadImage("#myModal22 .image-3","img/Display_MuroTecnicoPorce_3.jpg");
    loadImage("#myModal22 .image-4","img/Display_MuroTecnicoPorce_4.jpg");
    loadImage("#myModal22 .image-5","img/Display_MuroTecnicoPorce_5.jpg");

    loadImage("#myModal23 .image-1","img/Display_ExhibidoresVariosPorce_1.jpg"); //6
    loadImage("#myModal23 .image-2","img/Display_ExhibidoresVariosPorce_2.jpg");
    loadImage("#myModal23 .image-3","img/Display_ExhibidoresVariosPorce_3.jpg");
    loadImage("#myModal23 .image-4","img/Display_ExhibidoresVariosPorce_4.jpg");
    loadImage("#myModal23 .image-5","img/Display_ExhibidoresVariosPorce_5.jpg");
    loadImage("#myModal23 .image-6","img/Display_ExhibidoresVariosPorce_6.jpg");

    loadImage("#myModal24 .image-1","img/Display_PorcelanitePremium2015_1.jpg"); //6
    loadImage("#myModal24 .image-2","img/Display_PorcelanitePremium2015_2.jpg");
    loadImage("#myModal24 .image-3","img/Display_PorcelanitePremium2015_3.jpg");
    loadImage("#myModal24 .image-4","img/Display_PorcelanitePremium2015_4.jpg");
    loadImage("#myModal24 .image-5","img/Display_PorcelanitePremium2015_5.jpg");
    loadImage("#myModal24 .image-6","img/Display_PorcelanitePremium2015_6.jpg");

    loadImage("#myModal25 .image-1","img/Display_ArkoGFormato_1.jpg"); //1

    loadImage("#myModal2 .image-1","img/Display_MuroTecnico_Vitromex_2014_1.jpg"); //6
    loadImage("#myModal2 .image-2","img/Display_MuroTecnico_Vitromex_2014_2.jpg"); //
    loadImage("#myModal2 .image-3","img/Display_MuroTecnico_Vitromex_2014_3.jpg"); //
    loadImage("#myModal2 .image-4","img/Display_MuroTecnico_Vitromex_2014_4.jpg"); //
    loadImage("#myModal2 .image-5","img/Display_MuroTecnico_Vitromex_2014_5.jpg"); //

    loadImage("#myModal .image-1","img/Display_ExhibidorLibro_Arko_1.jpg"); //6
    loadImage("#myModal .image-2","img/Display_ExhibidorLibro_Arko_2.jpg"); //

    loadImage("#myModal3 .image-1","img/Display_ExhibidorLibro_Artemis_2014_1.jpg"); //6
    loadImage("#myModal3 .image-2","img/Display_ExhibidorLibro_Artemis_2014_2.jpg"); //

    loadImage("#myModal4 .image-1","img/Display_ExhibidorLibro_Vitromex_2014_1.jpg"); //6
    loadImage("#myModal4 .image-2","img/Display_ExhibidorLibro_Vitromex_2014_2.jpg"); //

    loadImage("#myModal6 .image-1","img/Display_Cuneros_Vitromex_2014_1.jpg"); //6
    loadImage("#myModal6 .image-2","img/Display_Cuneros_Vitromex_2014_2.jpg"); //
    loadImage("#myModal6 .image-3","img/Display_Cuneros_Vitromex_2014_3.jpg"); //
    loadImage("#myModal6 .image-4","img/Display_Cuneros_Vitromex_2014_4.jpg"); //
    loadImage("#myModal6 .image-5","img/Display_Cuneros_Vitromex_2014_5.jpg"); 

    loadImage("#myModal5 .image-1","img/Display_Cuneros_Gante_2014_1.jpg"); //6
    loadImage("#myModal5 .image-2","img/Display_Cuneros_Gante_2014_2.jpg"); //
  
    loadImage("#myModal8 .image-1","img/Display_Exhibidor_Joyou_2012_1.jpg"); //6
    loadImage("#myModal8 .image-2","img/Display_Exhibidor_Joyou_2012_2.jpg"); //
    
    loadImage("#myModal9 .image-1","img/Display_ExhibidorLibro_Gante_2012_1.jpg"); //6
    loadImage("#myModal9 .image-2","img/Display_ExhibidorLibro_Gante_2012_2.jpg"); //

    loadImage("#myModal10 .image-1","img/Display_ExhibidoresSanitarios_Lamosa_2012_1.jpg"); //6
    loadImage("#myModal10 .image-2","img/Display_ExhibidoresSanitarios_Lamosa_2012_2.jpg"); //
    loadImage("#myModal10 .image-3","img/Display_ExhibidoresSanitarios_Lamosa_2012_3.jpg"); //
    loadImage("#myModal10 .image-4","img/Display_ExhibidoresSanitarios_Lamosa_2012_4.jpg"); //
   
    loadImage("#myModal11 .image-1","img/Display_ExhibidoresSanitarios_Ambiance_2010_1.jpg"); //6
    loadImage("#myModal11 .image-2","img/Display_ExhibidoresSanitarios_Ambiance_2010_2.jpg"); //
    loadImage("#myModal11 .image-3","img/Display_ExhibidoresSanitarios_Ambiance_2010_3.jpg"); //
    
    loadImage("#myModal12 .image-1","img/Display_ExhibidoresSanitarios_Lamosa_2008_1.jpg"); //6
    loadImage("#myModal12 .image-2","img/Display_ExhibidoresSanitarios_Lamosa_2008_2.jpg"); //
    loadImage("#myModal12 .image-3","img/Display_ExhibidoresSanitarios_Lamosa_2008_3.jpg"); //
}

function loadModalImages() {

    loadImage(".myModal13","img/Display_ExhibidorLamosa2016_p.jpg");
    $("#myModal13 .image-1").css('content', 'url("img/Display_ExhibidorLamosa2016_1.jpg")'); //1

    loadImage(".myModal14","img/Display_ContractorBoardLamosa2016_p.jpg");
    $("#myModal14 .image-1").css('content', 'url("img/Display_ContractorBoardLamosa2016_1.jpg")'); //4
    $("#myModal14 .image-2").css('content', 'url("img/Display_ContractorBoardLamosa2016_2.jpg")'); 
    $("#myModal14 .image-3").css('content', 'url("img/Display_ContractorBoardLamosa2016_3.jpg")'); 
    $("#myModal14 .image-4").css('content', 'url("img/Display_ContractorBoardLamosa2016_4.jpg")'); 

    loadImage(".myModal15","img/Display_ExhibidorLamosav12016_p.jpg");
    $("#myModal15 .image-1").css('content', 'url("img/Display_ExhibidorLamosav12016_1.jpg")'); //5
    $("#myModal15 .image-2").css('content', 'url("img/Display_ExhibidorLamosav12016_2.jpg")'); 
    $("#myModal15 .image-3").css('content', 'url("img/Display_ExhibidorLamosav12016_3.jpg")'); 
    $("#myModal15 .image-4").css('content', 'url("img/Display_ExhibidorLamosav12016_4.jpg")'); 
    $("#myModal15 .image-5").css('content', 'url("img/Display_ExhibidorLamosav12016_5.jpg")'); 

    loadImage(".myModal16","img/Display_MurosTecnicosLamosa1_p.jpg");
    $("#myModal16 .image-1").css('content', 'url("img/Display_MurosTecnicosLamosa1_1.jpg")'); //6
    $("#myModal16 .image-2").css('content', 'url("img/Display_MurosTecnicosLamosa1_2.jpg")');
    $("#myModal16 .image-3").css('content', 'url("img/Display_MurosTecnicosLamosa1_3.jpg")');
    $("#myModal16 .image-4").css('content', 'url("img/Display_MurosTecnicosLamosa1_4.jpg")');
    $("#myModal16 .image-5").css('content', 'url("img/Display_MurosTecnicosLamosa1_5.jpg")');
    $("#myModal16 .image-6").css('content', 'url("img/Display_MurosTecnicosLamosa1_6.jpg")');

    loadImage(".myModal17","img/Display_MurosTecnicosLamosa2_p.jpg");
    $("#myModal17 .image-1").css('content', 'url("img/Display_MurosTecnicosLamosa2_1.jpg")'); //4
    $("#myModal17 .image-2").css('content', 'url("img/Display_MurosTecnicosLamosa2_2.jpg")');
    $("#myModal17 .image-3").css('content', 'url("img/Display_MurosTecnicosLamosa2_3.jpg")');
    $("#myModal17 .image-4").css('content', 'url("img/Display_MurosTecnicosLamosa2_4.jpg")');

    loadImage(".myModal18","img/Display_StandItinerante_p.jpg");
    $("#myModal18 .image-1").css('content', 'url("img/Display_StandItinerante_1.jpg")'); //8
    $("#myModal18 .image-2").css('content', 'url("img/Display_StandItinerante_2.jpg")');
    $("#myModal18 .image-3").css('content', 'url("img/Display_StandItinerante_3.jpg")');
    $("#myModal18 .image-4").css('content', 'url("img/Display_StandItinerante_4.jpg")');
    $("#myModal18 .image-5").css('content', 'url("img/Display_StandItinerante_5.jpg")');
    $("#myModal18 .image-6").css('content', 'url("img/Display_StandItinerante_6.jpg")');
    $("#myModal18 .image-7").css('content', 'url("img/Display_StandItinerante_7.jpg")');
    $("#myModal18 .image-8").css('content', 'url("img/Display_StandItinerante_8.jpg")');

    loadImage(".myModal19","img/Display_MaderasLamosa_p.jpg");
    $("#myModal19 .image-1").css('content', 'url("img/Display_MaderasLamosa_1.jpg")'); //3
    $("#myModal19 .image-2").css('content', 'url("img/Display_MaderasLamosa_2.jpg")');
    $("#myModal19 .image-3").css('content', 'url("img/Display_MaderasLamosa_3.jpg")');

    loadImage(".myModal20","img/Display_LanzamientosPorce2016_p.jpg");
    $("#myModal20 .image-1").css('content', 'url("img/Display_LanzamientosPorce2016_1.jpg")'); //5
    $("#myModal20 .image-2").css('content', 'url("img/Display_LanzamientosPorce2016_2.jpg")');
    $("#myModal20 .image-3").css('content', 'url("img/Display_LanzamientosPorce2016_3.jpg")');
    $("#myModal20 .image-4").css('content', 'url("img/Display_LanzamientosPorce2016_4.jpg")');
    $("#myModal20 .image-5").css('content', 'url("img/Display_LanzamientosPorce2016_5.jpg")');

    loadImage(".myModal22","img/Display_MuroTecnicoPorce_p.jpg");
    $("#myModal22 .image-1").css('content', 'url("img/Display_MuroTecnicoPorce_1.jpg")'); //5
    $("#myModal22 .image-2").css('content', 'url("img/Display_MuroTecnicoPorce_2.jpg")');
    $("#myModal22 .image-3").css('content', 'url("img/Display_MuroTecnicoPorce_3.jpg")');
    $("#myModal22 .image-4").css('content', 'url("img/Display_MuroTecnicoPorce_4.jpg")');
    $("#myModal22 .image-5").css('content', 'url("img/Display_MuroTecnicoPorce_5.jpg")');

    loadImage(".myModal23","img/Display_ExhibidoresVariosPorce_p.jpg");
    $("#myModal23 .image-1").css('content', 'url("img/Display_ExhibidoresVariosPorce_1.jpg")'); //6
    $("#myModal23 .image-2").css('content', 'url("img/Display_ExhibidoresVariosPorce_2.jpg")');
    $("#myModal23 .image-3").css('content', 'url("img/Display_ExhibidoresVariosPorce_3.jpg")');
    $("#myModal23 .image-4").css('content', 'url("img/Display_ExhibidoresVariosPorce_4.jpg")');
    $("#myModal23 .image-5").css('content', 'url("img/Display_ExhibidoresVariosPorce_5.jpg")');
    $("#myModal23 .image-6").css('content', 'url("img/Display_ExhibidoresVariosPorce_6.jpg")');

    loadImage(".myModal24","img/Display_PorcelanitePremium2015_p.jpg");
    $("#myModal24 .image-1").css('content', 'url("img/Display_PorcelanitePremium2015_1.jpg")'); //6
    $("#myModal24 .image-2").css('content', 'url("img/Display_PorcelanitePremium2015_2.jpg")');
    $("#myModal24 .image-3").css('content', 'url("img/Display_PorcelanitePremium2015_3.jpg")');
    $("#myModal24 .image-4").css('content', 'url("img/Display_PorcelanitePremium2015_4.jpg")');
    $("#myModal24 .image-5").css('content', 'url("img/Display_PorcelanitePremium2015_5.jpg")');
    $("#myModal24 .image-6").css('content', 'url("img/Display_PorcelanitePremium2015_6.jpg")');

    loadImage(".myModal25","img/Display_ArkoGFormato_p.jpg");
    $("#myModal25 .image-1").css('content', 'url("img/Display_ArkoGFormato_1.jpg")'); //1

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
    $("#myModal6 .image-5").css('content', 'url("img/Display_Cuneros_Vitromex_2014_5.jpg")'); 

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
    $("#myModal10 .image-3").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2012_3.jpg")'); //
    $("#myModal10 .image-4").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2012_4.jpg")'); //
   
    loadImage(".myModal11","img/Display_ExhibidoresSanitarios_Ambiance_2010_p.jpg");
    $("#myModal11 .image-1").css('content', 'url("img/Display_ExhibidoresSanitarios_Ambiance_2010_1.jpg")'); //6
    $("#myModal11 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Ambiance_2010_2.jpg")'); //
    $("#myModal11 .image-3").css('content', 'url("img/Display_ExhibidoresSanitarios_Ambiance_2010_3.jpg")'); //
    
    loadImage(".myModal12","img/Display_ExhibidoresSanitarios_Lamosa_2008_p.jpg");
    $("#myModal12 .image-1").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2008_1.jpg")'); //6
    $("#myModal12 .image-2").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2008_2.jpg")'); //
    $("#myModal12 .image-3").css('content', 'url("img/Display_ExhibidoresSanitarios_Lamosa_2008_3.jpg")'); //
    
}