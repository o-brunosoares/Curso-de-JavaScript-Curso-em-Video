function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`;

    if (hora >= 6 && hora < 12) {
        document.body.style.background = '#FED642'
        img.src = 'images/dia-250.png'
        msg.innerHTML = 'Bom dia! ' + msg.innerHTML;
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#FC7F05'
        img.src = 'images/tarde-250.png'
        msg.innerHTML = 'Boa tarde! ' + msg.innerHTML;
    } else if (hora >= 18 && hora < 20) {
        document.body.style.background = '#862B5B'
        img.src = 'images/noite-250.png'
        msg.innerHTML = 'Boa noite! ' + msg.innerHTML;
    } else {
        document.body.style.background = '#041C3B'
        img.src = 'images/noite-madrugada-250.png'
        msg.innerHTML = 'Boa noite! ' + msg.innerHTML;
    }
}