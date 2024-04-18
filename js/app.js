function Calcular() {

    let div = document.getElementById('resultado'); /* pega as variaveis para uso */

    let nome = document.getElementById('nome').value;
    let cadeira = document.getElementById('cadeira').value;
    let filme = document.getElementById('filme').value;
    let combo = document.getElementById('combo').value;

    let valorFilme; /* variaveis para uso de conta */
    let valorCombo;



    if(filme == 'É assim que acaba' ) { /* define o valor do ingresso de acordo com o filme escolhido */

        valorFilme = 22.5;

    } else if ( filme == 'Godzilla vs Kong') {

        valorFilme = 30;

    } else if ( filme == 'Velozes e Furiosos 10') {

        valorFilme = 26;

    } else if ( filme == 'Procurando Nemo') {

        valorFilme = 28;

    } else if ( filme == 'Como Eu Era Antes de Você') {

        valorFilme = 25.5;

    } 


    if(combo == 'Pipoca com refrigerante' ) { /* define o valor do combo segundo o combo escolhido */

        valorCombo = 37.5;

    } else if ( combo == 'Pipoca doce e refrigerante') {

        valorCombo = 35;

    } else if ( combo == 'Mini pizza com suco de laranja') {

        valorCombo = 26.5;

    } else if ( combo == 'Frango frito com refrigerante') {

        valorCombo = 35.5;

    } else if ( combo == 'Salgadinhos com dois copos de refrigerantes 500ml') {

        valorCombo = 60;

    } 

    let pagar = valorFilme + valorCombo; /* variavel para fazer a soma do valor do ingresso ou filme */

    const arrPessoa = []

    const pessoa = { /* guardar as variaveis para exibir */

        Nome: nome,
        Cadeira: cadeira,
        Filme: filme,
        Combo: combo,
        Pagar: pagar,
       

    }

    arrPessoa.push(pessoa);

    imprimir();

    console.log(arrPessoa);

    function imprimir () { /* imprimi tudo na tabela */


        for (let i = 0; arrPessoa.length; i++) {

            div.innerHTML += ` 

                <tr>

                    <td class="th" > ${arrPessoa[i].Nome} </td>
                    <td class="th" > ${arrPessoa[i].Cadeira} </td>
                    <td class="th" > ${arrPessoa[i].Filme} </td>
                    <td class="th" > ${arrPessoa[i].Combo} </td> 
                    <td class="th" > ${arrPessoa[i].Pagar} </td>

                </tr>

            `
            }

    } 
}