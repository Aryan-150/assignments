/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
	constructor(){
		this.variable = null;
		this.expressionArray = [];
		this.operatorsArray = ['+','-','*','/'];
		this.numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
	}

	calculate(expression){
		for(let i = 0; i < expression.length; i++){

			//todo-1: if char is '0' -> '9' or any operator among +,-*,/ or '('
			if((this.numbersArray.includes(expression[i])) || (this.operatorsArray.includes(expression[i])) || expression[i] == '('){
				this.expressionArray.push(expression[i]);
			}

			//todo-2: any alphabetic character
			else if((expression[i] >= 'a' && expression[i] <= 'z') || (expression[i] >= 'A' && expression[i] <= 'Z')){
				throw new Error();
			}

			//todo-3: for ')'
			else if(expression[i] == ')'){
				let firstExp = 0;
				let secondExp = 0;

				let j = i-1;
				while(!this.operatorsArray.includes(expression[j])){
					let power = 0;
					// --> continue to code;
				}
			}
		}
	}


	add(number){
		this.variable += number;
	}

	subtract(number){
		this.variable -= number;
	}

	multiply(number){
		this.variable *= number;
	}
	
	divide(number){
		if(number == 0)
			throw new Error();
		this.variable /= number;
	}

	clear(){
		this.variable = 0;
	}

	getResult(){
		return this.variable;
	}

}

module.exports = Calculator;
