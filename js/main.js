$(document).ready(function () {
        
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
    
    setupNavbar();
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
    var domElem = $("#" + id).get(0);

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

function setupNavbar (){
   	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation(contentSections, navigationItems);
	$(window).on('scroll', function(){
		updateNavigation(contentSections, navigationItems);
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    }); 
}

	function updateNavigation(contentSections, navigationItems) {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}