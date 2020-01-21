 //Калькулятор

  let calculator = {
    sum() {
      return this.numb1 + this.numb2;
    },
  
    mul() {
      return this.numb1 * this.numb2;
    },
  
    read() {
      this.numb1 = +prompt('numb1?', 0);
      this.numb2 = +prompt('numb2?', 0);
    }
  };

calculator.read();
alert("Сумма равна: " + calculator.sum());
alert("Произведение равно: " + calculator.mul());