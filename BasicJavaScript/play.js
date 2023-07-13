const person = {
  name: 'santosh',
  Age: 26,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

person.greet();