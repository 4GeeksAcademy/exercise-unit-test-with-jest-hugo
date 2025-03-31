const sum =(a,b)=>{
    return a+b
}
console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar=(a)=>{
    
    return oneEuroIs.USD*a
}

const dollars=fromEuroToDollar(1)
console.log(dollars)

const fromDollarToYen=(a)=>{
    let b=oneEuroIs.USD*a
    return oneEuroIs.JPY*b
}

const yen= fromDollarToYen(2)

console.log(yen)

const formYenToPound=(a)=>{
    let b=oneEuroIs.JPY*a
    return oneEuroIs.GBP*b
}

const pound= formYenToPound(2)
console.log(pound)
module.exports={sum,fromEuroToDollar,fromDollarToYen,formYenToPound }

