let hours = (process.argv[2])
let pay = hours * 15 * .99575424 * .93798734 * .98550725 * .98950806 * .99755052 * .99848949
console.log("$"+(Math.round(pay * 100) / 100))

function BreadDeterminer(){
if (pay >= 200){
    return "Oh boy you making some money this week"
} else {
    return "You bout to be broke smh"
}}
console.log(BreadDeterminer());