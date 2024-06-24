 let hora = 23;
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 6 || hora >= 18) {
    console.log('Boa noite!!!')
} else if (hora < 12) {
    console.log('Bom dia!!!')
} else {
    console.log('Boa tarde!!!')
}