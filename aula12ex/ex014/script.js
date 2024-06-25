function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'images/dia-250.png'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'images/tarde-250.png'
    } else {
        // Boa noite
        img.src = 'images/noite-250.png'
    }
}