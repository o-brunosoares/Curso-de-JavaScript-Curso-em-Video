var idade = 54;
console.log(`Você tem ${idade} anos de idade.`)

if (idade < 16) {
    console.log('Vocâ ainda não vota.')
} else if (idade < 18 || idade > 65) {
    console.log('O seu voto é opcional.')
} else {
    console.log('O seu voto é obrigatório.')
}