$(function () {



$('.btnPuntos').click(function() {
        if(!$(this).hasClass('activo')) {
            
            //$('.btnPuntos').removeClass('activo');
            //$('.botonesInfo').removeClass('muestrabtn');
            $(this).addClass('activo').attr("disabled","disabled");
            var dato1=$(this).attr("data-orden");
            console.log("entre "+ dato1);
            $(".botonInfo-"+$(this).attr('data-orden')).addClass('muestrabtn')

            //$($(this).attr('data-target')).addClass('activo');
        }
    })
   
})