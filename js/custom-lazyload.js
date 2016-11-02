$(function() {
    
    $("img.lazy-p").lazyload();

    $("img.lazy").lazyload({
        threshold : 200
    });
});