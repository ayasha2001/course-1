var details = {
    posts:["post1","post2"],
    lastActivityTime:new Date()
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            details.lastActivityTime=new Date()
            resolve(details.date)
        },1000)
    })
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        details.posts.push(post)
        resolve(post)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        const deletedPost= details.posts.pop()
        resolve(deletedPost)
    })
}

console.log("Last Activity Time:",details.lastActivityTime)
createPost("post3")
    .then(() => createPost("post4"))
    .then(() => updateLastUserActivityTime())
    .then(lastActivityTime => {
        console.log("All Posts:", details.posts);
        console.log("Last Activity Time:", details.lastActivityTime);
        return deletePost();
    })
    .then(deletedPost => {
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", details.posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });