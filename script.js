const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p4")
const p5 = document.getElementById("p5")
const p6 = document.getElementById("p6")

const upperInfoBox = document.getElementById("upperInfoBox")
const lowerInfoBox = document.getElementById("lowerInfoBox")

const p = document.getElementById("p")
let lastEvent = ""
let eventCounter = 0
let lastArticle = ""
let lastPlace = ""

const a1 = document.getElementById("a1")
const a2 = document.getElementById("a2")
const a3 = document.getElementById("a3")
const a4 = document.getElementById("a4")
const a5 = document.getElementById("a5")
const a6 = document.getElementById("a6")

// Funksjon for å opprette tekstboks
function showInfo(event, place, article) {
    if (lastArticle != "") {
        lastArticle.style.backgroundColor = "var(--color2)"
    }

    // Gir p elementet innholdet fra parameterene som er gitt slik at det koresponderer med tittelen
    p.innerHTML = event.innerHTML
    place.appendChild(p)
    place.classList.add("info")
    article.style.backgroundColor = "var(--color3)"

    // For å kunne lukke boksen
    if (lastEvent === event) {
        eventCounter += 1
    } else {
        eventCounter = 0
    }
    if (eventCounter % 2) {
        p.innerHTML = ""
        place.classList.remove("info")
    }
    lastEvent = event
    lastArticle = article
}

// Legger til event listener som oppretter tekstboks med egne parametere
a1.addEventListener("click", function() {
    showInfo(p1, upperInfoBox, a1)
})
a2.addEventListener("click", function() {
    showInfo(p2, upperInfoBox, a2)
})
a3.addEventListener("click", function() {
    showInfo(p3, upperInfoBox, a3)
})
a4.addEventListener("click", function() {
    showInfo(p4, lowerInfoBox, a4)
})
a5.addEventListener("click", function() {
    showInfo(p5, lowerInfoBox, a5)
})
a6.addEventListener("click", function() {
    showInfo(p6, lowerInfoBox, a6)
})
