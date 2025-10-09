// ex010: Crie dois arrays (amigosDoFelipe e amigosDoJorge) e diga quais nomes estão em comum. Coloque numa lista e imprima os nomes

// Declarando os arrays de amigos
let amigosDoFelipe = ["Maria", "Nicolas", "Jorge", "Matheus", "Thiago", "Vinícius", "Márcia", "Angela"]
let amigosDoJorge = ["Nicole", "Angela", "Vinícius", "Felipe", "Tiago", "Nicolas", "Márcia"]

// Declarando o array de amigos em comum
let amigosEmComum = []

// Percorre cada array
for (let amigoDoFelipe of amigosDoFelipe) {  // Para cada amigo do Felipe
    for (let amigoDoJorge of amigosDoJorge) {  // Para cada amigo do Jorge
        if (amigoDoFelipe === amigoDoJorge) {  // Se para cada amigo do Felipe for igual ao amigo do Jorge
            amigosEmComum.push(amigoDoFelipe)  // Adicione este amigo na lista amigosEmComum
        }
    }
}

// Verifica se existe amigos em comum e imprime o resultado
if (amigosEmComum.length > 0) {
    console.log(`Felipe tem ${amigosEmComum.length} amigos em comum com Jorge. São eles: ${amigosEmComum}`)
} else {
    console.log("Felipe e Jorge não tem nenhum amigo em comum")
}
