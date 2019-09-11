let moneyneeded = (process.argv[2])
let hoursneeded = moneyneeded/(15 * .99575424 * .93798734 * .98550725 * .98950806 * .99755052 * .99848949)
console.log(Math.ceil(hoursneeded))