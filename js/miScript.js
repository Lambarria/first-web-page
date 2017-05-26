
$(document).ready(function(){

	/* Propiedades modal */
	$('.modal-trigger').leanModal({
		dismissible: false,
		opacity: 1,
		in_duration: 400,
		out_duration: 200		
	});

	/* Botón on/off */
	window.onload = function(){
    	var audio  = document.getElementById("risaJoker");
    	var button = document.getElementById("on_off"); 
    	//autoplay
        button.value = "play";
    	//toggle
    	button.onclick = function(){
        	if(button.value == 'play'){
            	audio.play();
            	button.value = "pause";
        	} else {
            	audio.pause();
             	button.value = "play";
        	}
    	}
	}

	/* Inicializar tooltipped */
	$('.tooltipped').tooltip({delay: 50});

	/* Inicializar parallax */
	$('.parallax').parallax();

	/* Activar autoreproducción de video */
	$('#playOrigins').click(function(){
		url = $('#trailerOrigins').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerOrigins').attr('src',url);
	});
	/* Desactivar autoreproducción de video */
	$('#stopOrigins').click(function(){
		url = $('#trailerOrigins').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerOrigins').attr('src',url);
	});

	$('#playAsylum').click(function(){
		url = $('#trailerAsylum').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerAsylum').attr('src',url);
	});

	$('#stopAsylum').click(function(){
		url = $('#trailerAsylum').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerAsylum').attr('src',url);
	});

	$('#playCity').click(function(){
		url = $('#trailerCity').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerCity').attr('src',url);
	});

	$('#stopCity').click(function(){
		url = $('#trailerCity').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerCity').attr('src',url);
	});

	$('#playKnight').click(function(){
		url = $('#trailerKnight').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerKnight').attr('src',url);
	});

	$('#stopKnight').click(function(){
		url = $('#trailerKnight').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerKnight').attr('src',url);
	});

	$('#playFantasma').click(function(){
		url = $('#trailerFantasma').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerFantasma').attr('src',url);
	});

	$('#stopFantasma').click(function(){
		url = $('#trailerFantasma').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerFantasma').attr('src',url);
	});

	$('#playTDKR1').click(function(){
		url = $('#trailerTDKR1').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerTDKR1').attr('src',url);
	});

	$('#stopTDKR1').click(function(){
		url = $('#trailerTDKR1').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerTDKR1').attr('src',url);
	});

	$('#playTDKR2').click(function(){
		url = $('#trailerTDKR2').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerTDKR2').attr('src',url);
	});

	$('#stopTDKR2').click(function(){
		url = $('#trailerTDKR2').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerTDKR2').attr('src',url);
	});

	$('#playYearOne').click(function(){
		url = $('#trailerYearOne').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerYearOne').attr('src',url);
	});

	$('#stopYearOne').click(function(){
		url = $('#trailerYearOne').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerYearOne').attr('src',url);
	});

	$('#playBeyond').click(function(){
		url = $('#trailerBeyond').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerBeyond').attr('src',url);
	});

	$('#stopBeyond').click(function(){
		url = $('#trailerBeyond').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerBeyond').attr('src',url);
	});

	$('#playRedHood').click(function(){
		url = $('#trailerRedHood').attr('src');
    	if(url.indexOf('autoplay=1') != -1){            
    	} else {
       	url = url + 'autoplay=1';
    	}
    	$('#trailerRedHood').attr('src',url);
	});

	$('#stopRedHood').click(function(){
		url = $('#trailerRedHood').attr('src');
    	url = url .replace('autoplay=1','');
    	$('#trailerRedHood').attr('src',url);
	});

	/* Limpiar barra de búsqueda*/
	$('#buscadorGoogle').blur(function(){
		$(this).val("");
	});

	/* Lanzar busqueda del campo de texto al buscador de Google */
	$('#buscadorGoogle').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		/* Dectectar si se ha presionado la tecla Enter*/
		if (keycode == 13) {
			/* Obtener texto del campo de texto*/
			var busqueda = (document.getElementById('buscadorGoogle').value);
			/* Agregar busqueda a Google */
			url = 'http://www.google.com/search?q=' + encodeURIComponent(busqueda);
			/* Abrir busqueda en una nueva pestaña */
			window.open(url);
		}
	});

	/* Iniciar slider */
	$('.slider').slider();

	/* Iniciar materialboxed */
	$('.materialboxed').materialbox();
});
