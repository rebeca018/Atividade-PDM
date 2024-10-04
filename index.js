const somar = function(){
  
    let numero1 = parseFloat(document.getElementById("numero1").value)
    let numero2 = parseFloat(document.getElementById("numero2").value)
    let soma = numero1 + numero2
      console.log( soma)
      
    let saida = document.getElementById("res")
      saida.innerHTML= "O resultado da soma é " +soma
      
}

const media = function(){
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let nota4 = parseFloat(document.getElementById("nota4").value)

    let media = (nota1 + nota2 + nota3 + nota4)/4

    if (media >= 7){
        let saida = document.getElementById("nota")
        saida.innerHTML= "Aprovado"
    } else{
        let saida = document.getElementById("nota")
        saida.innerHTML= "Reprovado"
    }
}

const tabuada = function(){
  
    let number = parseFloat(document.getElementById("number").value)
    let zero = number * 0
    let um = number * 1
    let dois = number * 2
    let tres = number * 3
    let quatro = number * 4
    let cinco = number * 5
    let seis = number * 6
    let sete = number * 7
    let oito = number * 8
    let nove = number * 9
    let dez = number * 10


    let saida = document.getElementById("t")
      saida.innerHTML= number + " x 0 = " + zero + "<br>" + 
      number + " x 1 = " + um + "<br>" + 
      number + " x 2 = " + dois + "<br>" + 
      number + " x 3 = " + tres + "<br>" + 
      number + " x 4 = " + quatro + "<br>" + 
      number + " x 5 = " + cinco + "<br>" + 
      number + " x 6 = " + seis + "<br>" + 
      number + " x 7 = " + sete + "<br>" + 
      number + " x 8 = " + oito + "<br>" + 
      number + " x 9 = " + nove + "<br>" + 
      number + " x 10 = " + dez;
      
}

const maiorValor = function(){
    let number1 = parseFloat(document.getElementById("number1").value)
    let number2 = parseFloat(document.getElementById("number2").value)
    let number3 = parseFloat(document.getElementById("number3").value)
    let number4 = parseFloat(document.getElementById("number4").value)
    
    if (number1 == -1 || number2 == -1 || number3 == -1 || number4 == -1){
        let valores = [number1, number2, number3];
        valores = valores.filter(v => v > 0);

        if (valores.length > 0) {
            const maior = Math.max(...valores);

            let saida = document.getElementById("m")
            saida.innerHTML= "O maior valor é " + maior
        } else{
            let saida = document.getElementById("m")
            saida.innerHTML= "Sem valores positivos"
        }
    }
}

const impar = function(){
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let impar = []

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] % 2 !== 0){
            impar += vetor[i]
        }
    }

    let saida = document.getElementById("i")
    saida.innerHTML= "Valores ímpares: " + impar
}

const nomeReverse = function(){
    let nome = document.getElementById("nome").value;
    let nomeInvertido = nome.split('').reverse().join('');

    let saida = document.getElementById("n")
    saida.innerHTML= nomeInvertido
}

        
const funcionarios = [];
const salarioMinimo = 1412.00; 
        
const cadastreFuncionario = function() {
    const nome = document.getElementById("nomef").value;
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const salario = parseFloat(document.getElementById("salario").value);

    const funcionario = {
        nome: nome,
        idade: idade,
        sexo: sexo,
        salario: salario
    };

    funcionarios.push(funcionario);

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("salario").value = "";

}

const exibeFuncionario = function () {
    let resultado = "Funcionários que ganham mais de um salário mínimo:<br>";

    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario >= salarioMinimo) {
            resultado += `Nome: ${funcionarios[i].nome}, Idade: ${funcionarios[i].idade}, Sexo: ${funcionarios[i].sexo}, Salário: R$ ${funcionarios[i].salario.toFixed(2)}<br>`;
        }
    }

    if (resultado === "Funcionários que ganham mais de um salário mínimo:<br>" ){
        resultado = "Nenhum funcionário cadastrado que ganhe mais de um salário mínimo"
    }

    let saida = document.getElementById("funcionarios")
    saida.innerHTML= resultado;
}


function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão impossível";
    }
    return a / b;
}

const calcular = function(){
    let a = parseFloat(document.getElementById("calc1").value)
    let b = parseFloat(document.getElementById("calc2").value)

    const resAdicao = adicao(a, b)
    const resSubt = subtracao(a, b)
    const resMulti = multiplicacao(a, b)
    const resDivisao = divisao(a, b)

    let saida1 = document.getElementById("adicao")
    saida1.innerHTML= a + " + " + b + " = " + resAdicao

    let saida2 = document.getElementById("subt")
    saida2.innerHTML= a + " - " + b + " = " + resSubt

    let saida3 = document.getElementById("multi")
    saida3.innerHTML= a + " × " + b + " = " + resMulti

    let saida4 = document.getElementById("divisao")
    saida4.innerHTML= a + " ÷ " + b + " = " + resDivisao
}
