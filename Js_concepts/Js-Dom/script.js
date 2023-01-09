// var mynameTarget = document.body;
// mynameTarget.style.backgroundImage = "linear-gradient(to right,black,white)";
// var loremTarget = document.getElementsByTagName("p");
// var namecolor = document.getElementById("myName");
// namecolor.style.color = "white";
// // loremTarget.style.backgroundColor = "red";

// for (let i = 0; i <= loremTarget.length; i++) {
//   loremTarget[i].style.color = "red";
// }
// console.log(mynameTarget);

// var mainContentTarget = document.querySelectorAll(".spanClass span");
// // mainContentTarget.style.backgroundColor = "red";
// for (let i = 0; i <= mainContentTarget.length; i++) {
//   mainContentTarget[i].style.color = "red";
// }

// getElementByName

// var out = document.getElementById("selectVal");
// var btn = document.getElementById("radioSubmit");
// btn.addEventListener("click", () => {
//   let rates = document.getElementsByName("rate");
//   rates.forEach((rate) => {
//     if (rate.checked) {
//       out.innerText = `${rate.value} is your friend now!!! `;
//     }
//   });
// });

// getElementsByTagName;
var btn = document.getElementById("btn");
var out = document.getElementById("res");
btn.addEventListener("click", () => {
  let count = document.getElementsByTagName("p");
  out.innerText = `P Tage count : ${count.length}`;
});
