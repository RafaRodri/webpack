/* Para simplificar, vamos usar o ES2015 e extrair do objeto retornado todas as propriedades informadas,
 * e elas se tornarão constantes dentro do fale.js.
 * Assim se torna desnecessário chamar os métodos com o formlib antes (ex.: formlib.getElements()) */

// var formlib = require('./lib/formlib');
/**
 * Importar métodos com ES2015, extraindo todas as propriedades do objeto retornado,
 * e elas se tornarão const dentro deste arquivo **/
const {getElements, getPayload, clearPayload, setDisabled, clearForm} = require('./lib/formlib');


var elementIds = ['contact', 'name', 'email', 'phone', 'website', 'message', 'submit'];

/* Método para acessar os DOM Elements e coloca-los encapsulados dentro de um objeto jQuery */
var elements = getElements(elementIds);


/* Chamar método utilitário para preencher o formulário */
fill();

function fill() {
    $('#name').val('Rafael');
    $('#email').val('rafael7rodrigues@gmail.com');
    $('#phone').val('+5561 99999-9999');
    $('#website').val('http://google.com.br');
    $('#message').val('Mensagem a ser enviada');
}

elements.contact.on('submit', function (event) {
    event.preventDefault();

    var values = getPayload(elements);
    var payload = clearPayload(values);

    setDisabled(elements, true);

    setTimeout(function () {
        clearForm(elements);
        setDisabled(elements, false)
        elements.name.focus();
        alert('Mensagem enviada com sucesso');
    }, 2000);
});
