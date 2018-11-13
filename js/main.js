$(document).ready(function () {
    
    $( "#header" ).load( "./header.html",function(){
        console.log("header carregado");
    });

    
    $( "#about" ).load( "./sobre.html",function(){
        console.log("about carregado");
    });

    $( "#services" ).load( "./servicos.html",function(){
        console.log("services carregado");
    });

    $( "#education" ).load( "./formacao.html",function(){
        console.log("education carregado");
    });

    $( "#awards" ).load( "./distincoes.html",function(){
        console.log("awards carregado");
    });

    $( "#contact" ).load( "./formulario.html",function(){
        console.log("contact carregado");
    });
  
    var scene = document.getElementById('js-scene');
    var parallax = new Parallax(scene);
});

window.onscroll=function(e){
    checkVisibilityAndMove("myBar", 50);
    checkVisibilityAndMove("myBar_1", 85);
    checkVisibilityAndMove("myBar_2", 80);

    checkVisibilityAndMove("myBar_3", 30);
    checkVisibilityAndMove("myBar_4", 30);
    checkVisibilityAndMove("myBar_5",10);
    
    checkVisibilityAndMove("myBar_6", 80);
    checkVisibilityAndMove("myBar_7", 80);
    checkVisibilityAndMove("myBar_8",90);


    
}
      
function checkVisibilityAndMove(id, percent){
    let domElem = $("#" + id).get(0);

    if(isScrolledIntoView(domElem)){
        move(domElem, percent);
    }   
}

function move(elem, percent) {
    if(elem.style.width === percent + '%') return;
    
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= percent) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
}};

function isScrolledIntoView(elem){
   var $elem = $(elem);
   var $window = $(window);

   var docViewTop = $window.scrollTop();
   var docViewBottom = docViewTop + $window.height();

   var elemTop = $elem.offset().top;
   var elemBottom = elemTop + $elem.height();

   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
