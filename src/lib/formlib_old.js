/* Implementar 'getElements', retornando um objeto com os 'ids' como propriedades e o objeto jQuery com o elementro DOM dentro */
function getElements(ids) {
    /* reduce recebe método de callback e o elemento que será passado para o método de callback a cada passo do loop
     * ao final será retornado o accumulator, que foi complementado com novos elementos a cada passo do loop */
    return ids.reduce(function (accumulator, id) {
        accumulator[id] = $('#' + id);
        return accumulator;
    }, {});
}

/* Fazemos a leitura dos elementos */
function getPayload(elements) {
    /* Como elements é um objeto, não podemos fazer um loop com foreach, reduce e map por exemplo
     * Por isso, vamos transforma-lo novamente em um array
     * Passando o objeto ao qual se quer ler as chaves e transformar em array, e este sim terá o método reduce */
    return Object.keys(elements).reduce(function (accumulator, propriedade) {
        /* Temos acesso a um elemento jQuery por meio de "elements[propriedade].val()", e assim podemos ler o seu valor */
        accumulator[propriedade] = elements[propriedade].val()
        return accumulator;
    }, {});
}

/* limpar objeto, tirando chaves que estão vazias, como "contact" e "submit", que não são campos do form */
function clearPayload(payload) {
    Object.keys(payload).forEach(function (propriedade) {
        if (payload[propriedade] === '') {
            delete payload[propriedade];
        }
    });

    return payload;
}

/* Desabilitar os elementos enquanto se faz o envio dos dados */
function setDisabled(elements, state) {
    /* Como não queremos retornar nada, usaremos apenas o forEach */
    Object.keys(elements).forEach(function (propriedade) {
        /* como é um jQuery, podemos usar o método 'attr' */
        elements[propriedade].attr('disabled', state);
    });
}

/* Limpar Form */
function clearForm(elements) {
    Object.keys(elements).forEach(function (propriedade) {
        elements[propriedade].val('');
    })
}


module.exports = {
    getElements: getElements,
    getPayload: getPayload,
    clearPayload: clearPayload,
    setDisabled: setDisabled,
    clearForm: clearForm
}
