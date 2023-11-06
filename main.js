$(document).ready(function() {
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle(); /*slideDown e slideUp*/
    })
    
    $('#phone').mask('(00) 00000-0000')
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            produtoDeInteresse: {
                required: false
            }
        },
    
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu email',
            telefone: 'Por favor, insira seu telefone',
            mensagem: 'Por favor, insira sua dúvida ou mensagem'
        },
    
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    
    $('#produtos button').click(function(event) {
        event.preventDefault();

        const destino = $('#contato');
        const nomeProduto = $(this).closest('a').find('h3').text();
    
        $('#produto-interesse').val(nomeProduto);
    
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 100)
    })
})