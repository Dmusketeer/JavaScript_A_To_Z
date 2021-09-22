// This Keyword
// The JavaScript this keyword refers to the object it belongs to.
// It has different values depending on where it is used:
// In a method, this refers to the owner object.
var myObj = {
    fname : "Dheeraj",
    lname : "Tiwari",
    Education:"M.Tech",
    roll : 2019043107,
    Hobby: "Try New Things",
    Stength:"QuickLearner",
    fullName : function(){
       return this.fname + " " +this.lname ;
    //    return fulln; // fullName
    }
}


console.log("Fname: "+myObj.fname);
console.log("lname "+myObj.lname);
console.log("Education "+myObj.Education);
console.log("FullName : "+myObj.fullName("Shivangi Pandey"));
