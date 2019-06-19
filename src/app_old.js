;(function ($) {
    $contact = $('#contact');
    $name = $('#name');
    $email = $('#email');
    $phone = $('#phone');
    $website = $('#website');
    $message = $('#message');
    $submit = $('#submit');
    
    fill();
    
    function fill() {
        $('#name').val('Rafael');
        $('#email').val('rafael7rodrigues@gmail.com');
        $('#phone').val('+5561 99999-9999');
        $('#website').val('http://google.com.br');
        $('#message').val('Mensagem a ser enviada');
    }

    $contact.on('submit', function (event) {
        event.preventDefault();

        var payload = {
            name: $name.val(),
            email: $email.val(),
            phone: $phone.val(),
            website: $website.val(),
            message: $message.val(),
        }

        $name.attr('disabled', true);
        $email.attr('disabled', true);
        $phone.attr('disabled', true);
        $website.attr('disabled', true);
        $message.attr('disabled', true);
        $submit.attr('disabled', true);

        setTimeout(function () {
            $name.val('');
            $email.val('');
            $phone.val('');
            $website.val('');
            $message.val('');

            alert('Mensagem enviada com sucesso');

            $name.focus();
            $name.attr('disabled', false);
            $email.attr('disabled', false);
            $phone.attr('disabled', false);
            $website.attr('disabled', false);
            $message.attr('disabled', false);
        }, 2000);
    });
})(jQuery);
