/* VARIAVEIS GLOBAIS */
let tabela = document.querySelector("#tabela");
let ref = document.querySelector("#tabela h1");
let button = document.querySelector("#submit");

let count = 0;

/* FUNÇÃO TABUADA */
function tabuada(event) {
    event.preventDefault();

    const tr = document.createElement("tr");
    tr.id = 'sub';

    let input = document.querySelector("#mult");
    let converte = input.value;

    /* FAZENDO A MULTIPLICAÇÃO DINAMICAMENTO E ADICIONANDO AO SITE*/
    for(var i = 0; 10 >= i; i++) {


        const td = document.createElement("td");

        let result = converte * i;

        let resultText = document.createTextNode(`${converte} x ${i} = ${result}`);
        td.appendChild(resultText);
        tr.appendChild(td);

        tabela.insertBefore(tr, ref);

        input.value = "";
    }

    /* VERIFICANDO SE A UM ELEMENTO TR NA TABELA E REMOVENDO PARA ADICIONAR UM NOVO */
    let veri = document.contains(document.getElementsByTagName('tr')[0]);
    let one = document.getElementsByTagName('tr')[0]

    if(veri == true && count >= 1) {
        tabela.removeChild(one);
    }
    
    count++;
};

/* CHAMANDO A FUNÇÃO */
button.addEventListener('click', tabuada);