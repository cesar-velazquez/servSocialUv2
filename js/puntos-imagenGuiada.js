$(function () {

    $('.elemento-cosmetico').click(function () {
        if (!$(this).hasClass('visitado')) {
            $('.elemento-cosmetico.activo').addClass('visitado');
            $('.elemento-cosmetico.activo').removeClass('activo');
            $(this).addClass('activo');
            $($(this).attr('data-target')).addClass('visible');
        }
    })

    $('.numero').click(function() {
        if(!$(this).hasClass('activo')) {
            $('.numero.activo').removeClass('activo');
            $('.contenido-etiqueta.activo').removeClass('activo');
            $(this).addClass('activo');
            $($(this).attr('data-target')).addClass('activo');
        }
    })

$('.btnPuntos').click(function() {
        if(!$(this).hasClass('activo')) {
            
            $('.btnPuntos').removeClass('activo');
            $('.botonesInfo').removeClass('muestrabtn');
            $(this).addClass('activo');
            var dato1=$(this).attr("data-orden");
            console.log("entre "+ dato1);
            $(".botonInfo-"+$(this).attr('data-orden')).addClass('muestrabtn')

            //$($(this).attr('data-target')).addClass('activo');
        }
    })





   
})