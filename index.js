const add = (numOne, numTwo) => {
   return numOne + numTwo
 
}
console.log(add(2, 1))

// ----------------------------------------------------

const hoursSecs = (num) => {
return num * 3600
}
console.log(hoursSecs(3))


// ----------------------------------------------------


const preRec = (num1, num2) => {
return 2 * num1 + 2 * num2
}

console.log(preRec(20, 10))


// ----------------------------------------------------


let string = ["hello", "bye"]
const str = () => {
    return string.push("sum")

}

str()
console.log(string)


// ----------------------------------------------------


const name = (num1, num2) => {
    if (num1 + num2 >= 100) {
        return true
    } else{
        return false
    }
}
name()

console.log(name(99, 1))


// ----------------------------------------------------

const name = (num1) => {
return num1 <= 0
}
console.log(name(0))


// ----------------------------------------------------


function boolean(sum) {
if(sum === true){
    return false
}if(sum === false){
    return true
}
}

console.log(boolean(2))


// ----------------------------------------------------

function remainder(num1, num2) {
return num1 % num2
}
console.log(remainder(9, 8))


// ----------------------------------------------------


function isOdd(num) {
return num % 2 === 0
}

console.log(isOdd(2))

// ----------------------------------------------------


function isEven(num) {

    if(num % 2 === 0){
        return 1
    }return -1

}

console.log(isEven(1))

// ----------------------------------------------------


function loggedOut (str, str2) {
return str === 'HELLO' && str2 === 'GOODBYE'

}

console.log(loggedOut('HELLO', 'GOODBYE'))


// ----------------------------------------------------
