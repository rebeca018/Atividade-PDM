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
      saida.innerHTML= number+ "x0=" + zero + "     " + number+ "x1=" + um + "     " + number+ "x2=" + dois + "     " + number+ "x3=" + tres + "     " + number+ "x4=" + quatro + "     " + number+ "x5=" + cinco + "     " + number+ "x6=" + seis + "     " + number+ "x7=" + sete + "     " + number+ "x8=" + oito + "     " + number+ "x9=" + nove + "     " + number+ "x10=" + dez
      
}

const maiorValor = function(){
    let number1 = parseFloat(document.getElementById("number1").value)
    let number2 = parseFloat(document.getElementById("number2").value)
    let number3 = parseFloat(document.getElementById("number3").value)
    
    if (number1 == -1 || number2 == -1 || number3 == -1){
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

    vetor.filter()
}