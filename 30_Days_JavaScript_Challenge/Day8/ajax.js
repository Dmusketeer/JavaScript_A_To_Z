// let fetchbtn=document.getElementById("fetchbtn");
// fetchbtn.addEventListener("click", btnclickHandler);

// function btnclickHandler(){
//     console.log("you have click fetch button");
//     //instatiate and xhr object
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','testsw.txt',true) // true in case of AsyncRequest would be false in synchronous mode 

//     // what  to do when progress the request is
//     xhr.onprogress=function(){
//         console.log('loading');
//     }
//     // what to do when request is ready
//     xhr.onload=function(){
//         if(this.status===200){
//         console.log(this.responseText);}
//         else{
//             console.log("some error occur");
//         }
//     }
//     xhr.send();
// } // get request.



let backupbtn = document.getElementById("backupbtn");
backupbtn.addEventListener("click", btnclickHandler);

function btnclickHandler() {
    console.log("you have click populate button");
    //instatiate and xhr object
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1/todos', true) // true in case of AsyncRequest would be false in synchronous mode
    xhr.getResponseHeader('Content-Type','application/json')

    // what  to do when progress the request is
    // xhr.onprogress = function () {
    //     console.log('loading');
    // }
    // what to do when request is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj=JSON.parse(this.responseText);
            let list =document.getElementById("list");
            let str="";
            for(key in obj){
                str+=`<li>${obj[key].title}</li>`;
            }
            list.innerHTML=str;
        }
        else {
            console.log("some error occur");
        }
    }
    xhr.send();
}// post request 