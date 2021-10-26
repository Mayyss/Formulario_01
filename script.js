'use strict';


//Se no console for trabalhar com promessa a função deve ser async/assincrona
const pesquisarCep = async (cep) => {

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Fetch pega a url e faz uma requisição
    const response = await fetch(url);

    const data = await response.json();

    //console.log(data);
    return data;
    //return `CEP Digitado ${cep}`;

};
//Tudo que colocar entre barra quer dizer expressoes regulares para JS
const cepValido = (cep) => /^[0-9]{8}$/.test(cep);

// const cep = evento.target.value

const limparCampos = () => {
    document.querySelector('#endereco').value = '';
    //document.querySelector('#numero').value = infoCep.complemento;
    document.querySelector('#bairro').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#estado').value = '';
}

const preencherFormulario = async (evento) => //alert('teste focusout')
    {
        // console.log(cep.value);
        // const infoCep = pesquisarCep(cep);

        //const cep = document.querySelector('#cep');
        //console.log(cep.value);
        //console.log(evento.target.value);

        // Função para limpar os campos antes de procurar outro cep
        limparCampos();

        const cep = evento.target.value;
        
        if(cep === '') return 0;

        if(cepValido(cep)){
            const infoCep = await pesquisarCep(cep);
            //console.log(infoCep);
            if(infoCep.erro){
                document.querySelector('#endereco').value = 'CEP Inválido';
            }
            else{
                //REGEX - para usar strings

                document.querySelector('#endereco').value =  infoCep.logradouro;
                //document.querySelector('#numero').value = infoCep.complemento;
                document.querySelector('#bairro').value = infoCep.bairro;
                document.querySelector('#cidade').value = infoCep.localidade;
                document.querySelector('#estado').value = infoCep.uf;
            
            }
            }
        else{
            document.querySelector('#endereco').value = 'CEP Incorreto';
        }
        
        
    };

document.querySelector('#cep')
        .addEventListener('focusout', preencherFormulario);

        //Invocar uma função
        //Comando para invocar a função - ()

        //Expressões regulares
        // ? - opcional ou seja pode ou nao ter

/* O que o prof fez */    

// const primeiraMaiuscula = (evento) => {
//     console.log(evento.targer.value.lenght)
//     if(evento.target.value.lenght === 1 ) evento.target.value = evento.target.value.toUpperCase();
// }

// document.querySelector('#cep')
//         .addEventListener("keyup", primeiraMaiuscula);