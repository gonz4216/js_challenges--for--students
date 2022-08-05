// async function postByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

//     const result = await promise.json()

//     const post = result.filter(elem => elem.userId === userId)

//     console.log(post)
// }

// postByUser(5)
async function postByUser(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

    const result = await promise.json()
    const post = result.filter(elem => elem.completed === false).slice(1,5)
   
   

    console.log(post)

}

postByUser()
