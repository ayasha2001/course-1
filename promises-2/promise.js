console.log("person 1")
console.log("person 2")

const wifeBringingTickets = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("tickets")
    },2000)
})

const getPopcorn = wifeBringingTickets.then((m) => {
    console.log("msg "+m)
    return new Promise((resolve,reject) => {
        resolve("i got popcorn")
    })
})

const addButter = getPopcorn.then((m) =>{
    console.log("msg "+ m)
    return new Promise((resolve,reject) => {
        resolve("i added butter")
    })
})

const getColdDrinks = addButter.then((m)=>{
    console.log("msg",m)
    return new Promise((resolve,reject) => {
        resolve("got you some cold drinks")
    })
})

getColdDrinks.then((m) => {
    console.log("msg",m)
})

console.log("person 4")
console.log("person 5")