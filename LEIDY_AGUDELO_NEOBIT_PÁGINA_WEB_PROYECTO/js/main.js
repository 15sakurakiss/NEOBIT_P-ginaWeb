// JavaScript Document
$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPosition = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide

	// Ejecutamos todas las funciones
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 6000);


	// FUNCIONES 

	function nextSlider(){
		if( imgPosition >= imgItems){imgPosition = 1;} 
		else {imgPosition++;}

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPosition +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPosition <= 1){imgPosition = imgItems;} 
		else {imgPosition--;}


		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPosition +')').fadeIn(); // Mostramos el Slide seleccionado
	}


//animación del logo

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop(); 

		if (scroll){
				$("#logo").css({"margin-top": "2px", "margin-left": "2px", "width": "85px", "height":"85px"});
				flag = true;
		}
		else{
			$("#logo").css({"margin-top": "100px", "margin-left": "15px", "width": "382px", "height":"382px"});
		}
	})
	

	});


//animación NEOBIT


$(document).ready(function () {

    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((14 * mouseX) / 600) + 50;
        traY = ((14 * mouseY) / 600) + 50;
        console.log(traX);
        $(".title").css({
            "background-position": traX + "%" + traY + "%"
        });
    });

});