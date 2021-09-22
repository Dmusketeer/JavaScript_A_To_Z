function randomNum() {
    document.getElementById("btn1").onclick=function(){
        userVal = document.getElementById("input").value;
        let randomNum=Math.floor(Math.random()*10)+1 ;
        if (userVal == randomNum) {
         alert("User win")
     }else{
         alert("User lose")
     }
    }
}
randomNum();