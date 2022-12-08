const vierkant = document.querySelectorAll('.vierkant')
const mol = document.querySelector('.mol')
const tijd = document.querySelector('#tijd')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let hudigetijd = 60

function randomvierkant(){
    vierkant.forEach(vierkant => {
        vierkant.classList.remove('mol')
    })

    let randomPlek = vierkant[Math.floor(Math.random() * 9)]
   console.log(randomPlek) 
   randomPlek.classList.add('mol')

   hitPosition = randomPlek.id

}
 
vierkant.forEach(vierkant =>{
    vierkant.addEventListener('movedown', () => {
if (vierkant.id == hitPosition ) {
   result++ 
   score.textContent = result
   hitPosition = null
}
    })
} )
function beweegmol(){
    let timerid = null
  timerid = setInterval(randomvierkant, 300)

}

randomPlek()

function aftellen(){
hudigetijd--
tijd.textContent = hudigetijd
if (hudigetijd = 0)
clearInterval(aftellenId)
alert('gamer over je score is' + result)
}

let aftellenId = setInterval(aftellen, 900)