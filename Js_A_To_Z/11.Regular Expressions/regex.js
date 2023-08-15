// let re = /Dheeraj/i;
// let result = re.test("dheeraj");
// let text = result;
// const doc = document.getElementById("main");
// // doc.innerHTML = `<h1>${text}</h1>`;

// let str = "hey Bro! how are you? bro, is it everything fine?";
// // let result = str.match(/!/gi);
// let result = str.replace(/bro/gi, "Dheeraj");
// console.log(result);

// let message = "hey Bro! how are you? bro, is it everything fine?";
// let re = /bro/gi;
// let result = re.exec(message);
// console.log(result);

// Character Classes or character set
// let phone = "8965252722";
// let re = /\d/g;
// let result = phone.match(re); //return array of characters
// let newResult = result.join(""); // concatenate elements separated by commas
// console.log(newResult);

// onliner
// console.log("9787293723".match(/\d/g).join(""));

function emailValidate() {
  const usermail = document.getElementById("email");
  const userName = document.getElementById("first_name").value;
  const userEmail = document.getElementById("email").value;
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  console.log(userName);
  if (re.test(userEmail)) {
    console.log(userEmail);
    console.table("Valid Email");
    return ture;
  } else {
    usermail.style.border = "red solid 2px";
    console.log("invalid email");
    return false;
  }
}
