console.log("person 1")
console.log("person 2")

const premovie = async () => {
    const wifeBringingTickets = new Promise((resolve,reject) => { 
        setTimeout(()=>{
            resolve("tickets")
        },2000)
    })

    const getPopcorn = new Promise((resolve,reject) => { 
        resolve("i got u popcorn")
    })
    const addButter = new Promise((resolve,reject) => { 
        resolve("i got u some butter")
    })

    const getColdDrinks = new Promise((resolve,reject) => { 
        resolve("i got u colddrinks")
    })

    const data1 = await wifeBringingTickets
    console.log(data1)

    const data2 = await getPopcorn
    console.log(data2)

    const data3 = await addButter
    console.log(data3)

    const data4 = await getColdDrinks
    console.log(data4)
}


console.log("person 4")
console.log("person 5")