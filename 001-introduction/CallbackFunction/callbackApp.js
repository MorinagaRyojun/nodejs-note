const url1 = "Ryojun.space/file1.json"
const url2 = "Ryojun.space/file2.json"
const url3 = "Ryojun.space/file3.json"


//การทำ CallBack Function เป็นหนึ่งในการทำ Asyn ของ JS
 function simmulateCall(x,y,CallBack) {
     console.log("LOADING...")
     setTimeout(() => {
         const sum = x+y;
         CallBack(sum);
     },5000)
 };

 function display(result) {
     console.log("Result Is :",result);
 }

 simmulateCall(1,1,display);

// OR

 simmulateCall(1,1,(result) => {console.log("Result Is :",result)});

//EX2

 function Downloading(url,CallBack) {
     console.log(`กำลังโหลด : ${url}`)
     setTimeout(() => {
         CallBack();
     }, 5000)
 };

 function complete () {
     console.log("COMPLETE")
 }

// Downloading(url1,complete);

//Ex 3 Multi CallBack Async


function Downloading(url,CallBack) {
    console.log(`กำลังโหลด : ${url}`)
    setTimeout(() => {
        CallBack(url);
    }, 3000)
};

function complete () {
    console.log("COMPLETE")
}

Downloading(url1,(result) => {
    console.log(`COMPLETE : ${result}`)
    Downloading(url2, (result) => {
        console.log(`COMPLETE : ${result}`)
        Downloading(url3, (result) => {
            console.log(`COMPLETE : ${result}`)
        })
    })
})