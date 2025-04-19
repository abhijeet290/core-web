const grandparent=document.getElementById('grandparent')
const parent=document.getElementById('parent')
const child=document.getElementById('child')

// by default it runs bubbling, value of capture is false
// addEventListener(first_event, callback function, capture)

// to do event capturing we need to set the value of capture to true

child.addEventListener('click',(e)=>{
    console.log(`child clicked`)
    e.stopPropagation()
})
parent.addEventListener('click',()=>{
    console.log(`parent clicked`)
})
grandparent.addEventListener('click',()=>{
    console.log(`grandparent clicked`)
})
// to do event capturing we need to set the value of capture to true

// child.addEventListener('click',()=>{
//     console.log(`child clicked`)
// },true)
// parent.addEventListener('click',()=>{
//     console.log(`parent clicked`)
// },false)
// grandparent.addEventListener('click',()=>{
//     console.log(`grandparent clicked`)
// },true)

// Event delegation
