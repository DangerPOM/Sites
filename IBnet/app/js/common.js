    document.body.style.background = 'url(img/3.jpg) no-repeat';
    (function() {
    var i = 0;
    var src = [
        'img/2.jpg',
        'img/5.jpg'
    ];
    var l = src.length;
    var t;
    
    for(i = 0; i < l; i++) {
        var img = new Image();
        img.src = src[i];
        img.onload = function() {
            $(this).fadeOut();
        }
    }
    
    i = 0;
    t = setInterval(function() {
        if(i === l){
            i = 0;
        }
        document.body.style.background = 'url(' + src[i] + ')no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.overflow = 'hidden';
        i++;
    }, 6000);
    })();    

