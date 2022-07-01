function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert('[Erro] Verifique os dados e tente novamente')
  } else {
    var fsex =document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'criancaHomem.jpg')
      } else if (idade < 25) {
        //Jovem
        img.setAttribute('src', 'jovemHomem.jpg')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'adultoHomem.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'idosoHomem.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'criancaMulher.jpg')
      } else if (idade < 25) {
        //Jovem
        img.setAttribute('src', 'jovemMulher.jpg')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'adultoMulher.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'idosoMulher.jpg')
      }
    }
    res.style.textAlign ='center'
    res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}