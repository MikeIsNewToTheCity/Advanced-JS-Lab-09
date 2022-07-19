/*
    Name: Mike Villeneuve
    Date: 07/19/2022
*/


const init = () => {
    
    let solemnPromise01 = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Hello World!")
        }, 1500)
    });

    solemnPromise01.then(data => {
        console.log(data);
    });

    let solemnPromise02 = new Promise((resolve, reject) => {
        setTimeout(() => {
        reject(Error("Unable to resolve the request."))
        }, 500)
    });

    solemnPromise02.then(data => {
        console.error(data);
    }).catch(error => {
        console.error(error);
    })
}


window.onload = init;