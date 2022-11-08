function triplicarChinchilas() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let inAno = document.getElementById('inAno')
  let outResposta = document.getElementById('outResposta')

  let animal = Number(inNumero.value)
  let ano = Number(inAno.value)


  let resultado = ''

  if (animal <= 2 && animal == 0 ) {
    alert('Digite um número correto (casal)')
    inNumero.onfocus()
    return
  }

  for (let animal = 1; animal <= ano; animal ++ ) {
    if (animal == 1) {
      resultado += animal + '° ano: ' + animal + '\n'

  }else{
      animal = animal * 3
      resultado += animal + '° ano: ' + animal + '\n'
  }
}
  outResposta.textContent = resultado

}
let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', triplicarChinchilas)