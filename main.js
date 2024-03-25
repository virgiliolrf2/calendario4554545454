const mes = ['janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro', 'novembro', 'dezembro'];

function pegarmes (mesatual){
    let date = new Date();
    var mesatual = date.getMonth();
    const mesescrito = mes[mesatual];
    console.log (mesescrito)
    mesdisplay = document.querySelector('.mesatual')
    mesdisplay.innerHTML = mesescrito
}
pegarmes()

dias.addEventListener("click", function() {
    var modal = document.createElement('div');
    modal.classList.add('modal');
    var countedo = document.querySelector('.conteudo')
    countedo.appendChild(modal);

    var botaofechar = document.createElement('button')
    botaofechar.innerText = 'X'
    botaofechar.classList.add('botaofechar');
    modal.appendChild(botaofechar)

    var adicionarumatarefa = document.createElement('h3');
    adicionarumatarefa.innerHTML = 'Oi'
    adicionarumatarefa.classList.add('texto');
    modal.appendChild(adicionarumatarefa);

    var botaocreate = document.createElement('button')
    botaocreate.innerText = 'Criar'
    botaocreate.classList.add('botaocriar');
    modal.appendChild(botaocreate)


});