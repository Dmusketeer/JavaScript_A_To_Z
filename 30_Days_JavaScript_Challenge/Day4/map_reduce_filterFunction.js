// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]

var offocerId=[];
var offocerName=[];
officers.forEach(function(officer){
    offocerId.push(officer.id);
    offocerName.push(officer.name);
});
console.log(offocerId);   //[20, 24, 56, 88]
console.log(offocerName);   //[
// 'Captain Piett',
//     'General Veers',
//     'Admiral Ozzel',
//     'Commander Jerjerrod'
// ]


// Notice how you have to create an empty array beforehand ? Let’s see what it looks like when using.map():

var offId = officers.map(function(officer){
    return officer.id;
});
var offId = officers.map(officerIds=>officerIds.id);  // ES6 version
console.log(offId);

var offName = officers.map(officerName => officerName.name);//ES6 version
console.log(offName);           // returns names of the officers

// how does.map() work ? Basically is takes 2 arguments, a callback and an optional context(will be considered as this in the callback)






                                                // .reduce()
// Just like.map(), .reduce() also runs a callback for each element of an array.What’s different here is that reduce passes the result of this callback(the accumulator) from one array element to the other.
// The accumulator can be pretty much anything(integer, string, object, etc.) and must be instantiated or passed when calling.reduce().

var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

// We need to know the total years of experience of all of them.With.reduce(), it’s pretty straightforward:

var exp = 0;
var totalExp = pilots.forEach(function(pilot){
    exp +=pilot.years;
}) 
console.log(exp);

var total_Exp=pilots.reduce(function(acc,exp){
    return acc + exp.years ;
},0)
var total_Exp = pilots.reduce((acc,exp)=>{return acc+exp.years},0);//ES6
console.log(total_Exp);

// Now let’s say I want to find which pilot is the most experienced one.For that, I can use reduce as well:
var mostExp = pilots.reduce(function(acc,exp){
    return (acc.years || 0)>exp.years?acc:exp ;
});
console.log(mostExp);





//                                         .filter()
// What if you have an array, but only want some of the elements in it ? That’s where.filter() comes in !

// Basically, if the callback function returns true, the current element will be in the resulting array.If it returns false, it won’t be.

var pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels",
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    }
];

// var filterFun = pilots.filter(function(pivot){
//     return pivot.faction === "Rebels" ;
// });
var filterFun=pilots.filter(pivot=>pivot.faction==="Rebels"); //ES6
// var filterFun1 = pilots.filter(function(pivot){
//     return pivot.faction === "Empire" ;
// });
var filterFun1 = pilots.filter(pivot => pivot.faction === "Rebels");//ES6

console.log(filterFun);
console.log(filterFun1);




//                                     Combining.map(), .reduce(), and.filter()
// Since all three are called on arrays and since.map() and.filter() both return arrays, we can easily chain our calls.

var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

// Our objective: get the total score of force users only.Let’s do it step by step!
// First, we need to filter out the personnel who can’t use the force:
var jediPersonnel = personnel.filter(function (person) {
    return person.isForceUser;
});
// Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)
// With that we have 3 elements left in our resulting array.We now need to create an array containing the total score of each Jedi.
var jediScores = jediPersonnel.map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
});
// Result: [154, 110, 156]
// And let’s use reduce to get the total:
var totalJediScore = jediScores.reduce(function (acc, score) {
    return acc + score;
}, 0);
// Result: 420
// And now here’s the fun part… we can chain all of this to get what we want in a single line:
var totalJediScore = personnel
    .filter(function (person) {
        return person.isForceUser;
    })
    .map(function (jedi) {
        return jedi.pilotingScore + jedi.shootingScore;
    })
    .reduce(function (acc, score) {
        return acc + score;
    }, 0);
// And look how pretty it is with arrow functions:
const totalJediScore = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);