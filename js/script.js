const form = document.querySelector('form')
const carboidrato = document.querySelector('#col1 h1')
const proteina = document.querySelector('#col2 h1')
const lipidio = document.querySelector('#col3 h1')
let result1
let result2
let result3

form.addEventListener('submit', (event) => {
    event.preventDefault()

    carboidrato.innerHTML = "00"
    proteina.innerHTML = "00"
    lipidio.innerHTML = "00"

    const peso = document.querySelector('#peso').value
    const estilo = document.querySelector('#select').value

    if (peso == ""){
        alert("Insira seu peso")
        return
    }
    if (estilo == "Selecione seu estilo de vida"){
        alert("Escolha um estilo de vida")
        return
    }

    lerCarboidrato(peso, estilo)
    lerProteina(peso, estilo)
    lerLipidio(peso, estilo)

    form.reset()
})

function lerCarboidrato (peso, estilo) {
    if (estilo == "1"){
        result1 = 3.5*peso
        carboidrato.innerHTML = result1
    }
    else if (estilo == "2"){
        result1 = 6*peso
        carboidrato.innerHTML = result1
    }
    else if (estilo == "3"){
        result1 = 5*peso
        carboidrato.innerHTML = result1
    }
    else if (estilo == "4"){
        result1 = 6*peso
        carboidrato.innerHTML = result1
    }
    return
}

function lerProteina (peso, estilo) {
    if (estilo == "1"){
        result2 = 0.9*peso
        proteina.innerHTML = result2
    }
    else if (estilo == "2"){
        result2 = 1.4*peso
        proteina.innerHTML = result2
    }
    else if (estilo == "3"){
        result2 = 1.9*peso
        proteina.innerHTML = result2
    }
    else if (estilo == "4"){
        result2 = 1.9*peso
        proteina.innerHTML = result2
    }
    return
}

function lerLipidio (peso, estilo) {
    if (estilo == "1"){
        result3 = 0.9*peso
        lipidio.innerHTML = result3
    }
    else if (estilo == "2"){
        result3 = 0.9*peso
        lipidio.innerHTML = result3
    }
    else if (estilo == "3"){
        result3 = 1.0*peso
        lipidio.innerHTML = result3
    }
    else if (estilo == "4"){
        result3 = 1.1*peso
        lipidio.innerHTML = result3
    }
    return
}