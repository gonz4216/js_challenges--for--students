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


const nameThing = (num1, num2) => {
    if (num1 + num2 >= 100) {
        return true
    } else{
        return false
    }
}
nameThing()

console.log(nameThing(99, 1))


// ----------------------------------------------------

const nameName = (num1) => {
return num1 <= 0
}
console.log(nameName(0))


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


function flasyOr(num1, num2) {
    return (!num1) ? num1 : num2
}

console.log(flasyOr(null,2))


// ----------------------------------------------------

function arrLength(arr) {
    
 console.log(arr.length)
    
return arr
}


arrLength([1,4,5,4,1])

// ----------------------------------------------------


function sumOfArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i){
        sum += arr[i]
    }
    console.log(sum)
}

sumOfArray([1,3,5])


// ----------------------------------------------------


function addNum(num) {
    let sum = 0
    for (let i = 0; i <= num; ++i){
        sum += i
         
    }
    console.log(sum)
    return sum
   
}

addNum(3)


// ----------------------------------------------------

function calctime(secs) {
    let arr = [5, 7, 2]
    let newi = Math.max(1,2,5,4)

    return console.log(newi)
}
calctime()


// ----------------------------------------------------


function reverseString(str) {
let split = str.split('')

let reverse = split.reverse("")

let join = reverse.join("")
return console.log(join)
}
reverseString("hello");

// ----------------------------------------------------



function reverseString(str) {
    for(let i = 0; i < str.length; ++i) {
        str[i] = 0  
    }
    return str
}


console.log(reverseString([2,4,6,7]))

// ----------------------------------------------------


function fruits(value) {
value = value.filter(e => e !== "apple")
    return value

}
    console.log(fruits(["banana", "apple", "pear"]))



    
    function fruits(value) {
        let arr = ['A', 'B', 'C'];
        arr = arr.filter(e => e !== 'B');
        return console.log(arr)
    
    }
        fruits()


    
// ----------------------------------------------------

function fitlerFalse(arr) {

return arr.filter(e => !!e === true)

}
console.log(fitlerFalse([5,1,2,0,""]))




function fitlerFalse(arr) {
    let newArr = []
for (let i = 0;i < arr.length; ++i){
    if(!arr[i] === true) {
       newArr.push(arr[i])
    }
   
}
return newArr
}
console.log(fitlerFalse([5,1,2,0,""]))


// ----------------------------------------------------


let arr = ["", 1,2,0]
let newArr = []
for(let i = 0; i < arr.length; i++){
  
   newArr.push(!!arr[i])
}

console.log(newArr)


// ----------------------------------------------------


function star(num) {
    if(num === 1){
        return "*"
    }else if(num === 2){
        return "**"
    }
}

console.log(star(2))



// ----------------------------------------------------



 