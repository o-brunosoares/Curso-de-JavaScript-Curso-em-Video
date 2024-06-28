function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO!] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            res.innerHTML = `Detectamos um ${genero.toLowerCase()} de ${idade} anos.`
            if (idade >= 0 && idade < 10) {
                genero = 'menino'
                res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
                img.setAttribute('src', 'images/garoto.png')
            } else if (idade < 21) {
                genero = 'garoto'
                res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
                img.setAttribute('src', 'images/adolescente-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/homem.png')
            } else {
                img.setAttribute('src', 'images/idoso.png')
            }
        } else {
            genero = 'Mulher'
            res.innerHTML = `Detectamos uma ${genero.toLowerCase()} de ${idade} anos.`
            if (idade >= 0 && idade < 10) {
                genero = 'menina'
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
                img.setAttribute('src', 'images/garota.png')
            } else if (idade < 21) {
                genero = 'garota'
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
                img.setAttribute('src', 'images/adolescente-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/mulher.png')
            } else {
                img.setAttribute('src', 'images/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
        img.style.padding = '20px'
    }
}