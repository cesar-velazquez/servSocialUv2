//MODALES DEL 1-2

// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Función para cerrar el modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
//MODALES DEL 1-2


$(function() {

    $('.btn-colapsar:not(.btn-collpse)').click(function() {
        if ($(this).hasClass('expandido')) {
            $(this).removeClass('expandido');
            $(this).removeClass('btn-expandido');
            $(this).find('i').removeClass('fa-times');
            $(this).find('i').addClass('fa-plus');
        }
        else {
            $(this).addClass('expandido');
            $(this).addClass('btn-expandido');
            $(this).find('i').addClass('fa-times');
            $(this).find('i').removeClass('fa-plus');
        }
    });

    $('.btn-collpse').on('click', function() {
        if ($(window).width() >= 768) {
            if ($(this).hasClass('expandido')) {
                $(this).removeClass('expandido');
                $(this).find('i').removeClass('fa-minus');
                $(this).find('i').addClass('fa-plus');
            }
            else {
                $(this).addClass('expandido');
                $(this).find('i').addClass('fa-minus');
                $(this).find('i').removeClass('fa-plus');
            }
            var objetivo = $(this).attr('data-target');
            $(objetivo).collapse('toggle');
        }
        else {
            var url = $(this).attr('url-target');
            var link = document.createElement('a');
            document.body.appendChild(link);
            link.href = url;
            link.download = '';
            link.click();
        }
    });
    
    function cambiarNavbarDependiendoDeScroll() {

        var navbar = $('.js-pleca');
        var btnhome = $('.btn-home');
        // var texto_tema = $('.pleca__ee');
        
        if ($(window).scrollTop() > 80) {
            navbar.addClass('scroll');
            // texto_tema.addClass('aparecer-desaparecer');
            // btnmenu.addClass('text-dark');
            // btnmenu.removeClass('margin-top-btn-2');
        } else {
            navbar.removeClass('scroll');
            // texto_tema.removeClass('aparecer-desaparecer');
            // btnmenu.removeClass('text-dark');
            // btnmenu.addClass('margin-top-btn-2');
        }
    }

    $(window).scroll(function (event) {
        cambiarNavbarDependiendoDeScroll();
    });

    $('.sidebar__dismiss, .overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        // $('.js-sidebar__collapse').attr('aria-expanded', 'false');
    });

    $('.js-sidebar__collapse').on('click', function () {
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        // $('.js-sidebar__collapse'). attr('aria-expanded', 'true');
    });

    $('.js-sidebar__collapse').on('click', function () {
       $('header').attr('aria-hidden', 'true');
       $('main').attr('aria-hidden', 'true');
       $('footer').attr('aria-hidden', 'true');
    });

    $('.sidebar__dismiss, .overlay').on('click', function () {
        $('header').attr('aria-hidden', 'false');
        $('main').attr('aria-hidden', 'false');
        $('footer').attr('aria-hidden', 'false');
     });

    $('#top').click(function(){
		$('body,html').animate({
			scrollTop:0
		},300)
	});

});

//MOSTRAR Y OCULTAR GUION
var toggleButton = document.getElementById('toggleButton');
var content = document.getElementById('content');

toggleButton.addEventListener('click', function() {
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    toggleButton.textContent = 'Script de video';
  } else {
    content.classList.add('hidden');
    toggleButton.textContent = 'Script de video';
  }
});


//RECURSO DE FAQS 1-3
function toggleAnswer(index) {
    var answer = document.getElementById("answer" + index);
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  }

