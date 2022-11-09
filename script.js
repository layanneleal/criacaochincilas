function triplicarChinchilas() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let inAno = document.getElementById('inAno')
  let outResposta = document.getElementById('outResposta')

  //Obtem conteúdo dos campos de entrada
  let animal = Number(inNumero.value)
  let ano = Number(inAno.value)
  
  //Declara variável que irá concatenar resultado
  let resultado = ''

  //Valida a entrada (número inicial maior ou igual a 2)
  if (animal < 2 || animal == 0 ) {
    alert('Digite um número correto (casal)')
    inNumero.onfocus()
    return
  }
  //Cria um laço de repetição de 1 até o ano informado
  for (let i = 1; i <= ano; i ++ ) {
    if (i == 1) { //Se igual a 1, exibe a quantidade informada
      resultado += i + '° ano: ' + animal + ' Chinchilas ' + '\n'

  }else{ //Se não, multiplica a quantidade de chinchilas por 3
      animal = animal * 3
      resultado += i + '° ano: ' + animal + ' Chinchilas ' + '\n'
  }
}
//Exibe o resultado
outResposta.textContent = resultado  

}
//Cria referência ao botão e após associa function ao evento click
let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', triplicarChinchilas)