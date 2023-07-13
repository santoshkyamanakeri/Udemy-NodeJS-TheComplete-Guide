const person = {
  name: "santosh",
  Age: 26,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["sports", "cooking", true, 1];
// for (let hobby of hobbies){
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby" + hobby));
// console.log(hobbies);
hobbies.push("Programing");
console.log(hobbies);

//using slice method to copy array
const copiedArray = hobbies.slice();
console.log(copiedArray);

//using old array to create new array (nested array)
const copyArray = [hobbies];
console.log(copyArray);

//spread operator
const copysArray = [...hobbies];
console.log(copysArray);

//rest ooperators
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3));
