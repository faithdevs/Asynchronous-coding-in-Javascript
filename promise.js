const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("faith");
        //resolve("hello");
        reject(new Error("No reply"));
    }, 500);
} )

promise.then(value => {
    console.log(value);
})
.catch(err => console.log(err.message));