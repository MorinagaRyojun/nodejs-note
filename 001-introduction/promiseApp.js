/* Promise ใช้รอข้อมูล เพื่อทำ Async
การใช้งาน
Promise(function(resolve,reject){})
การทำงานของ Promise จะมี 3 สถาณะคือ pending, resolve, reject
*/
/*
then() ใช้งานร่วมกับ resolve หรือเมื่อ Promise ทำงานสำเร็จ
catch() ใช้งานเมื่อ reject หรือผิดพลาด
finally() ไม่ว่าผลลัพท์จะเป็นอย่างไร ให้ทำงานส่วนนี้
*/

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

downloading(url1).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error)
});

// Multi Promise

downloading(url1).then(function(result) {
    console.log(result);
    downloading(url2).then((result) => {
        console.log(result)
        downloading(url3).then((result) => {
            console.log(result)
        })
    })
})

// Multi Promise 2

downloading(url1).then((result) => {
    console.log(result)
    return downloading(url2);
}).then((result) => {
    console.log(result)
    return downloading(url3);
}).then((result) => {
    console.log(result)
})