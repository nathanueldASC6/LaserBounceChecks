let hours = document.getElementById("hoursworked")
const hoursSubmit = document.getElementById("submitButton")
const hoursDisp = document.getElementById('breadgotten')
hoursSubmit.addEventListener('click',BreadDeterminer)
const paystubs = document.createElement("p")
const breaded = document.createElement("h1")

function BreadDeterminer(event){
    event.preventDefault();
    hoursDisp.innerHTML = ""
    let userSearch = hours.value
    console.log(userSearch)
    let pay = userSearch * 15 * .99575424 * .93798734 * .98550725 * .98950806 * .99755052 * .99848949
    paystubs.innerHTML = "$"+(Math.round(pay * 100) / 100)
    hoursDisp.appendChild(paystubs)
}