$(function(){            
    //Funções para abrir e fechar formulário
    
    function abrirJanela(){
        $('.registration_user_button').click(function(e){
            e.stopPropagation();
            $('.registration_user').fadeIn();
        });
    }

    function verificarCliqueFechar(){
        var el = $('body, .closeBtn');

        el.click(function(){
            $('.registration_user').fadeOut();
        })

        $('.form').click(function(e){
            e.stopPropagation();
        })
    }
    abrirJanela();
    verificarCliqueFechar();
})