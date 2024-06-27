function carregar() {
    // Seleção por Query Selector
    var msg = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`;

    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `Bom dia! ${msg.innerHTML}`
        img.src = 'images/dia-250.png'
        document.body.style.backgroundColor = '#FED642'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! ${msg.innerHTML}`
        img.src = 'images/tarde-250.png'
        document.body.style.backgroundColor = '#FC7F05'
    } else if (hora >= 18 && hora < 20) {
        msg.innerHTML = `Boa noite! ${msg.innerHTML}`
        img.src = 'images/noite-250.png'
        document.body.style.backgroundColor = '#862B5B'
    } else {
        msg.innerHTML = `Boa noite! ${msg.innerHTML}`
        img.src = 'images/noite-madrugada-250.png'
        document.body.style.backgroundColor = '#041C3B'
    }
}

function troca() {
    var tempo = document.getElementById('time')
    var horario = Number(tempo.value)
    hora = horario

    var img = document.querySelector('#imagem');
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`;

    if (tempo.value.length == 0 || hora >= 24) {
        alert('[ERRO] Verifique as informações e preencha novamente!')
    } else if (hora >= 3 && hora < 6) {
        msg.innerHTML = `Bom dia! ${msg.innerHTML}`
        img.src = 'images/noite-madrugada-250.png'
        document.body.style.backgroundColor = '#041C3B'
    } else if (hora >= 6 && hora < 12) {
        msg.innerHTML = `Bom dia! ${msg.innerHTML}`
        img.src = 'images/dia-250.png'
        document.body.style.backgroundColor = '#FED642'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! ${msg.innerHTML}`
        img.src = 'images/tarde-250.png'
        document.body.style.backgroundColor = '#FC7F05'
    } else if (hora >= 18 && hora < 20) {
        msg.innerHTML = `Boa noite! ${msg.innerHTML}`
        img.src = 'images/noite-250.png'
        document.body.style.backgroundColor = '#862B5B'
    } else {
        msg.innerHTML = `Boa noite! ${msg.innerHTML}`
        img.src = 'images/noite-madrugada-250.png'
        document.body.style.backgroundColor = '#041C3B'
    }
}