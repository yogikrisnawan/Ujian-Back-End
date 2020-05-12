// Export defaault connect (MyStatetoProps)(Header)

let chain = ()=>{
    console.log('Chaining')
    return()=>{
        console.log('Returned by chain function')
    }
}

let result = chain()
let number = result()
console.log({angka : number})

const express = require('express')
const app = express()
console.log({app})