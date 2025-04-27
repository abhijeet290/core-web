// JS is single threaded synchronous language

// JS behavior: Async

console.log('10')

setTimeout(()=>{
    console.log('inside settimeout')
},2000)
console.log('20')
console.log('30')

// single threaded: one task will be executed at a time

const time=Date.now()
while(Date.now()-time<2000){
    // console.log(`timer`)
}
console.log(`timer`)
// event listeners are also asynchronous, anything which expects callback are handled asynchronously