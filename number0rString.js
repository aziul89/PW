
function numberOrString(ent) {
    while (true) {
        var ent = prompt("Número ou String (ou digite 'parar' para encerrar):")

        if (ent === "parar") {
            console.log("Encerrado.")
            break;
        }
        var ent
        if (Number(ent)) {
            if (ent % 2 === 0) {
                console.log(ent + " é um número par.")
            } else {
                console.log(ent + " é um número ímpar.")
            }
        } else if (typeof ent === "string") {
            console.log(ent + " é uma string.")
        } else {
            console.log(ent + " não é válido, pois não é um número nem uma string.")
        }
    }
}

numberOrString()