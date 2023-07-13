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
hobbies.push('Programing');
console.log(hobbies)