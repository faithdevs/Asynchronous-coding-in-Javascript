//sync 
/*
function add() {
    console.log(1+2);
    console.log(3+4);
}
    add(); 
*/


//async
console.log("Start");

/*setTimeout(() => {
    console.log("We are in the timeout");
}, 5000);*/

/* const items = [1, 2, 3, 4 ,5];

items.forEach(item => {
    console.log(item);
}); */

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have a data");
            resolve({ userEmail: email });
        }, 5000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
}

function videodetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
              resolve("title of the video");
        }, 2000);
    }); 
    
}

/* const user = loginUser("ugbeshefaith@gmail.com", 12345, user => {
    console.log(user);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
        videodetails(videos[0], title => {
            console.log(title);

            // This type of continous callback is called callback hell, as it becomes confusing as we pile up more callbacks. This issue can be resolved using promises.  
        })
    });
}); 

loginUser('chioma', "french")
.then(user => getUserVideos(user.email))
.then(videos =>  videodetails(videos[0]))
.then(detail => console.log(detail));

//SYNC
/*const user = loginUser("chioma, french");
const videos = videodetails(user.email);
console.log("End");
*/

async function displayUser() {
    try {
        const loggedUser = await loginUser("chioma", 12345);
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videodetails(videos[0]);  
        console.log(detail);
    }
    
    catch (err) {
        console.log("This is an error");
    }
}
displayUser();



const youtube = new Promise(resolve => {
    setTimeout(() => {
        console.log("get stuffs from youtube");
        resolve({ videos: [1, 2, 3, 4, 5]  });
    }, 2000);
});

const facebook = new Promise(resolve => {
    setTimeout(() => {
        console.log("get users from facebook");
        resolve({ user: "Name" });
    }, 3000);
});

Promise.all([youtube, facebook]).then(result => console.log(result));