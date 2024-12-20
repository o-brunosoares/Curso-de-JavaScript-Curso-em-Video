// Seleção de elementos


//Por Marca
let corpo = document.body
corpo.style.background = "darkBlue"
let p1 = document.getElementsByTagName("p")[1] //Como temos dois parágrafos, ao usar esse método de seleção, se não identificarmos qual parágrafo queremos, o JS vai selecionar os dois parágrafos, então usamos os colchetes ([]) para selecionar qual parágrafo queremos usar, sempre lembrando que o primeiro elemento sempre será representado pelo número 0 (no caso do JS pelo menos).

document.write(`No primeiro parágrafo está escrito: ${p1.innerHTML}`)

// Por ID
let msg = document.getElementById("msg")
msg.innerText = "Olá Mundo"

// Por nome
// Da mesma maneira que é usado na seleção por ID, classes e nome das tags, se eu tiver algum elemento com o atributo "name", eu posso fazer essa seleção

// Por Classe
let titulo = document.getElementsByClassName("titulo")[0]
titulo.style.background = "gray"

// Por Seletor
let p = document.querySelector(".primeiro-paragrafo")
p.style.color = "lime"