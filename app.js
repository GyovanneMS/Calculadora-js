console.log('Calculadora simples');

const { type } = require('os');
const { exit } = require('process');
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o número 1: ', function(valor1){
    let numero1 = parseFloat(valor1); //Declarando a váriavel e tranformando emm float

    //typeof =-> verifica qual o tipo dado de uma variável ou  de um objeto
    //console.log(typeof(x));
    entradaDados.question('Digite o número 2: ', function(valor2){
        let numero2 = parseFloat(valor2);

        entradaDados.question('Escolha a operção a ser operada, somar[+], subtrair[-], multiplicar[*], dividir[/] ou fechar[X]: ', function (respostaOp){
            let operacao = respostaOp.toUpperCase();
            //Declarando a variável que vai receber o tipo de variável e converter o texto para maiúsculo com o toUpperCase, o toLowerCase converte para minuscúlo
            let resultado;
            let erro = false

            //chama a função que realizara os calculos matemáticos
            if(resultado = calcular(numero1, numero2, operacao))
                console.log('O resultado é ' + resultado);

            exit();
        });
    });
});
