let me = {
  name: 'Karen',
  getGreeting: function() {
    return 'Hi, my name is ' + this.name + '.';
  }
}

// alternative solution using ES6 string interpolation
let altMe = {
  name: 'Gabe',
  getGreeting: function() {
    return `Hi, my name is ${this.name}.`;
  }
}
