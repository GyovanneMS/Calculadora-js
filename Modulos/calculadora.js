/* ====================================================================================================================================================================================================================================
   Objetivo: Arquivo que possuí todas as funções para calculos matemáticos.
   Autor: Gyovanne Martins
   Data: 01/08/2022
   Nível do autor: Estudante
   Versão: 1.0.0
        * Arrumar bug = x.x.+1
        ** Adcionar elementos nas functions existentes = x.+1.x
        *** Adicionar function = +1.x.x
   ======================================*/

//método tradicional de se criar uma função
function calcular (valor1, valor2, opcaoCalculo) {

    //Criando varáveis locais recebendo os argumentos que foram encaminhados para a function
    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();
    let resultado;
    let erro = false;

    if(isNaN(numero1) || isNaN(numero2)){
        console.log('Por favor, utilize apenas números, não outros caracteres.');
        erro = true;
        //exit();
    }
    //!== dependendo de como for formado o significado pode mudar, mas tipagem e conteúdo diferente
    
    if(operacao == 'SOMAR' || operacao == '+'){
        resultado = numero1 + numero2;
    }
    else if(operacao == 'SUBTRAIR' || operacao == '-'){
        resultado = numero1 - numero2;
    }
    else if(operacao == 'MULTIPLICAR' || operacao == '*'){
        resultado = numero1 * numero2;
    }
    else if(operacao == 'DIVIDIR' || operacao == '/'){
        if (numero2 == 0){
            console.log('Não é possível dividir por 0.');
            erro = true;
            //exit();
        }
        else{resultado = numero1 / numero2;};
    }
    else if(operacao == 'FECHAR' || operacao == 'X'){
        console.log('Obrigado por usar o programa.');
        erro = true;
        //exit();
    }
    else{
        console.log('Não compreendo o que tentaste fazer, por favor repita escrevendo certo.');
        erro = true;
        //exit();
    }

    if(erro){
        return false;
    }
    else{
        return resultado;
    }
    
}
//AS funções que serão usadas nos outros projetos, serão incluidas no module.exports, as funções que não serão adcionadas no module.exports, ficarão localmente neste arquivo 
module.exports = {
    calcular
}