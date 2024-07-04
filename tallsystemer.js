// BINÆRE TALL

// Henter inn elementer og lager et tilfeldig tall
const numToBinaryElm = document.getElementById("numToBinary")
let numToBinary = Math.floor(Math.random() * 256) // Maks 255, 1 byte
numToBinaryElm.innerHTML = numToBinary
const feedbackBin = document.getElementById("feedbackBin")
const checkBin = document.getElementById("checkBin")

// Legger til event listener på knappen
checkBin.addEventListener("click", function () {
    // For å restarte kun hvis man har riktig
    let restartBin = false
    if (checkBin.innerHTML === "Restart") {
        restartBin = true
        numToBinary = Math.floor(Math.random() * 256)
        numToBinaryElm.innerHTML = numToBinary
        feedbackBin.innerHTML = ""
    }

    // Definerer de ulike inputtene med sine respektive verdier
    const bit8 = document.getElementById("bit8").value * 128
    const bit7 = document.getElementById("bit7").value * 64
    const bit6 = document.getElementById("bit6").value * 32
    const bit5 = document.getElementById("bit5").value * 16
    const bit4 = document.getElementById("bit4").value * 8
    const bit3 = document.getElementById("bit3").value * 4
    const bit2 = document.getElementById("bit2").value * 2
    const bit1 = document.getElementById("bit1").value * 1

    // Summerer inputten
    const binValue = bit8 + bit7 + bit6 + bit5 + bit4 + bit3 + bit2 + bit1

    // Sjekker om inputten er lik verdien av det tilfeldige tallet
    checkBin.innerHTML = "Sjekk svar"
    if (numToBinary == binValue) {
        feedbackBin.innerHTML = "Riktig!"
        feedbackBin.style.color = "green"
        checkBin.innerHTML = "Restart"
    } else if (numToBinary != binValue && restartBin == false) {
        feedbackBin.innerHTML = "Feil!"
        feedbackBin.style.color = "red"
    }
})



// HEKSADESIMALER
const hexDec = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"] // Array med alle heksadesimaler
const hex2Elm = document.getElementById("hex2")
const hex1Elm = document.getElementById("hex1")

// Lager to tilfeldige siffer opp til 16
let hex2 = Math.floor(Math.random() * 16)
let hex1 = Math.floor(Math.random() * 16)
// Bruker tallene som indeks til å hente to tilfeldige heksadesimaler fra arrayet
let hex2Index = hexDec[hex2]
let hex1Index = hexDec[hex1]

hex2Elm.innerHTML = hex2Index
hex1Elm.innerHTML = hex1Index

const feedbackHex = document.getElementById("feedbackHex")
const checkHex = document.getElementById("checkHex")

// Legger til event listener
checkHex.addEventListener("click", function () {
    // For å restarte
    let restartHex = false
    if (checkHex.innerHTML === "Restart") {
        restartHex = true
        hex2 = Math.floor(Math.random() * 16)
        hex1 = Math.floor(Math.random() * 16)
        hex2Index = hexDec[hex2]
        hex1Index = hexDec[hex1]
        hex2Elm.innerHTML = hex2Index
        hex1Elm.innerHTML = hex1Index
        feedbackHex.innerHTML = ""
    }

    // Finner verdien av heksadesimalet og svaret fra brukeren
    const hexValue = hex2 * 16 + hex1
    const userAnswer = document.getElementById("userAnswer").value

    // Sammenligner svar med fasit
    checkHex.innerHTML = "Sjekk svar"
    if (hexValue == userAnswer) {
        feedbackHex.innerHTML = "Riktig!"
        feedbackHex.style.color = "green"
        checkHex.innerHTML = "Restart"
    } else if (hexValue != userAnswer && restartHex == false) {
        feedbackHex.innerHTML = "Feil!"
        feedbackHex.style.color = "red"
    }
})