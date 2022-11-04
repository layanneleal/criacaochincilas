function triplicarChinchilas() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let inAno = document.getElementById('inAno')
  let outResposta = document.getElementById('outResposta')

  let numero = Number(inNumero.value)
  let ano = Number(inAno.value)

  if (numero < 2 && numero == 0 ) {
    alert('Digite um número correto (casal)')
    inNumero.onfocus()
    return
  }
  

}