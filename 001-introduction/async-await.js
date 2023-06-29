// Asynce & Await

const connect = true;
const url1 = "Ryojun.space/001.json"
const url2 = "Ryojun.space/002.json"
const url3 = "Ryojun.space/003.json"

function downloading (url) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (connect){
                resolve(`Download : ${url} Is Complete`);
            } else {
                reject("Erorr...")
            }
        }, 3000)
    })
}

async function start() {
    console.log("001")
    console.log(await downloading(url1))
    console.log("002")
    console.log(await downloading(url2))
    console.log("003")
    console.log(await downloading(url3))
}

start()