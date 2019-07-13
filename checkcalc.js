let hours = (process.argv[2])
let pay = hours * .9118 * 15
console.log(pay)

function BreadDeterminer(){
if (pay >= 200){
    return "Oh boy you making some money this week"
} else {
    return "You bout to be broke smh"
}}
console.log(BreadDeterminer());