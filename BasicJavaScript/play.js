const name = "Santosh";
let age = 26;
const hobbies = true;

const summarizeUser = (name, age, hobbies) => {
  return name + " " + age + " " + hobbies;
};

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));
console.log(summarizeUser(name, age, hobbies))