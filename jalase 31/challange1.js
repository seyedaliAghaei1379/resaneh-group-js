// for(let i = 0 ; i <= 100 ; i++){
    
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log("fizzbuzz")
//     }else if(i % 5 === 0){
//         console.log("buzz")
//     }else if(i % 3 === 0){
//         console.log("fizz")
//     }
//     else{
//         console.log(i)
//     }

// }





let entryNumber = Number(prompt("عدد خود را وارد کنید "))

function getFactoriel (number){


    
    // console.log(number)
    if(number === 0){
        number = 1
    }
    // 6 => 6*5*4*3*2*1
    for(let x = number - 1 ; x >= 1 ; x--){
        
        number  = number * x
    }
    console.log(number)


    // 

     
}

getFactoriel(entryNumber)
// getFactoriel(4)
// getFactoriel(5)
// getFactoriel(6)



// console.log(result)