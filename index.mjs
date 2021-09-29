const addFunc = (num1, num2) => console.log(num1 + num2);

export default class Addition {
  constructor() {
    this.addFunc = addFunc;
  }
}
